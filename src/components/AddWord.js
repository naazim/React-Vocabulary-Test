import React from 'react';

export default class AddWord extends React.Component {

  state = {
    error: undefined
  };

  handleAddWord = (e) => {
    e.preventDefault();
    const native = e.target.elements.native.value.trim();
    const foreign = e.target.elements.foreign.value.trim();
    const error = this.props.handleAddWord(native, foreign);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.native.value = '';
      e.target.elements.foreign.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-word-error">{this.state.error}</p>}
        <form className="add-word" onSubmit={this.handleAddWord}>
          <input className="add-word__input" type="text" name="native" placeholder="Enter native word" autoFocus />
          <input className="add-word__input" type="text" name="foreign" placeholder="Enter foreign word" />
          <button className="button button--plus"><span className="add-word__mobile">Add word </span>+</button>
        </form>
      </div>
    );
  }
}
