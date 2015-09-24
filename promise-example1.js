"use strict";
//Import XMLHttpRequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var promise = new Promise(
  function(resolve, reject) {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'http://api.icndb.com/jokes/random');
    myRequest.onload = function(){
      if (myRequest.status == 200){
        resolve(myRequest.responseText);
      } else {
        console.log(myRequest.responseText);
        reject(myRequest.status);
      }
    };
    myRequest.onerror = function(){
      reject("Error fetching.");
    }
    myRequest.send();

  });

promise.then(
  function(data) {
    console.log(JSON.parse(data).value.joke);
  },
  function(err){
    console.log(err);
  }
);