function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("mouseover", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

const search = document.getElementById("search");
const input = document.createElement("input");
const go = document.createElement("button");
input.type = "text";
input.className = "NewsSearch";

function SearchHandle() {
  const heading = document.getElementById("news-pert");
  heading.className = "mystyle";
  const div = document.getElementById("input");
  div.innerHTML = "";
  input.placeholder = "SEARCH";
  go.id = "go";
  go.textContent = "GO";

  div.append(input, go);
}

function outDropdown(){
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("mouseover", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}

function locatonRe() {
  location.replace("home.html");
}
function LoGIn(){
  location.replace("login.html");
  document.getElementById("log-in").style.display="none";
}