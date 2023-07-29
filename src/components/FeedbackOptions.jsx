import PropTypes from 'prop-types';
import css from './Feedback.module.css';
const FeedbackOptions = ({ state, handleClickBtn }) => {
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
  state: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClickBtn: PropTypes.func.isRequired,
};
export default FeedbackOptions;
