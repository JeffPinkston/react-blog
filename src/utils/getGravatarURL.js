import md5 from 'blueimp-md5'

export function getGravatarURL({ email, size, defaultURL = 'identicon' }) {
  let hash = md5(email.toLowerCase().trim())
  return `https://s.gravatar.com/avatar/4b96eb8fa83454ededb9326972db72e2?s=80`
}
