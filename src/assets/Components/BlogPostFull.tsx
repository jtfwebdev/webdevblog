import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResourcesSidebar from './ResourcesSidebar';

const BlogPostFull = ({posts, setTitle, tags, setActiveBlogTags, activeBlogTags}) => {

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
            <div className="w-[60%] pl-[3%] mr-[10%] pt-[5%]">
                {blogDate && <div className='pt-4 w-fit'>
                    <p className="font-poppins text-xl text-[#E88D67]">{blogDate}</p>
                    <div className="w-inherit h-[3px] rounded bg-[#E88D67] mt-[4%]"></div>
                </div>}
                {blogContent && <div className="pt-12 pr-0 text-lg">
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