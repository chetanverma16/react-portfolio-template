import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";
import notion from '../../utils/notionClient';
import ReactMarkdown from 'react-markdown';

function Post({ htmlContent, type }) {
  if (type === 'html') {
    // console.log('htmlContent:', htmlContent);
    // console.log('type:', type);
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  } else if (type === 'md') {
    // console.log('mdContent:', htmlContent);
    // console.log('type:', type);
    return <ReactMarkdown>{htmlContent}</ReactMarkdown>;
  }
}
const Blog = ({ posts }) => {
  const showBlog = useRef(data.showBlog);
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
    if (showBlog.current) stagger([text.current], { y: 30 }, { y: 0 });
    else router.push("/");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const createBlog = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  const deleteBlog = (slug) => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
        }),
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };
  return (
    showBlog.current && (
      <>
        {data.showCursor && <Cursor />}
        <Head>
          <title>Blog</title>
        </Head>
        <div
          className={`container mx-auto mb-10 ${
            data.showCursor && "cursor-none"
          }`}
        >
          <Header isBlog={true}></Header>
          <div className="mt-10">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
            >
              Blog.
            </h1>
            <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
              {posts &&
                posts.map((post) => (
                  <div
                    className="cursor-pointer relative"
                    key={post.slug}
                    onClick={() => Router.push(`/blog/${post.slug}`)}
                  >
                    <img
                      className="w-full h-60 rounded-lg shadow-lg object-cover"
                      src={post.image}
                      alt={post.title}
                    ></img>
                    <h2 className="mt-5 text-4xl">{post.title}</h2>
                    <p className="mt-2 opacity-50 text-lg">{post.preview}</p>
                    <span className="text-sm mt-5 opacity-25">
                      {ISOToDate(post.date)}
                    </span>
                    {process.env.NODE_ENV === "development" && mounted && (
                      <div className="absolute top-0 right-0">
                        <Button
                          onClick={(e) => {
                            deleteBlog(post.slug);
                            e.stopPropagation();
                          }}
                          type={"primary"}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                    <Post htmlContent={post.content} type={post.type} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {process.env.NODE_ENV === "development" && mounted && (
          <div className="fixed bottom-6 right-6">
            <Button onClick={createBlog} type={"primary"}>
              Add New Post +{" "}
            </Button>
          </div>
        )}
      </>
    )
  );
};

export async function getStaticProps() {
  const posts = getAllPosts([
        "slug",
        "title",
        "image",
        "preview",
        "author",
        "date",
      ]);
  console.log('getStaticProps posts:', posts);
  return {
    props: {
      posts:[...posts], // pass posts to your page
    },
  };
}

// export async function getStaticProps() {
//   const postsDirectory = path.join(process.cwd(), 'posts');
//   const filenames = fs.readdirSync(postsDirectory);

//   const posts = filenames.map(filename => {
//     const filePath = path.join(postsDirectory, filename);
//     const fileContent = fs.readFileSync(filePath, 'utf8');

//     if (filename.endsWith('.md')) {
//       // Extract data from Markdown file
//       const { data } = matter(fileContent);
//       return {
//         slug: filename.replace('.md', ''),
//         ...data
//       };
//     } else if (filename.endsWith('.html')) {
//       // Extract data from HTML file
//       const $ = cheerio.load(fileContent);
//       const title = $('title').text();
//       const image = $('img.page-cover-image').attr('src');
//       const preview = $('p.page-description').text();

//       return {
//         slug: filename.replace('.html', ''),
//         title,
//         image,
//         preview,
//         date: new Date().toISOString(), // You might need to extract this from the HTML as well
//       };
//     }
//   });

//   return {
//     props: {
//       posts, // pass posts to your page
//     },
//   };
// }


export default Blog;
