import fs from "fs";
import { join } from "path";
import path from 'path';
import matter from "gray-matter";
import cheerio from 'cheerio';

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((slug) => slug.endsWith('.md') || slug.endsWith('.html'));
}
export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$|\.html$/, '');
  const fullPathMd = path.join(postsDirectory, `${realSlug}.md`);
  const fullPathHtml = path.join(postsDirectory, `${realSlug}.html`);
  let fileContents;
  let metadata;

  if (fs.existsSync(fullPathMd)) {
    // console.log(`Found Markdown file for post: ${slug}`);
    fileContents = fs.readFileSync(fullPathMd, 'utf8');
    metadata = extractMetadata(fileContents, 'md',realSlug);
  } else if (fs.existsSync(fullPathHtml)) {
    // console.log(`Found HTML file for post: ${slug}`);
    fileContents = fs.readFileSync(fullPathHtml, 'utf8');
    metadata = extractMetadata(fileContents, 'html',realSlug);
  } else {
    console.error(`Post not found: ${slug}`);
    throw new Error(`Post not found: ${slug}`);
  }

  const items = {};
  // Only include the specified fields
  fields.forEach((field) => {
    if (field === 'slug') items[field] = realSlug;
    if (metadata[field]) items[field] = metadata[field];
  });
  return items;
}

export function extractMetadata(fileContents, fileType,realSlug) {
  let metadata;

  if (fileType === 'md') {
    // Use matter to parse the Markdown file
    const { data, content } = matter(fileContents);
    metadata = { ...data, content,slug: realSlug,type: 'md' };
  } else if (fileType === 'html') {
    // Use cheerio to parse the HTML file
    const $ = cheerio.load(fileContents);
    const content = $('body').html();
    metadata = {
      slug:realSlug,
      content,
      type: 'html',
    };
  }

  return metadata;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}