const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((e, i) => (
        <button key={i} type="buttton" name={e} onClick={onLeaveFeedback}>
          {e}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
