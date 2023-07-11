const Contacts = ({ contacts, deleteContacts }) => {
  return (
    <>
      {contacts && (
        <ul className="list-group">
          {contacts.map(({ id, name, number }) => (
            <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
              {name}: {number}
              <button type="button" className="btn btn-danger" onClick={() => deleteContacts(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Contacts;
