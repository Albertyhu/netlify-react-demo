import React from "react";
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
    Content
} from "./postStyle.js";
import { useLocation } from 'react-router-dom'; 
import PostList from '../../posts.json'; 
const RenderPost = props => {
    const location = useLocation(); 
    const { data } = location.state; 

  return (
      <MainCont>
          <PostTitle>{data.title}</PostTitle>
          {Thumbnail && <ImageContainer><Thumbnail src={data.thumbnail} /></ImageContainer>}
          <div>Written by {data.author}</div>
          <div>Posted on {data.date}</div>
          <Content>{data.content}</Content>
      </MainCont>
  );
};

export default RenderPost;
