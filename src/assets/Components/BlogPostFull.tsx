import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ResourcesSidebar from './ResourcesSidebar';
import { FetchContext } from '../../App';

const BlogPostFull = ({posts, setTitle, tags, setActiveBlogTags, activeBlogTags}) => {

    const fetching = useContext(FetchContext);

    const [blogPost, setBlogPost] = useState(null);
    const [blogContent, setBlogContent] = useState(null);
    const [blogDate, setBlogDate] = useState(null);
    let blogTags = [];

    const slug = useParams();

    useEffect(() => {
        if (posts) {
            setBlogPost(posts.filter((post) => post.slug == slug.blogId));
        }
    }, [posts])

    useEffect(() => {
        if (blogPost) {
            setTitle(blogPost[0].title.rendered);

            let content = blogPost[0].content.rendered.split("</p>");
            let trunc = content.map((item) => item.replace('<p>', ''));
            setBlogContent(trunc);

            let date = blogPost[0].date;
            setBlogDate(new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }))
        }
        if ( blogPost && tags ) {
            blogPost[0].tags.forEach((postTag) => {
                let filtTag = tags.find((tag) => tag.id == postTag);
                blogTags = [...blogTags, filtTag];
            });
            setActiveBlogTags(blogTags);
        }
    }, [blogPost])

    return ( 
        <section className="flex relative z-20 ml-[5%] bg-white w-[95%]">
            <div className="w-[60%] pl-[3%] mr-[3%] pt-[5%]">
                {fetching && <div className='pt-4 w-fit'>
                    <p className="font-poppins text-xl text-[#E88D67]">Posted on...</p>
                    <div className="w-inherit h-[3px] rounded bg-[#E88D67] mt-[4%]"></div>
                </div> }
                {!fetching && blogDate && <div className='pt-4 w-fit'>
                    <p className="font-poppins text-xl text-[#E88D67]">{blogDate}</p>
                    <div className="w-inherit h-[3px] rounded bg-[#E88D67] mt-[4%]"></div>
                </div>}
                {fetching && <BlogContentSkeleton />}
                {!fetching && blogContent && <div className="pt-12 pr-0 text-lg">
                    {blogContent.map((paragraph, index) => {
                        return <p className="font-ubuntu mb-[4%] ml-[4%]" key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                    })}
                </div>}
            </div>
            <div className='relative flex-1 pt-[5%] pl-[3%]'>
                <ResourcesSidebar activeBlogTags={activeBlogTags} />
            </div>
        </section>
        
     );
}
 
export default BlogPostFull;

const BlogContentSkeleton = () => {
    return (
        <div role="status" className="space-y-2.5 animate-pulse pt-12 pr-8 mb-16">
            <div className="flex ml-[4%] items-center w-full">
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex ml-[4%] items-center w-full">
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex ml-[4%] items-center w-full">
                <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex ml-[4%] items-center w-full">
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex ml-[4%] items-center w-full">
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
        </div>
    )
}