export const getUsernameLetters = (fullname: string) => {
  const initials = fullname.match(/\b(\w)|[^\w\s]/g)

  return initials?.join('')
}
