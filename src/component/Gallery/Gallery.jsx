import { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";
import s from "./App.module.css";
import Loader from "./Loader";
import { ToastContainer } from "react-toastify";
import Modal from "../Modal/Modal";
import { getImagesApi } from "../../api/getImagesApi";

class Gallery extends Component {
  state = {
    images: [],
    text: "",
    page: 1,
    isLoading: false,
    isOpenModal: false,
    largeImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      const { page, text } = this.state;
      this.setState({ isLoading: true });
      getImagesApi(page, text)
        .then((data) => {
          this.setState((prev) => ({ images: [...prev.images, ...data.hits] }));
        })
        .catch((error) => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    }

    if (prevState.text !== this.state.text) {
      const { page, text } = this.state;
      this.setState({ page: 1 });
      this.setState({ isLoading: true });
      this.setState({ images: [] });
      getImagesApi(page, text)
        .then((data) => {
          this.setState({ images: data.hits });
        })
        .catch((error) => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  toggleModal = () => {
    this.setState((p) => ({ isOpenModal: !p.isOpenModal }));
  };

  setLargeImg = (largeImg) => {
    this.setState({ largeImg });
  };

  handleLoadMorePage = () => {
    this.setState((p) => ({ page: p.page + 1 }));
  };

  handleChangeText = (text) => {
    this.setState({ text });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar handleText={this.handleChangeText} />
        <ToastContainer />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery>
            <ImageGalleryItem items={this.state.images} setLargeImg={this.setLargeImg} modal={this.toggleModal} />
          </ImageGallery>
        )}
        {this.state.images.length > 0 && <Button handleClick={this.handleLoadMorePage} />}
        {this.state.isOpenModal && <Modal imgLg={this.state.largeImg} toggleModal={this.toggleModal} />}
      </div>
    );
  }
}

export default Gallery;
