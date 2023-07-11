import { nanoid } from "nanoid";
import { Component } from "react";

class ContactForm extends Component {
  state = { name: "", number: "" };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContacts({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Name
          </label>
          <input
            id="disabledTextInput"
            className="form-control"
            placeholder="Name"
            type="text"
            name="name"
            value={this.state.name}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledSelect" className="form-label">
            Phone Number
          </label>
          <input
            id="disabledTextInput"
            className="form-control"
            placeholder="Tel"
            type="tel"
            name="number"
            value={this.state.number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
    );
  }
}
export default ContactForm;
