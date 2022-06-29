import { getAllPosts } from "../../utils/api";
import { ISOToDate } from "../../utils";
import Header from "../../components/Header";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div className="container mx-auto mb-10">
      <Header isBlog={true}></Header>
      <div className="mt-10">
        <h1 className="text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
          Blog.
        </h1>
        <div className="mt-10 grid grid-cols-3 gap-10">
          {posts &&
            posts.map((post, index) => (
              <div className="w-96 cursor-pointer" key={index}>
                <img
                  className="w-full h-60 rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1656188505561-19f1a1b6cda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"></img>
                <h2 className="mt-5 text-4xl">{post.title}</h2>
                <p className="mt-2 opacity-50 text-lg">{post.preview}</p>
                <span className="text-sm mt-5 opacity-25">
                  {ISOToDate(post.date)}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const posts = getAllPosts(["slug", "title", "preview", "author", "date"]);

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default Blog;
