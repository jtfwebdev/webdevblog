import axios from 'axios';

const FetchPosts = (setPosts, setTags, setDisplayedPosts, setFetching) => {

    let tags = [];

    function getTagID(item) {
        let tagID = {id: item.id, tag: item.name};

        if (tags.includes(tagID)) return;
        else tags = [...tags, tagID];
    }

    axios.get(import.meta.env.VITE_WP_POSTS_URL)
    .then((res) => {
        setPosts(res.data);
        setDisplayedPosts(res.data);
    })
    .catch((err) => console.log(err))

    axios.get(import.meta.env.VITE_WP_TAGS_URL)
    .then((res) => {
        res.data.forEach(getTagID);
        setTags(tags);
        setFetching(false);
    })
    .catch((err) => console.log(err))
}

export default FetchPosts;