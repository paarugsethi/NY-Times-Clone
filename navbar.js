function Navbar(){
    return `
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;</a
        >
        <button class="dropdown-btn" onmouseover="outDropdown()">
          Home Page
        </button>
        <button class="dropdown-btn" onmouseover="outDropdown()">
          World
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Africa</a>
          <a href="#">Australia</a>
          <a href="#">America</a>
          <a href="#">Asia Pacific</a>
          <a href="#">Canada</a>
        </div>
        <button class="dropdown-btn" onmouseover="outDropdown()">
          Business
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Dell book</a>
          <a href="#">Economy</a>
          <a href="#">Energy</a>
          <a href="#">Market</a>
        </div>
        <button class="dropdown-btn" onmouseover="outDropdown()">
          U.S. Politics
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">President Biden</a>
          <a href="#">Supreme Court</a>
          <a href="#">Congress</a>
        </div>
        <button class="dropdown-btn" onmouseover="outDropdown()">
          U.S. News
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Education</a>
          <a href="#">California</a>
          <a href="#">race/ related</a>
          <a href="#">Wildfire Tracker</a>
        </div>
        <button class="dropdown-btn" onmouseover="outDropdown()">
          Sports
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Olympic</a>
          <a href="#">MLB</a>
          <a href="#">NBA</a>
          <a href="#">NFL</a>
          <a href="#">NHL</a>
          <a href="#">NCAA Baskeetball</a>
          <a href="#">NCAA football</a>
          <a href="#">Golf</a>
        </div>
        <button class="dropdown-btn" onmouseover="outDropdown()">
          Health
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Money & Policy</a>
          <a href="#">Health Guide</a>
          
        </div>
        <button class="dropdown-btn" onmouseover="outDropdown()">
          N.Y.
          
        </button>

       
        <button class="dropdown-btn" onmouseover="outDropdown()">
          Opinion
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Columnists</a>
          <a href="#">Editorials</a>
          <a href="#">Guist Essaay</a>
          <a href="#">Letters</a>
          <a href="#">Sunday Review</a>
        </div>
        <button class="dropdown-btn" onmouseover="outDropdown()">
          Tech
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Personal Tch</a>
          <a href="#">Cyber Security</a>
          <a href="#">Social Media</a>
        </div>
        <button class="dropdown-btn" onmouseover="outDropdown()">
          Science
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="topnav">
        <span
          style="font-size: 30px; cursor: pointer; margin-left: 10px"
          onclick="openNav()"
          >&#9776;
        </span>

        <button id="search" onclick="SearchHandle()">
          <i class="fas fa-search"></i>
        </button>
        <div id="input"></div>
        <h4 id="news-pert">BUSINESS</h4>
        <img onclick="locatonRe()"
          src="https://myaccount.nytimes.com/lire_ui/img/nyt-logo.svg"
          alt="News-logo"
          class="logo"
        />
        <button id="subsciption">Sbscription Weak</button>
        <button id="log-in" onclick="LoGIn()">Log In</button>
        <button id="prof"><i class="fas fa-user-edit"></i></button>
      </div>
    </div>
      
     
    `
}

export default Navbar

// thuis is nav bar