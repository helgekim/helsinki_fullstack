const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.length == 0 ? null : blogs.length == 1 ? blogs[0].likes : blogs.map(element => element.likes).reduce((a, b) => a + b, 0);
const favouriteBlog = (blogs) => blogs.length === 0 ? null : blogs.length == 1 ? {title: blogs[0].title, author: blogs[0].author, likes: blogs[0].likes} : blogs.map(blog => {return {title: blog.title, author: blog.author, likes: blog.likes}}).sort((a, b) => a.likes - b.likes)[blogs.length - 1]
const mostBlogs = blogs =>  {

if (blogs) {
	if (blogs.length == 1) {
	
	 return {author: blogs[0].author, blogs: 1}

	}

	else {
	 const authors = {};

	 blogs.forEach((blog) => {
	  console.log(blog)
	  if (blog.hasOwnProperty("author")) {
	    if (authors[blog.author]) {
		authors[blog.author] += 1
	   }
	    else {
		authors[blog.author] = 1
	  }
	  }
	});

	const authorsArray =  Object.entries(authors).sort((a, b) => a[1] - b[1]);
	return {
	author: authorsArray[authorsArray.length - 1][0],
	blogs: authorsArray[authorsArray.length - 1][1]
	}
	}
}

return null
}

module.exports = {
  dummy, totalLikes, favouriteBlog, mostBlogs
}
