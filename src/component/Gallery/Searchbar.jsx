import { Component } from "react";
import { toast } from "react-toastify";
import style from "./Searchbar.module.css";
import "react-toastify/dist/ReactToastify.css";
import { FcSearch } from "react-icons/fc";

class Searchbar extends Component {
  state = {
    text: "",
  };

  handlechange = ({ target }) => {
    this.setState({ text: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.trim()) {
      toast.error("Пусто", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    this.props.handleText(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style["SearchForm-button"]}>
            <FcSearch />
            {/* <span className={style["SearchForm-button-label"]}>Search</span> */}
          </button>

          <input
            value={this.state.text}
            className={style["SearchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handlechange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
