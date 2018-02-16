import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const option2 = e.target.elements.option2.value.trim();
    const error = this.props.handleAddOption(option, option2);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
      e.target.elements.option2.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" placeholder="Enter native word" />
          <input className="add-option__input" type="text" name="option2" placeholder="Enter foreign word" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
