const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.length == 1 ? blogs[0].likes : blogs.map(element => element.likes).reduce((a, b) => a + b, 0)


module.exports = {
  dummy, totalLikes
}
