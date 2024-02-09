import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const BlogPosts = ({ displayedPosts, postsRef }) => {
    return ( 
        <div ref={postsRef} className="">
            <AnimatePresence>
                {displayedPosts.map((post) => {
                    return <BlogPost key={post.title.rendered} title={post.title.rendered} content={post.content.rendered} slug={post.slug} />
                })}
            </AnimatePresence>
        </div>
     );
}

export default BlogPosts;

const BlogPost = ({title, content, slug}) => {

    const paragraphs = content.split('</p>');
    const paragraph = paragraphs[0].replace('<p>', '');

    const blogHoverVariants = {
        hover: {
            color: "#A1C181"
        } 
    }

    const readMoreArrowVariants = {
        hover: {
            opacity: 1,
            x: 0
        }
    }

    return (
        <motion.div layout whileHover="hover"
        className="mb-[4%] px-[3%]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
            opacity: {
                duration: .3
            },
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01]
        }}
        exit={{ opacity: 0 }}>
            <Link to={`/blogposts/${slug}`}>
                <motion.h3 variants={blogHoverVariants} className="font-poppins text-2xl font-bold mb-[3%]">{title}</motion.h3>
                <p className="font-ubuntu mb-[2%]" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                <div>
                    <motion.p variants={blogHoverVariants} className="font-ubuntu font-bold inline">Read more...</motion.p>
                    <motion.span variants={readMoreArrowVariants} initial={{opacity: 0, x: -20}} className='inline-block ml-2'><FontAwesomeIcon icon={faAnglesRight} color="#A1C181" /></motion.span>
                </div>
                <div className="w-[80%] h-1 bg-[#E88D67] mt-[4%]"></div>
            </Link>
        </motion.div>
    )
}