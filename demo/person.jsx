import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {
  static propTypes = {
    firstname: PropTypes.string,
    age: PropTypes.number
  };

  static defaultProps = {
    firstname: 'Mystery',
    age: -1
  };

  render() {
    const {
      firstname,
      age
    } = this.props;
    return(
      <div>
        <h3>Person</h3>
        <p>
          FirstName: {firstname}
        </p>
        <p>
          Age: {age}
        </p>
      </div>
    );
  }
}

export default Person;