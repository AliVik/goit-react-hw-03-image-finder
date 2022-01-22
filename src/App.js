import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import GetImagesFromApi from "./helpers/GetImagesFromAPI";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";

class App extends Component {
  state = {
    searchName: "",
    images: [],
  };
  handleFormData = (data) => {
    this.setState({ searchName: data.formInput });
  };
  async componentDidUpdate(_, prevState) {
    if (prevState.searchName !== this.state.searchName) {
      const imagesArr = await GetImagesFromApi(this.state.searchName);
      this.setState({
        images: imagesArr.hits.map((hit) => {
          return {
            id: hit.id,
            webformatURL: hit.previewURL,
            largeImageURL: hit.pageURL,
          };
        }),
      });
    }
  }
  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.handleFormData} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && <Button />}
      </>
    );
  }
}

export default App;
