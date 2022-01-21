import React, { Component } from "react";
import Searchbar from "./components/Searchbar";

class App extends Component {
  state = {
    searchName: "",
  };
  handleFormData = (data) => {
    this.setState({ searchName: data });
  };
  componentDidUpdate(_, prevState) {
    const previousSearchName = Object.values(prevState.searchName).join("");
    const currentSearchName = Object.values(this.state.searchName).join("");

    if (previousSearchName !== currentSearchName) {
      console.log("делаем запрос на сервер");
    }
  }
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormData} />
      </>
    );
  }
}

export default App;
