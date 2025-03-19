import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearch = (navigate) => {
    if (this.state.searchTerm.trim() !== "") {
      navigate(`/search/${this.state.searchTerm}`); // Redirect to search results
      this.setState({ searchTerm: "" }); // Clear input field
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i
              style={{
                background: "linear-gradient(to right, red, blue)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NewsMate
            </i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="news">Home</Link>
              </li>
              {["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"].map(
                (category) => (
                  <li key={category} className="nav-item">
                    <Link className="nav-link" to={`/${category.toLowerCase()}`}>{category}</Link>
                  </li>
                )
              )}
            </ul>
            <SearchBar onSearch={this.handleSearch} onInputChange={this.handleInputChange} searchTerm={this.state.searchTerm} />
          </div>
        </div>
      </nav>
    );
  }
}

// SearchBar as a separate function with `useNavigate`
const SearchBar = ({ onSearch, onInputChange, searchTerm }) => {
  const navigate = useNavigate();

  return (
    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={onInputChange}
      />
      <button className="btn btn-outline-success" type="button" onClick={() => onSearch(navigate)}>
        Search
      </button>
    </form>
  );
};

export default Navbar;
