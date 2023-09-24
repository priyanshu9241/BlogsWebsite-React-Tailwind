import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="max-w-[670px] w-11/12 mx-auto flex-col gap-y-7 py-8">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Posts Found</p>
        </div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id} className="mb-6 mt-11" >
              <p className="text-lg font-bold">{post.title}</p>
              <p>
                By <span className="italic ">{post.author}</span> on{" "}
                <span className="font-semibold underline">{post.category}</span>
              </p>
              <p>
                Posted on <span className="text-sm"> {post.date}</span>
              </p>
              <p className="mt-5">{post.content}</p>
              <div className="mt-1 mb-1 space-x-2">
                {post.tags.map((tag, index) => {
                  return (
                    <span
                      className="text-xs font-bold text-blue-600 underline"
                      key={index}
                    >{`#${tag}`}</span>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blogs;
