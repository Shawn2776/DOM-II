// Your code goes here

// retrieve all images
const allImages = document.querySelectorAll("img");

// flip-horizontally on mouseover
Array.from(allImages).forEach(function(image){
  image.addEventListener("mouseover", function(event){
    image.classList.add("flip-horizontally")
  })
})

// un-flip horizontally on mouseout
Array.from(allImages).forEach(function(image){
  image.addEventListener("mouseout", function(event){
    image.classList.remove("flip-horizontally")
  })
})


// get all nav-links
const allNavLinks = document.querySelectorAll(".nav-link");

// remove a nav-link on double-click
Array.from(allNavLinks).forEach(function(item){
  item.addEventListener("dblclick", function(event){
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

