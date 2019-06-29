const data = require("./data");

const getUserById = async (id, cb) => {
    const user = data.users.find(user => user.id === id);
    await cb(user);
};

const getPostsForUser = async (userId, cb) => {
    const posts = data.posts.filter(post => post.createdBy === userId);
    await cb(posts);
};

module.exports = { getUserById, getPostsForUser };
