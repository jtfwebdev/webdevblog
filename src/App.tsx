import './App.css';
import { useEffect, useRef, useState, createContext } from 'react';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import FetchPosts from './assets/Components/FetchPosts';
import Hero from './assets/Components/Hero';
import Header from './assets/Components/Header';
import Content from './assets/Components/Content';
import BlogPostFull from './assets/Components/BlogPostFull';

export const FetchContext = createContext(true);

function App() {

  const [fetching, setFetching] = useState(true);
  const [posts, setPosts] = useState(null);
  const [displayedPosts, setDisplayedPosts] = useState(null);
  const [tags, setTags] = useState(null);
  const [title, setTitle] = useState(null);
  const [activeBlogTags, setActiveBlogTags] = useState(null);

  const postsRef = useRef();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root title={title} fetching={fetching} activeBlogTags={activeBlogTags} />}>
        <Route index element={<Content posts={posts} displayedPosts={displayedPosts} setDisplayedPosts={setDisplayedPosts} setActiveBlogTags={setActiveBlogTags} tags={tags} postsRef={postsRef} setTitle={setTitle} />}></Route>
        <Route path="/blogposts/:blogId" element={<BlogPostFull posts={posts} setTitle={setTitle} setActiveBlogTags={setActiveBlogTags} activeBlogTags={activeBlogTags} tags={tags} />}></Route>
      </Route>
    )
  )

  useEffect(() => { //don't forget to change settings in 'enable CORS' plugin so that only client website can access
    FetchPosts(setPosts, setTags, setDisplayedPosts, setFetching);
  }, []);

  return (
      <RouterProvider router={router} />
  )
}

export default App;

const Root = ({title, activeBlogTags, fetching}) => {
  return (
    <>
    <FetchContext.Provider value={fetching}>
        <Header />
        <Hero title={title} activeBlogTags={activeBlogTags} />
        <Outlet />
    </FetchContext.Provider>
    </>
  )
}