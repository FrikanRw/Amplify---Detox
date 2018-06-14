export const checkIndex = (currentIndex, length) => {
    if (length === 1) { // if single
      return -99;
    }
    return currentIndex === (length - 1)
      ? -1
      : currentIndex;
  };
  /**
   * Validation function to validate emails, returns bool
   * @param {string} email
   */
  export const validateEmail = (email) => {
    let valid = true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(String(email).toLowerCase());
    if (!re.test(String(email).toLowerCase())) {
      valid = false;
      return valid;
    }
    return valid;
  };
  /**
   * Validation function to validate passwords, returns bool
   * @param {string} password
   */
  export const validatePassword = (password) => {
    let valid = true;
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    re.test(password);
    if (!re.test(password)) {
      valid = false;
      return valid;
    }
    return valid;
  };
  /**
   * returns colors on validation
   * @param {string} state
   */
  export const colorByValidation = (state) => {
    let color;
    switch (state) {
      case ('BAD'):
        color = 'red';
        break;
      case ('GOOD'):
        color = 'green';
        break;
      default:
        color = 'blue';
    }
    return color;
  };
