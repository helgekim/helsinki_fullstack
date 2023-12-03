const list_helper = require('./utils/list_helper.js')

describe("Jest configuration check", () => {
	test("dummy returns one", () => {
	 expect(list_helper.dummy([])).toBe(1);
	});
})

describe("Functions check", () => {
	test("totalLikes returns a total of likes in all of blogs", () => {
	const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]
	expect(list_helper.totalLikes(blogs)).toBe(36)
	})
	test("when there is only one element in the said blogs list, returns that blog's likes", () => {
	 const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ];
	const result = list_helper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)

	})
})



const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

describe("FavouriteBlog: can...", () => {

	test("return the most popular blog", () => {
	expect(list_helper.favouriteBlog(blogs)).toEqual(
	{
  title: "Canonical string reduction",
  author: "Edsger W. Dijkstra",
  likes: 12
}	
	)
	});

	test("return the only blog", () => {
	expect(list_helper.favouriteBlog([{title: "Kem er jeg?", author: "HJK", likes: 10}])).toEqual({title: "Kem er jeg?", author: "HJK", likes: 10})
	})

	test("return none", () => {
	expect(list_helper.favouriteBlog([])).toEqual(null)
	})


})

describe("MostBlogs can...", () => {
	test("return the most prolific author", () => {expect(list_helper.mostBlogs(blogs)).toEqual({author: "Robert C. Martin",blogs: 3})});
	test("return the only blog", () => {

const onlyBlog = [
{
title: "kem er jeg",
author: "hjk",
likes: 1232
}
]

const result = {
author: "hjk",
blogs: 1
}

expect(list_helper.mostBlogs(onlyBlog)).toEqual(result) })

	test("return null", () => {

expect(list_helper.mostBlogs()).toEqual(null)
})
})


describe("MostLikes can...", () => {

test("return the most liked author", () => {

const expected = {
  author: "Edsger W. Dijkstra",
  likes: 17
}

expect(list_helper.mostLikes(blogs)).toEqual(expected)



})

test("return the only author", () => {



expect(list_helper.mostLikes([{author: "hjk", title: "my fight",likes: 124}])).toEqual({author: "hjk", likes: 124})


})

test("return null", () => {

expect(list_helper.mostLikes()).toEqual(null);

})



})
