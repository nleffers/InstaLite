export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const checkValidity = (value, rules) => {
  let isValid = true;
  const trimmedValue = value.trim();

  if (rules.required) {
    isValid = trimmedValue !== '' && isValid;
  }
  if (rules.minLength) {
    isValid = trimmedValue.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = trimmedValue.length <= rules.maxLength && isValid;
  }
  if (rules.isEmail) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isPhone) {
    const pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/
    isValid = pattern.test(value) && isValid;
  }
  if (rules.characterLimit && rules.characterLimit > 0) {
    isValid = trimmedValue.length <= rules.characterLimit && isValid
  }

  return isValid;
}
