import Footer, {footerFunctions} from "./footer.js";

const footer = Footer();

const footerDiv = document.getElementById("end-footer");

footerDiv.innerHTML = footer;
footerFunctions();