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
                        className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full laptop:w-4/5"
                    >
                        Blog.
                    </h1>
                    <div className="mt-10 p-1 flex flex-nowrap flex-col justify-center tablet:flex-row tablet:flex-wrap gap-10">
                        {posts &&
                            posts.map((post, index) => (
                                <div
                                    className="basis-full grow-0 shrink-1 tablet:basis-1/3 laptop:basis-1/4  cursor-pointer"
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
