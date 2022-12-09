import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from '../pages/home';
import RenderBlog from '../pages/blog'; 
import RenderPost from '../pages/post'; 

const RenderRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<RenderBlog />} />
                <Route path="/post/:title" element={<RenderPost />} />
                {/*<Route path={("/post", "/post/:param?")} element={<RenderPost />} />*/}
                <Route path="/error" render={() => <div>404</div>} />
            </Routes>
        </BrowserRouter>
        )
}

export default RenderRoutes; 