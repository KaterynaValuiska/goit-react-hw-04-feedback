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

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedback = 0;
    if (countTotalFeedback()) {
      positiveFeedback = Math.round((good / countTotalFeedback()) * 100);

      return positiveFeedback;
    }
    return positiveFeedback;
  };
  const ClickBtn = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        console.log(good);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleClickBtn={ClickBtn}
          state={Object.keys({ good, neutral, bad })}
        />
        {countTotalFeedback() !== 0 ? (
          <Statistics
            state={{ good, neutral, bad }}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
