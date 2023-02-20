import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.string
  };
  constructor(props) {
    super(props);

    this.state = {
      humor: 'happy'
    }
  }
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>
          {this.props.age}
        </p>
      </div>
    );
  }
}

export default Person;