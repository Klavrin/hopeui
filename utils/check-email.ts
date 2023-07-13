// This is only for showcase purposes, in real-life projects we would usually use packages that handle email verification for us, like nodemailer.
export const checkEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+[.][a-zA-Z]+$/

  if (emailRegex.test(email)) return email

  return null
}
