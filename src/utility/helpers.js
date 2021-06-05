export const paginatedData = (currentPage, pageLimit, data) => {
  const offset = (currentPage - 1) * pageLimit
  console.log(data.slice(offset, offset + pageLimit), data)
  return data.slice(offset, offset + pageLimit)
}

export function capitalize(text) {
  // return str.charAt(0).toUpperCase() + str.slice(1);
  const wordsArray = text.toLowerCase().split(" ")
  const capsArray = wordsArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(" ")
}

export function descendingOrder(a, b) {
  if (a > b) {
    return -1
  }
  if (b > a) {
    return 1
  }
  return 0
}
