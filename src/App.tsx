import './App.css';
import { useEffect, useRef, useState, createContext } from 'react';
import { Outlet, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import FetchPosts from './assets/Components/FetchPosts';
import Hero from './assets/Components/Hero';
import Header from './assets/Components/Header';
import Content from './assets/Components/Content';
import BlogPostFull from './assets/Components/BlogPostFull';
import MobileHeader from './assets/Components/MobileHeader';
import MobileMenuScreen from './assets/Components/MobileMenuScreen';
import { AnimatePresence } from 'framer-motion';

export const FetchContext = createContext(true);
export const ScreenWidthContext = createContext(window.innerWidth);

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [fetching, setFetching] = useState(true);
  const [posts, setPosts] = useState(null);
  const [displayedPosts, setDisplayedPosts] = useState(null);
  const [tags, setTags] = useState(null);
  const [title, setTitle] = useState(null);
  const [activeBlogTags, setActiveBlogTags] = useState(null);
  const [hamOpen, setHamOpen] = useState(false);

  useEffect(() => {
    if (hamOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [hamOpen])

  const postsRef = useRef();

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root title={title} fetching={fetching} screenWidth={screenWidth} activeBlogTags={activeBlogTags} hamOpen={hamOpen} setHamOpen={setHamOpen} />}>
  //       <Route index element={<Content posts={posts} displayedPosts={displayedPosts} setDisplayedPosts={setDisplayedPosts} setActiveBlogTags={setActiveBlogTags} tags={tags} postsRef={postsRef} setTitle={setTitle} />}></Route>
  //       <Route path="/blogposts/:blogId" element={<BlogPostFull posts={posts} setTitle={setTitle} setActiveBlogTags={setActiveBlogTags} activeBlogTags={activeBlogTags} tags={tags} />}></Route>
  //     </Route>
  //   )
  // )

  useEffect(() => { //don't forget to change settings in 'enable CORS' plugin so that only client website can access
    FetchPosts(setPosts, setTags, setDisplayedPosts, setFetching);
  }, []);

  useEffect(() => {
    const watchWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth);

    return () => window.removeEventListener("resize", watchWidth);
  }, [])

  return (
    <>
      <FetchContext.Provider value={fetching}>
      <ScreenWidthContext.Provider value={screenWidth}>
          <AnimatePresence>
            {hamOpen && <MobileMenuScreen />}
          </AnimatePresence>
          {screenWidth > 1040 ? <Header /> : <MobileHeader hamOpen={hamOpen} setHamOpen={setHamOpen} />}
          <Hero title={title} activeBlogTags={activeBlogTags} />
          <Routes>
            <Route index element={<Content posts={posts} displayedPosts={displayedPosts} setDisplayedPosts={setDisplayedPosts} setActiveBlogTags={setActiveBlogTags} tags={tags} postsRef={postsRef} setTitle={setTitle} />}></Route>
            <Route path="/blogposts/:blogId" element={<BlogPostFull posts={posts} setTitle={setTitle} setActiveBlogTags={setActiveBlogTags} activeBlogTags={activeBlogTags} tags={tags} />}></Route>
            <Route path="*" element={<RoutingError />}></Route>
          </Routes>
      </ScreenWidthContext.Provider>
      </FetchContext.Provider>
    </>
  )
}

export default App;

const RoutingError = () => {

  const handleClick = () => {

  }

  return(
    <div className="font-poppins flex flex-col gap-2 w-[80%] mx-auto mt-16 items-start">
      <h2 className="text-5xl">Oops!</h2>
      <p>That page could not be found.</p>
      <Link to={'/'} onClick={handleClick} className="text-[#E88D67]">Return to Homepage</Link>
    </div>
  )
}