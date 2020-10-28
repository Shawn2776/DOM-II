// Your code goes here

// retrieve all images
const allImages = document.querySelectorAll("img");

// flip-horizontally on mouseover
Array.from(allImages).forEach(function(image){
  image.addEventListener("mouseover", function(){
    image.classList.add("flip-horizontally")
  })
})

// un-flip horizontally on mouseout
Array.from(allImages).forEach(function(image){
  image.addEventListener("mouseout", function(){
    image.classList.remove("flip-horizontally")
  })
})


// get all nav-links
const allNavLinks = document.querySelectorAll(".nav-link");


// remove a nav-link on double-click
Array.from(allNavLinks).forEach(function(item){
  item.addEventListener("dblclick", function(){
    item.classList.add("remove-object")
  })
})

// restore all nav-links on right-click
document.addEventListener('contextmenu', function(event){
  event.preventDefault();
  Array.from(allNavLinks).forEach(function(item){
    item.classList.remove("remove-object")
  })
})

// stop all nav links from refreshing the page with preventDefault()
Array.from(allNavLinks).forEach(function(item){
  item.addEventListener('click', function(event){
    event.preventDefault();
  })
})


// retrieve all h2 tags
const allH2Tags = document.querySelectorAll("h2");

// change the text color of all h2 elements to aqua when h is pressed
document.addEventListener("keydown", function(event){
  if (event.key === "h"){
    Array.from(allH2Tags).forEach(function(item){
      item.classList.add("change_h2_background")
    })
  }
})

// change the text color of all h2 elements back to default when h is released
document.addEventListener("keyup", function(event){
  if (event.key === "h"){
    Array.from(allH2Tags).forEach(function(item){
      item.classList.remove("change_h2_background")
    })
  }
})


// retrieve first p tag
const firstPTag = document.querySelector("p");

// on wheel, change p background-color
document.addEventListener("wheel", function(){
  firstPTag.classList.add("change_color")
})

// on mouse down, change first p background color again
firstPTag.addEventListener("mousedown", function(){
  firstPTag.classList.add("change_color2")
})

// on mouseup, reset first p background color
firstPTag.addEventListener("mouseup", function(){
  firstPTag.classList.remove("change_color2")
  firstPTag.classList.remove("change_color")
})


const logoHeader = document.querySelector(".logo-heading");
console.log(logoHeader)

document.addEventListener("scroll", function(){
  logoHeader.classList.add("big_font")
})