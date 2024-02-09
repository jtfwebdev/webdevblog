import axios from 'axios';

const FetchPosts = (setPosts, setTags, setDisplayedPosts) => {

    let tags = [];

    function getTagID(item) {
        let tagID = {id: item.id, tag: item.name};

        if (tags.includes(tagID)) return;
        else tags = [...tags, tagID];
    }

    axios.get('https://blog-headless.jtfwebdev.co.uk/index.php/wp-json/wp/v2/posts?post_type=post')
    .then((res) => {
        setPosts(res.data);
        setDisplayedPosts(res.data);
    })
    .catch((err) => console.log(err))

    axios.get("https://blog-headless.jtfwebdev.co.uk/index.php/wp-json/wp/v2/tags")
    .then((res) => {
        res.data.forEach(getTagID);
        setTags(tags);
    })
    .catch((err) => console.log(err))
}

export default FetchPosts;