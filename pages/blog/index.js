import { useRef } from "react";
import { getAllPosts } from "../../utils/api";
import { ISOToDate } from "../../utils";
import Header from "../../components/Header";
import Router from "next/router";
import Head from "next/head";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";

const Blog = ({ posts }) => {
    const text = useRef();

    useIsomorphicLayoutEffect(() => {
        stagger([text.current], { y: 30 }, { y: 0 });
    }, []);
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
                            posts.map((post, index) => (
                                <div
                                    className="cursor-pointer"
                                    key={index}
                                    onClick={() =>
                                        Router.push(`/blog/${post.slug}`)
                                    }
                                >
                                    <img
                                        className="w-full h-60 rounded-lg shadow-lg object-cover"
                                        src={post.image}
                                        alt={post.title}
                                    ></img>
                                    <h2 className="mt-5 text-4xl">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 opacity-50 text-lg">
                                        {post.preview}
                                    </p>
                                    <span className="text-sm mt-5 opacity-25">
                                        {ISOToDate(post.date)}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps({ params }) {
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
