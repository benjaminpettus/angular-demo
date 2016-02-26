var myApp = angular.module('myApp');

myApp.service('BookService', BookService);

function BookService () {
  var books = [
  { title: 'Ready Player One', author: 'some guy'}, 
  { title: 'Origins', author: 'some guy'}, 
  { title: 'Harry Potter',  author: 'some guy'},
  { title: 'Hunger Games', author: 'some guy'}
  ]; 
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

