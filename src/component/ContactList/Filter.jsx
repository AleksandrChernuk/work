const Filter = ({ filterText }) => {
  const onChange = ({ target }) => {
    filterText(target.value);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="disabledTextInput" className="form-label">
          Find contacts by name
        </label>
        <input name="filter" id="disabledTextInput" className="form-control" type="text" onChange={onChange} />
      </div>
    </form>
  );
};

export default Filter;
