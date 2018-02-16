import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
// import OptionModal from './OptionModal';

export default class VocabularyApp extends React.Component {
  state = {
    wordList: [],
    test: false,
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ wordList: [] }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOption = (optionToRemove) => {
    console.log('optionToRemove',optionToRemove);
    this.setState((prevState) => ({
      wordList: prevState.wordList.filter((word) => optionToRemove !== prevState.wordList.indexOf(word))
    }));
  };
  handleTest = () => {
    const randomNum = Math.floor(Math.random() * this.state.wordList.length);
    const option = this.state.wordList[randomNum];
    this.setState(() => ({
      selectedOption: option,
      test: true
    }));
  };
  handleAddOption = (option, option2) => {
    if (!option) {
      return 'Enter valid native word';
    }
    if (!option2) {
      return 'Enter valid foriegn word';
    } 
    else if (this.state.wordList.indexOf(option) > -1 || this.state.wordList.indexOf(option2) > -1) {
      return 'This word already exists';
    }

    this.setState((prevState) => ({
      wordList: [...prevState.wordList, {'native':option, 'foreign':option2}]
    }));

    console.log('state set : ', this.state.wordList)
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('wordList');
      const wordList = JSON.parse(json);

      if (wordList) {
        this.setState(() => ({ wordList }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.wordList.length !== this.state.wordList.length) {
      const json = JSON.stringify(this.state.wordList);
      localStorage.setItem('wordList', json);
      console.log('local set = ', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('inside render: ', this.state.wordList)

    return (
      <div>
        <Header />

        {/* If not in test mode */}
        {!this.state.test && 
        
        <div className="container">
          <div className="widget">
            <Options
              options={this.state.wordList}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
          <Action
            hasOptions={this.state.wordList.length >= 20}
            handleTest={this.handleTest}
            percentage={this.state.wordList.length}
          />
        </div>
        }

        {/* if in test mode */}
        {this.state.test &&
        <div className="container">
          <h1>Test</h1>
        </div>
      }

        {/* <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        /> */}
      </div>
    );
  }
}
