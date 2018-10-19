const { createMessages } = require('src/messageCreator')
const { publishMessage } = require('src/snsPublisher')

exports.handler = function(event, context, callback) {
  console.info("Notifier lambda invoked!")

  const messages = createMessages()

  return Promise.all(messages.map(m => publishMessage(m)))
    .then(result => callback(null, result))
    .catch((error) => {
      console.info('Lambda did not finish successfully!')
      console.error(error)
      callback(error, null)
    })
}