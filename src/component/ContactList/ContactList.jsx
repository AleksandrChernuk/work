import { nanoid } from "nanoid";
import { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import Contacts from "./Contacts";

const LOCAL_KEY = "contacts";

class ContactList extends Component {
  state = {
    contacts: [],

    filter: "",
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    this.setState({ contacts: JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? [] });
  }

  handleChangeFilter = (text) => {
    this.setState({ filter: text });
  };

  addContacts = (newContact) => {
    const { contacts } = this.state;
    const isNncluded = contacts.some(({ name }) => name === newContact.name);
    if (isNncluded) {
      alert("Такое имя есть уже");
      return;
    }
    console.log(isNncluded);
    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        {
          ...newContact,
        },
      ],
    }));

    this.setState({ filter: "" });
  };

  deleteContacts = (id) => {
    this.setState((pre) => ({ contacts: pre.contacts.filter(({ id: prevId }) => prevId !== id) }));
  };

  render() {
    const visibalContacts =
      this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter.toLowerCase().trim())) ||
      "";
    return (
      <>
        <h2 className="mb-3">Phonebook</h2>
        <ContactForm addContacts={this.addContacts} />
        <h2>ContactList</h2>
        <Filter filterText={this.handleChangeFilter} />
        <Contacts contacts={visibalContacts} deleteContacts={this.deleteContacts} />
      </>
    );
  }
}

export default ContactList;
