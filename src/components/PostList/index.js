import React, { useCallback } from "react";
import PostList from "../../posts.json";
import {
  MainCont,
  PostTitle,
  Links,
  Layout,
  Header,
  Navbar,
  Footer,
  Title,
  PostCard,
  ImageContainer,
  Thumbnail,
  Excerpt,
} from "./postStyle.js";
import { useNavigate, useParams } from "react-router-dom";
import uuid from "react-uuid";

const RenderPosts = () => {
  const navigate = useNavigate();
  const goPost = useCallback(
    (Data, title) =>
      navigate(`../post/${title}`, {
        state: {
          data: Data,
        },
      }),
    [navigate]
  );

  const excerptList = PostList.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });
  console.log(PostList);
  return (
    <MainCont>
      {PostList !== null &&
        PostList.length !== 0 &&
        PostList.map((post, index) => {
          const params = post.title.replaceAll(" ", "-");
          return (
            <PostCard key={uuid()}>
              {post.thumbnail && (
                <Thumbnail src={post.thumbnail} alt="Post Thumbnail" />
              )}
              <PostTitle onClick={() => goPost(post, params)}>
                {post.title}
              </PostTitle>
              <div>
                Pusblished on {post.date} by {post.author}
              </div>
              <Excerpt>{excerptList[index]}</Excerpt>
              <hr />
              <Links onClick={() => goPost(post, post.title)}>Read More</Links>
            </PostCard>
          );
        })}
    </MainCont>
  );
};

export default RenderPosts;
