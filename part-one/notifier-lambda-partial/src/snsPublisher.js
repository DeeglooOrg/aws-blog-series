/**
 * @param {Object} message 
 */
exports.publishMessage = (message) => {
  return new Promise((resolve, reject) => {
    console.log('Sending message ' + JSON.stringify(message) + '...')

    resolve('success!')
  })
}
