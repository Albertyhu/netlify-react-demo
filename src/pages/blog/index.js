import React from "react";
import {MainCont } from "./myStyle.js";
import PostList from '../../components/PostList'; 

const RenderBlog = () => {
    return (
        <MainCont>
            <h2>Blog Page</h2>
            <PostList /> 
        </MainCont>
    );
};

export default RenderBlog;
