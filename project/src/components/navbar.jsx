import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-logo'>
          <i className='fas fa-leaf'></i>
        </div>
        <span className='navbar-title'>Habit Tracker</span>
        <span className='navbar-count'>{this.props.totalHabitCount}</span>
      </nav>
    );
  }
}

export default Navbar;
