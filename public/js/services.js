var myApp = angular.module('myApp');

myApp.service('BookService', BookService);

function BookService () {
  var books = ['Ready Player One', 'Origins', 'Harry Potter', 'Hunger Games']; 
  this.getBooks = function (){
    return books;
  };

  this.getBook = function () {
    if (index < 0 || index > books.length) {
      return null;
    }
    return books[index];
  };
}

