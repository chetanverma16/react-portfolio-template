import React from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import markdownToHtml from "../../utils/markdownToHtml";
import Header from "../../components/Header";

const BlogPost = ({ post }) => {
  console.log(post);
  return (
    <div className="container mx-auto mt-10">
      <Header isBlog={true} />
      <div className="mt-10 flex flex-col">
        <img
          className="w-full h-96 rounded-lg shadow-lg object-cover"
          src={post.image}></img>
        <h1 className="mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold">
          {post.title}
        </h1>
        <h2 className="mt-2 text-xl max-w-4xl text-darkgray opacity-50">
          {post.tagline}
        </h2>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "date",
    "slug",
    "title",
    "tagline",
    "preview",
    "image",
    "keywords",
    "author",
    "readingtime",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default BlogPost;
