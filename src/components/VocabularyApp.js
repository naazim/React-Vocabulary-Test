import React from 'react';
import CreateQuiz from './CreateQuiz';
import Header from './Header';
import Quiz from './Quiz';
import Result from './Result';

export default class VocabularyApp extends React.Component {
  state = {
    wordList: [],
    shuffledList: [],
    module: 'CreateQuiz'  //CreateQuiz || PerformQuiz || QuizResult
  };

  componentWillMount() {
    try {
      const json = localStorage.getItem('wordList');
      const wordList = JSON.parse(json);

      if (wordList) {
        this.setState(() => ({ wordList }));
      }
    } catch (e) {
      // Do nothing
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.wordList.length !== this.state.wordList.length) {
      const json = JSON.stringify(this.state.wordList);
      localStorage.setItem('wordList', json);
    };
  };

  /**
   * @description Adds the word pair to the list
   * @param {string} native native word
   * @param {string} foreign translated foreign word
   */
  handleAddWord = (native, foreign) => {
    this.setState((prevState) => ({
      wordList: [...prevState.wordList, { native, foreign }]
    }));
  };

   /**
   * @description Removes the word pair from the list
   * @param {number} wordToRemove index of word pair to be removed from the list
   */
  handleDeleteWord = (wordToRemove) => {
    this.setState((prevState) => ({
      wordList: prevState.wordList.filter((word) => wordToRemove !== prevState.wordList.indexOf(word))
    }));
  };

  /**
   * @description Removes all the word pairs from the list
   */
  handleDeleteAll = () => {
    this.setState(() => ({ wordList: [] }));
  };

  /**
   * @description Switches to the corresponding module / screen
   * @param {string} module name of the module
   */
  handleModule = (module) => {
    this.setState(() => ({
      module
    }));

    if(module === 'PerformQuiz') {  //shuffle for performing quiz only
      const shuffledList = this.shuffleList([...this.state.wordList]);
      this.handleShuffledList(shuffledList);
    }
  };

  /**
   * @description updates the shuffled list
   * @param {array} shuffledList shuffled word list
   */
  handleShuffledList = (shuffledList) => {
    this.setState(() => ({
      shuffledList
    }));
  };

  /**
   * @description Shuffles the array
   * @param {array} list List of word pairs
   * @returns {array} Shuffled list of word pairs
   */
  shuffleList = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  render() {
    const { module, wordList, shuffledList } = this.state;

    return (
      <div>
        <Header />
        <div className="container">

          {module === 'CreateQuiz' &&
            <CreateQuiz
              handleAddWord={this.handleAddWord}
              handleDeleteWord={this.handleDeleteWord}
              handleDeleteAll={this.handleDeleteAll}
              handleModule={this.handleModule}
              wordList={wordList}
            />
          }

          {module === 'PerformQuiz' &&
            <Quiz
              handleModule={this.handleModule}
              shuffledList={shuffledList}
              handleShuffledList={this.handleShuffledList}
            />
          }

          {module === 'QuizResult' &&
            <Result
              handleModule={this.handleModule}
              shuffledList={shuffledList}
            />
          }
        </div>
      </div>
    );
  }
}
