import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    return (
      <ul className='habits'>
        <Habit name='Reading' count={0} />
        <Habit name='Running' count={0} />
        <Habit name='Coding' count={0} />
      </ul>
    );
  }
}

export default Habits;
