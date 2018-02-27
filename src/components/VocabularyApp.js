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

  handleModule = (module) => {
    this.setState(() => ({
      module
    }));
  };

  render() {
    const { module, wordList } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          {module === 'CreateQuiz' && <CreateQuiz handleModule={this.handleModule} />}
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
