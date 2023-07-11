import { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notificatio from "./Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target }) => {
    this.setState((prev) => ({ [target.name]: prev[target.name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    console.log(positive);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive} />
          ) : (
            <Notificatio message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
//good={} neutral={} bad={} total={} positivePercentage={}
