import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Toaster, toast } from "react-hot-toast";
import errorStyle from "./helpers/general_styles/ErrorText.module.css";
import css from "./helpers/general_styles/GalleryBox.module.css";
import Searchbar from "./components/Searchbar";
import Loader from "./components/Loader";
import GetImagesFromApi from "./helpers/GetImagesFromAPI";
import mapImagesFromAPI from "./helpers/mapImagesFromApi";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";

class App extends Component {
  state = {
    searchName: "",
    images: [],
    page: 1,
    isLoading: false,
    error: null,
  };
  handleFormData = (data) => {
    this.setState({ searchName: data.formInput });
  };

  onLoadMoreClick = async () => {
    let { page, searchName, images } = this.state;
    this.setState({
      page: (page += 1),
    });

    try {
      const moreImages = await GetImagesFromApi(searchName, page);
      this.setState({
        images: [...images, ...mapImagesFromAPI(moreImages.hits)],
      });
    } catch (error) {
      console.log(error);
    }
  };
  onSearchBtnClick = () => {
    if (this.state.searchName === "") {
      toast.error("You haven`t written anything yet");
    }
  };
  async componentDidUpdate(_, prevState) {
    const { searchName } = this.state;

    if (prevState.searchName !== searchName) {
      this.setState({ isLoading: true });
      try {
        const imagesArr = await GetImagesFromApi(this.state.searchName);
        this.setState({
          images: mapImagesFromAPI(imagesArr.hits),
        });
      } catch (error) {
        if (error.response || error.request) {
          this.setState({ error });
        }
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  render() {
    const { isLoading, images, error } = this.state;

    return (
      <>
        {error && (
          <p className={errorStyle.ErrorText}>Ups, something went wrong =(</p>
        )}
        {!error && (
          <Searchbar
            onFormSubmit={this.handleFormData}
            onClick={this.onSearchBtnClick}
          />
        )}
        <div className={css.Box}>
          {!error && !isLoading && <ImageGallery images={images} />}
          {!isLoading && images.length > 0 && (
            <Button onLoadBtnClick={this.onLoadMoreClick} />
          )}
          {isLoading && <Loader onLoad={this.state.isLoading} />}
        </div>

        <Toaster />
      </>
    );
  }
}

export default App;
