const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>positivePercentage {positivePercentage}%</p>
    </>
  );
};
export default Statistics;
