# Externals

This is where you would create wrappers to external resources like databases and other services. The dependency injection system will create a container with all the the js files defined inside the `src/external/*`, but not deeper. This means you can define larger modules nested inside the external directory, and surface those interfaces with JavaScript files at the `src/external/*` directory level. And example of those interface files might look something like this:

```JavaScript

const { Comments } = require('./sql/models/')
module.exports = () => ({
  getById: (id) => {
    return Comments.findOne({
      where: { id }
    })
  },
  deleteById: (id) => {
    return Comments.destroy({ where: { id } })
  },
  create: (comment) => {
    return Comments.create(comment)
  },
  update: ({ id, ...comment }) => {
    return Comments.update(comment, { where: { id }, returning: true })
      .then(updated => updated[1][0])
  }

})

```
