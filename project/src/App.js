import React, { Component } from 'react';
import './App.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Runnding', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count;
    habits[index].count = count <= 0 ? 0 : count - 1;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Navbar
          totalHabitCount={
            this.state.habits.filter((item) => item.count !== 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncreament={this.handleIncrease}
          onDecreament={this.handleDecrease}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
