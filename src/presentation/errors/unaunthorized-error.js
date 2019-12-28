module.exports = class UnaunthorizedError extends Error {
  constructor () {
    super('Auaunthrized')
    this.name = 'UnaunthorizedErro'
  }
}
