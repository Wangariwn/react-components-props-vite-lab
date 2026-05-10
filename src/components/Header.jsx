import PropTypes from 'prop-types';

function Header(props) {
    return (
      <header>
        <h1>{props.name}</h1>
      </header>
    );
  }

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;