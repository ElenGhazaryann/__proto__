const Pagination = {
  init(arr, pageSize) {
    let myArr = [];
    let str = arr[0];
    let tiv = 0;

    for (let i = 1; i < arr.length; i++) {
      if (tiv < pageSize - 1) {
        str += arr[i];
        tiv++;
      } else {
        myArr.push(str);
        str = "";
        str += arr[i];
        tiv = 0;
      }
    }
    myArr.push(str);
    return myArr;
  },

  getPageItems(myArr, page) {
    return myArr[page - 1].split("");
  },
};
let arr = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(Pagination.getPageItems(Pagination.init(arr, 4), 2));
