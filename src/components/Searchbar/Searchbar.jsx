import React, { Component } from "react";
import css from "./Searchbar.module.css";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    formInput: "",
  };
  onInputChange = (evt) => {
    this.setState({ formInput: evt.target.value });
  };
  onFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    this.props.onFormSubmit(this.state);
    form.reset();
  };
  render() {
    return (
      <header className={css.header}>
        <form onSubmit={this.onFormSubmit}>
          <button
            type="button"
            onClick={this.props.onClick}
            className={css.SearchButton}
          >
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func,
  onClick: PropTypes.func,
};
