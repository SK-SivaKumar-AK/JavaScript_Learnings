import posts from "./anotherscript.js";

posts.forEach((post) => {
    console.log(post);
});
console.clear();

const filterPosts = posts.filter((post) => {
    return post.userId === 5;
});
console.log(filterPosts);

const mapPosts = filterPosts.map((post) => {
    return post.id;
});
console.log(mapPosts);