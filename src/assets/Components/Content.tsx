import BlogPosts from "./BlogPosts";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

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
        <section className="flex relative bg-white min-h-[100vh] z-20
            max-[800px]:flex-col
            ">
            <div className="w-[60%] p-[8%] pt-[5%] pr-0
                max-[1040px]:w-[70%] max-[1040px]:pl-[4%]
                max-[800px]:w-[100%] max-[800px]:p-[4%]
                max-[600px]:p-[1%]
                ">
                <h3 className="font-poppins text-xl text-[#E88D67] mb-10 pt-4
                    max-[600px]:pl-[3%]
                    ">{activeTag.name ? activeTag.name : "RECENT POSTS"}</h3>
                {displayedPosts && <BlogPosts displayedPosts={displayedPosts} postsRef={postsRef} />}
            </div>
            <div className="w-[40%] p-[8%] pt-[5%] pl-[8%] relative
                max-[1040px]:w-[30%] max-[1040px]:px-[4%] max-[1040px]:pr-[2%]
                max-[800px]:w-[100%] max-[800px]:pl-[4%] max-[800px]:pt-0
                ">
                <Sidebar tags={tags} activeTag={activeTag} setActiveTag={setActiveTag} displayedPosts={displayedPosts} />
            </div>
        </section>
     );
}

export default Content;