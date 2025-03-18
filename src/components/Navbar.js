import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
          Hotel Rooms
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/register">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
