# _Pagination_

Write Pagination object that will get an array and pageSize, then will return the following.

- prevPage
- nextPage
- firstPage
- lastPage
- goToPage
- getPageItems

```JS
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3); // current page must be set to 3
```

[Solution](https://github.com/ElenGhazaryann/__proto__/blob/main/pagination.js)
