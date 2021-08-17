import React, { Component } from 'react';

class AddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form className='add-form' ref={this.formRef} onSubmit={this.onSubmit}>
        <input
          className='add-input'
          ref={this.inputRef}
          type='text'
          placeholder='Habit'
        />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default AddForm;
