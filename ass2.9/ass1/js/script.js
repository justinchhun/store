function activateNav(element) {
  // Get all items with class="item"
  var items = document.getElementsByClassName("item");

  // Remove the "active" class from all items
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }

  // Add the "active" class to the clicked item
  element.classList.add("active");

  // Hide all sections
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
}

function ShowAndHide(id) {
  var section = document.getElementById(id);
  if (section.style.display == "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}










const searchBtn = document.getElementById("sbutton");
const searchInput = document.getElementById("query");

searchBtn.addEventListener("click", function() {
  const query = searchInput.value.toLowerCase();
  const items = document.querySelectorAll(".card > div > h1");
  
  items.forEach(function(item) {
    const name = item.textContent.toLowerCase();
    
    if (name.includes(query)) {
      item.parentNode.style.display = "block";
    } else {
      item.parentNode.style.display = "none";
    }
  });
});


