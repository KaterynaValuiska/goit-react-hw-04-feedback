import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <div>
      <h2> {title}</h2>
      <div>{children}</div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
export default Section;
