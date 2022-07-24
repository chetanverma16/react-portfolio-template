import { useRef } from "react";
import { getAllPosts } from "../../utils/api";
import { ISOToDate } from "../../utils";
import Header from "../../components/Header";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Button from "../../components/Button";

const Blog = ({ posts }) => {
  const text = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    stagger([text.current], { y: 30 }, { y: 0 });
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
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="container mx-auto mb-10">
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
                  {process.env.NODE_ENV === "development" && (
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
                </div>
              ))}
          </div>
        </div>
      </div>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={createBlog} type={"primary"}>
            Add New Post +{" "}
          </Button>
        </div>
      )}
    </>
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

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default Blog;
