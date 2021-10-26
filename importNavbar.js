import Navbar from "./navbar.js";

const navbar = Navbar({title:"user page"})
const maindiv = document.getElementById("navbar-Div");
maindiv.innerHTML = navbar;