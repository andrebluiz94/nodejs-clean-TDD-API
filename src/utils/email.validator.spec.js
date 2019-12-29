const validator = require('validator')

class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}
const makeSut = () => {
  return new EmailValidator()
}
describe('Email Validator', () => {
  test('Should turn true if validator returns true', () => {
    const email = 'valid_email@email.com'
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid(email)
    expect(isEmailValid).toBe(true)
  })

  test('Should turn false if validator returns false', () => {
    validator.isEmailValid = false
    const email = 'invalid_email@email.com'
    const sut = makeSut()
    const isEmailValid = sut.isValid(email)
    expect(isEmailValid).toBe(false)
  })

  test('Should call validator with correct email', () => {
    const email = 'any_email@email.com'
    const sut = makeSut()
    sut.isValid(email)
    expect(validator.email).toBe(email)
  })
})
