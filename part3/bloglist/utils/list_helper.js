const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.length == 0 ? null : blogs.length == 1 ? blogs[0].likes : blogs.map(element => element.likes).reduce((a, b) => a + b, 0);
const favouriteBlog = (blogs) => blogs.length === 0 ? null : blogs.length == 1 ? {title: blogs[0].title, author: blogs[0].author, likes: blogs[0].likes} : blogs.map(blog => {return {title: blog.title, author: blog.author, likes: blog.likes}}).sort((a, b) => a.likes - b.likes)[blogs.length - 1]


module.exports = {
  dummy, totalLikes, favouriteBlog
}
