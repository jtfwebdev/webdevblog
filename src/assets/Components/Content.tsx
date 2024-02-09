import BlogPosts from "./BlogPosts";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Content = ({ posts, displayedPosts, setDisplayedPosts, tags, postsRef, setTitle, setActiveBlogTags}) => {

    const [activeTag, setActiveTag] = useState({index: null, id: null, name: null});

    useEffect(() => {
        if (activeTag.id) {
            let filteredPosts = posts.filter((post) => post.tags.includes(activeTag.id));
            setDisplayedPosts(filteredPosts);
        }
    }, [activeTag]);

    useEffect(() => {
        setTitle(null);
        setActiveBlogTags(null);
        setDisplayedPosts(posts);
    }, [])

    return ( 
        <section className="flex relative bg-white min-h-[100vh] z-20">
            <div className="w-[60%] p-[8%] pt-[5%] pr-0">
                <h3 className="font-poppins text-xl text-[#E88D67] mb-10 pt-4">{activeTag.name ? activeTag.name : "RECENT POSTS"}</h3>
                {displayedPosts && <BlogPosts displayedPosts={displayedPosts} postsRef={postsRef} />}
            </div>
            <div className="w-[40%] p-[8%] pt-[5%] pl-[3%] relative">
                <Sidebar tags={tags} activeTag={activeTag} setActiveTag={setActiveTag} displayedPosts={displayedPosts} />
            </div>
        </section>
     );
}

export default Content;