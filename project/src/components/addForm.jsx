import React, { Component } from 'react';

class AddForm extends Component {
  render() {
    return (
      <form className='add-form'>
        <input className='add-input' type='text' placeholder='Habit' />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default AddForm;
