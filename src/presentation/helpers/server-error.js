module.exports = class UnaunthorizedError extends Error {
  constructor () {
    super('Internal error')
    this.name = 'Server error'
  }
}
