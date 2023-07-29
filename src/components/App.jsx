import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import css from './Feedback.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const ClickBtn = name => {
    setState(lastState => {
      return {
        [name]: lastState[name] + 1,
      };
    });
  };
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          state={Object.keys(this.state)}
          handleClickBtn={this.ClickBtn}
        />
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            state={this.state}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
