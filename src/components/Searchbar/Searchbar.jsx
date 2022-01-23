import React, { Component } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
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
      <header className={css.Header}>
        <form onSubmit={this.onFormSubmit} className={css.SearchForm}>
          <button
            type="button"
            onClick={this.props.onClick}
            className={css.SearchButton}
          >
            <RiSearchEyeLine
              style={{ width: "100%", height: "100%", color: "#fff" }}
            />
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
            className={css.SearchInput}
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
