function Navbar(){
    return `
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;</a
        >
        <button class="dropdown-btn">Home Page</button>
        <button class="dropdown-btn">
          World
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Africa</a>
          <a href="#">Australia</a>
          <a href="#">America</a>
        </div>
        <button class="dropdown-btn">
          Business
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button class="dropdown-btn">
          U.S. Politics
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button class="dropdown-btn">
          U.S. News
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button class="dropdown-btn">
          Sports
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button class="dropdown-btn">
          Health
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button class="dropdown-btn">
          N.Y.
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button class="dropdown-btn">
          Opinion
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button class="dropdown-btn">
          Tech
          <i class="fa fa-caret-down"></i>
        </button>

        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button class="dropdown-btn">
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

        <button id="search">
          <i class="fas fa-search"></i>
        </button>
        <div id="input"></div>
        <h4 id="news-pert">WORLD NEWS</h4>
        <img
          src="https://myaccount.nytimes.com/lire_ui/img/nyt-logo.svg"
          alt="News-logo"
          class="logo"
        />
        <button id="subsciption">Sbscription Weak</button>
        <button id="log-in">Log In</button>
      </div>
    `
}

export default Navbar