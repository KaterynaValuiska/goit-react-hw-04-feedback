import PropTypes from 'prop-types';
import css from './Feedback.module.css';
const FeedbackOptions = ({ handleClickBtn, state }) => {
  return (
    <div className={css.containerBtn}>
      {state.map(name => (
        <button
          className={css.btn}
          key={name}
          onClick={() => handleClickBtn(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleClickBtn: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default FeedbackOptions;
