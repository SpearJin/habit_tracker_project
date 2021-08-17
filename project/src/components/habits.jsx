import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  handleIncrease = (habit) => {
    this.props.onIncreament(habit);
  };

  handleDecrease = (habit) => {
    this.props.onDecreament(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul className='habits'>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncreament={this.handleIncrease}
            onDecreament={this.handleDecrease}
            onDelete={this.handleDelete}
          />
        ))}
        <button className='habits-reset' onClick={this.props.onReset}>
          Reset
        </button>
      </ul>
    );
  }
}

export default Habits;
