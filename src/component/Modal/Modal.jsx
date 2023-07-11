import { Component } from "react";
import style from "./Moda.module.css";

class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onEscapeclick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onEscapeclick);
  }

  onEscapeclick = (e) => {
    console.log(e.code);
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  onBackDropclick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <div>
        <div className={style.Overlay} onClick={this.onBackDropclick}>
          <div className={style.Modal}>
            <img src={this.props.imgLg.largeImageURL} alt={this.props.imgLg.tags} />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
