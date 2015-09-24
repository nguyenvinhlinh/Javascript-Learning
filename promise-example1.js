"use strict";
//Import XMLHttpRequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var promise = new Promise(
  function(resolve, reject) {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'http://api.icndb.com/jokes/random');
    myRequest.onreadystatechange = function (){
      if (myRequest.readyState == 4 && myRequest.status == 200) {
        resolve(myRequest.responseText);
      }
    }
    myRequest.send();
  });
promise.then(
  function(data) {
    console.log("Success: " + JSON.parse(data).value.joke);
  },
  function(err){
    console.log(err);
  }
);