const validator = require('validator')

class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
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
    const email = 'valid_email@email.com'
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid(email)
    expect(isEmailValid).toBe(false)
  })
})
