import React from 'react';
import CreateQuiz from './CreateQuiz';
import Header from './Header';
import Quiz from './Quiz';
import Result from './Result';

export default class VocabularyApp extends React.Component {
  state = {
    wordList: [],
    module: 'CreateQuiz'  //CreateQuiz || PerformQuiz || QuizResult
  };

  componentWillMount() {
    try {
      const json = localStorage.getItem('wordList');
      const wordList = JSON.parse(json);
      // let sortedList = this.shuffleArray(wordList);
      // console.log('srted',sortedList)

      if (wordList) {
        this.setState(() => ({ wordList }));
        // this.setState(() => ({ wordList: sortedList }));
      }
    } catch (e) {
      // Do nothing at all
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.wordList.length !== this.state.wordList.length) {
      const json = JSON.stringify(this.state.wordList);
      localStorage.setItem('wordList', json);
    };
  };

  handleAddWord = (native, foreign) => {
    this.setState((prevState) => ({
      wordList: [...prevState.wordList, { native, foreign, 'userAnswer': undefined }]
    }));
  };

  handleDeleteWord = (wordToRemove) => {
    this.setState((prevState) => ({
      wordList: prevState.wordList.filter((word) => wordToRemove !== prevState.wordList.indexOf(word))
    }));
  };

  handleDeleteAll = () => {
    this.setState(() => ({ wordList: [] }));
  };

  handleModule = (module) => {
    this.setState(() => ({
      module
    }));
  };

  render() {
    const { module, wordList } = this.state;
    console.log(wordList)
    return (
      <div>
        <Header />
        <div className="container">

          {module === 'CreateQuiz' &&
            <CreateQuiz
              handleModule={this.handleModule}
              handleAddWord={this.handleAddWord}
              handleDeleteWord={this.handleDeleteWord}
              handleDeleteAll={this.handleDeleteAll}
              wordList={wordList}
            />
          }

          {module === 'PerformQuiz' && <Quiz handleModule={this.handleModule} />}
          {module === 'QuizResult' &&
            <Result
              handleModule={this.handleModule}
              wordList={wordList}
            />
          }
        </div>
      </div>
    );
  }
}
