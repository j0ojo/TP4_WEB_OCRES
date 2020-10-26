import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,withRouter,Switch,Route,Link} from "react-router-dom";


function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Multi-Page Website
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Charlotte
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/jacques" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/jacques">
                  Jacques
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/jean" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/jean">
                  Jean
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;