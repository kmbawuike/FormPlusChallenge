export const paginatedData = (currentPage, pageLimit, data) => {
  const offset = (currentPage - 1) * pageLimit
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

export function dynamicSort(property,order) {
  let sort_order = 1;
  if(order === "desc"){
      sort_order = -1;
  }
  return function (a, b){
      // a should come before b in the sorted order
      if(a[property].toLowerCase() < b[property].toLowerCase()){
              return -1 * sort_order;
      // a should come after b in the sorted order
      }else if(a[property].toLowerCase() > b[property].toLowerCase()){
              return 1 * sort_order;
      // a and b are the same
      }else{
              return 0 * sort_order;
      }
  }
}