hexo.extend.helper.register('sortCategorires', function(categories) {
  /*
  array:
  _Document {
    name: 'javascript',
    _id: 'clh7fvnbi0016rhy2ck8fhtc0',
    slug: [Getter],
    path: [Getter],
    permalink: [Getter],
    posts: [Getter],
    length: [Getter]
  }
  */
  let categoryNameArr = [], postsLengthArr = []
  let postsLengthCollection = {}
  categories.forEach(category => {
    categoryNameArr.push(category.name)
    postsLengthArr.push(category.length)
    postsLengthCollection[category.name] = category.length
  })
  return [categoryNameArr, postsLengthArr, postsLengthCollection]
})
