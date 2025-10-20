import React from 'react'
import './Header.css'
import Netflix from '../../assets/images/Neflix.png'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const Header = () => {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md"> 
          <button
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button> 
              <a className="navbar-brand mx-auto">
                <img src={Netflix} alt="Neflix" width="100" />
              </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
             
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">TVShow</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">Movie</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">Latest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">MyList</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">Browse by Language</a>
              </li>
             
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">
                  <SearchIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">
                  <NotificationsIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">
                  <AccountBoxIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">
                  <ArrowDropDownIcon />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header
