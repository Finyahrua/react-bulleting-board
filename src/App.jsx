import React, { useState } from "react";
import PostsList from "./features/posts/PostsList";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./features/posts/postsSlice";
import { useDispatch } from "react-redux";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onSavePost = () => {
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid,
          title: title,
          content: content,
        }),
      );

      setTitle("");
      setContent("");
    }
  };

  const onContentChange = (e) => setContent(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);
  return (
    <div className="flex min-h-screen  bg-base-200">
      <div className="ml-[20%] flex justify-start pt-10 text-left">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Posts..</h1>
          <div className="flex min-w-max flex-row justify-between">
            <div className="min-h-[60vh] border-r-2 py-6 pr-6">
              <PostsList />
            </div>
            <div className="mt-[50px] ml-[40px] w-[400px]">
              <h3 className=" mb-4 text-3xl font-bold underline underline-offset-8">
                Add Posts..
              </h3>
              <form action="">
                <label htmlFor="postTitle" className=" text-xl font-bold">
                  Post title:
                </label>
                <input
                  type="text"
                  id="postTitle"
                  placeholder="Enter post title"
                  className="input input-bordered input-success mt-3 w-full"
                  value={title}
                  onChange={onTitleChange}
                />
                <div className="mt-[40px]">
                  <label htmlFor="postTitle" className=" text-xl font-bold">
                    Post content:
                  </label>
                  <br />
                  <textarea
                    className="textarea input-success mt-3 w-[400px]"
                    placeholder="post content"
                    id="postContent"
                    value={content}
                    onChange={onContentChange}
                  ></textarea>
                </div>
                <button
                  className="btn btn-wide mt-4 bg-green-500 pt-5 pb-8"
                  type="button"
                  onClick={onSavePost}
                >
                  Save Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
