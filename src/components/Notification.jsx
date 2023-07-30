import PropTypes from 'prop-types';
import { BsCart2 } from 'react-icons/bs';
import css from './Feedback.module.css';
const Notification = ({ message }) => {
  return (
    <div>
      <h2> Statistics</h2>
      <p className={css.notification}>
        {' '}
        {message} <BsCart2 />
      </p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
