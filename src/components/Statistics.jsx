import PropTypes from 'prop-types';
import css from './Feedback.module.css';
import { BsCupHot, BsBalloonHeart } from 'react-icons/bs';
const Statistics = ({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2> Statistics</h2>
      <div className={css.containerStatistics}>
        <p className={css.statisticsGood}>
          Good <span>{state.good}</span>
        </p>
        <p className={css.statisticsNeutral}>
          Neutral <span>{state.neutral}</span>
        </p>
        <p className={css.statisticsBad}>
          Bad <span>{state.bad}</span>
        </p>
      </div>
      <div className={css.total}>
        <p className={css.statisticsTotal}>
          Total: <span>{countTotalFeedback()}</span>
        </p>
        <BsCupHot />
      </div>
      <div className={css.total}>
        <p className={css.statisticsTotal}>
          Positive feedback:
          <span> {countPositiveFeedbackPercentage()} %</span>
        </p>
        <BsBalloonHeart />
      </div>
    </div>
  );
};

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
export default Statistics;
