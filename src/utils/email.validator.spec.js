class EmailValidator {
  isValid (email) {
    return true
  }
}

describe('Email Validator', () => {
  test('Should turn true if validator returns true', () => {
    const email = 'valid_email@email.com'
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid(email)
    expect(isEmailValid).toBe(true)
  })
})
