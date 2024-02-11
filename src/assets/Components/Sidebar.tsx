import { FetchContext } from "../../App";
import { useContext } from 'react';

const Sidebar = ({tags, activeTag, setActiveTag, displayedPosts}) => {

    const fetching = useContext(FetchContext);

    return ( 
        <div className="w-[100%] sticky top-0 pt-4">
            <h3 className="font-poppins text-xl text-[#E88D67] mb-10">CATEGORIES</h3>
            {fetching && <TagButtonSkeleton/>}
            {!fetching && <TagButtons tags={tags} setActiveTag={setActiveTag} activeTag={activeTag} displayedPosts={displayedPosts}/>}
        </div>
     );
}

export default Sidebar;

const TagButtonSkeleton = () => {
    return (
        <div>
            <div role="status" className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded-lg mr-2 mb-2 dark:bg-gray-700 w-32 inline-block"></div>
                <div className="h-8 bg-gray-200 rounded-lg mr-2 mb-2 dark:bg-gray-700 w-24 inline-block"></div>
                <div className="h-8 bg-gray-200 rounded-lg mb-2 mr-2 dark:bg-gray-700 w-32 inline-block"></div>
                <div className="h-8 bg-gray-200 rounded-lg mb-2 mr-2 dark:bg-gray-700 w-40 inline-block"></div>
                <div className="h-8 bg-gray-200 rounded-lg mb-2 mr-2 dark:bg-gray-700 w-24 inline-block"></div>
                <div className="h-8 bg-gray-200 rounded-lg mb-2 mr-2 dark:bg-gray-700 w-24 inline-block"></div>
                <div className="h-8 bg-gray-200 rounded-lg mb-2 mr-2 dark:bg-gray-700 w-32 inline-block"></div>
            </div>
        </div>
    )
}

const TagButtons = ({tags, setActiveTag, activeTag, displayedPosts }) => {

    const handleTagSort = (index, id, tag) => {
        setActiveTag({ index: index, id: id, name: tag });
        let newPosts = [];

        displayedPosts.forEach((post) => {
            if (post.tags.includes(id)) newPosts = [...newPosts, post];
            else return;
        });
        console.log(newPosts);
    }

    return (
        <div>
            {tags && tags.map((tag, index) => {
                return <button
                    key={index}
                    className={`font-ubuntu font-bold ${activeTag.index === index ? "bg-[#E88D67]" : "bg-[#CDEAFC]"} hover:bg-[#E88D67] duration-200 rounded-lg px-[2%] py-[1%] mr-[2%] mb-[2%]`}
                    onClick={() => handleTagSort(index, tag.id, tag.tag)}
                >
                    {tag.tag}
                </button>
            })}
        </div>
    )
}