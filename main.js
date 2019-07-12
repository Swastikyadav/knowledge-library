// Buttons 
var btn1 = document.getElementById("toRead");
var btn2 = document.getElementById("reading");
var btn3 = document.getElementById("finished");

// Tabs
var box1 = document.getElementById("toReadBox");
var box2 = document.getElementById("readingBox");
var box3 = document.getElementById("finishedBox");

// Book-Div
var bookDiv = document.getElementById("book-div");
var bookDiv2 = document.getElementById("book-div2");

btn1.addEventListener("click", function showBox1() {
  box1.style.display = "block";
  box2.style.display = "none";
  box3.style.display = "none";
});
btn2.addEventListener("click", function showBox2() {
  box1.style.display = "none";
  box2.style.display = "block";
  box3.style.display = "none";
});
btn3.addEventListener("click", function showBox3() {
  box1.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "block";
});

// Adding books
var addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function addBooks(e) {
  e.preventDefault();
  var bookValue = document.getElementById("book").value;
  
  // Creat new paragraph
  var newDiv = document.createElement("div");
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "deletebtn";
  deleteBtn.id = "deletebtn";
  
  // Create read button
  var readBtn = document.createElement("button");
  readBtn.innerText = "Start Readin";
  readBtn.className = "readbtn";
  readBtn.id = "readbtn";
  
  newDiv.appendChild(readBtn);
  newDiv.appendChild(deleteBtn);
  
  // add class
  newDiv.className = "book-holder";
  newDiv.appendChild(document.createTextNode(`${bookValue}`));
  document.getElementById("book-div").appendChild(newDiv);
  
  // Add image
  var imgSrc = document.getElementById("imgInput").value;
  var newImg = document.createElement("IMG");
  newImg.setAttribute("src", imgSrc);
  // newImg.setAttribute("width", "200");
  // newImg.setAttribute("height", "200");
  newDiv.appendChild(newImg);
  
  // Clear input field
  document.getElementById("imgInput").value = "";
  document.getElementById("book").value = "";
});

// Move book to reading tab
var readBtn = document.getElementById("toReadBox");
readBtn.addEventListener("click", function move(e) {
  // var a = document.getElementById("deletebtn");
  if(e.target.classList.contains('readbtn')) {
     var book = e.target.parentElement;
     hideFromToRead(e);
  
      // append to reading tab
      document.getElementById("book-div2").appendChild(book);
      // book.innerHTML = "Mark as read";
      book.children[0].style.display = "none";
      book.children[1].innerHTML = "Mark as read";
     }
});

// Delete function
function hideFromToRead(e) {
  if(e.target.classList.contains("deletebtn")){
      var book = e.target.parentElement;
      bookDiv.removeChild(book);
  }
}

// Move book to finished tab
function moveToFinished(e) {
  if(e.target.classList.contains("deletebtn")){
      var book = e.target.parentElement;
      bookDiv2.removeChild(book);
      document.getElementById("book-div3").appendChild(book);
    
      book.children[1].style.display = "none";
  }
}

// Remove book-holder on delete
var deleteBtn = document.getElementById("toReadBox");
deleteBtn.addEventListener("click", hideFromToRead);

// Calling move to finished function.
var readBtn = document.getElementById("readingBox");
readBtn.addEventListener("click", moveToFinished);