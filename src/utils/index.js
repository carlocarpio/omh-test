export const formatKeyword = (url) => {
  return url.split(' ').join('+')
}

export const getHref = (url) => {
  return `${url}`.match(/href="(.*?)"/)[1]
}

export default {
  formatKeyword,
  getHref,
}