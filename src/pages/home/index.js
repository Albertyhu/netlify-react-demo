import React, { useCallback } from "react";
import { MainCont, Shell } from "./myStyle.js";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button.js";

const Home = () => {
  const navigate = useNavigate();
  const goBlog = useCallback(() => navigate("/blog", {}), [navigate]);
  return (
    <MainCont>
      <Shell>
        <p>This is the home page</p>
        <Button onClick={goBlog}>Blog</Button>
      </Shell>
    </MainCont>
  );
};

export default Home;
