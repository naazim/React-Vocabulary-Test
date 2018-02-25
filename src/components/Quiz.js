import React from 'react';
import Question from './Question';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        wordList: [],
        count: 0
    };

    // shuffleArray = (o) => {
    //     for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    //         return o;
    // };

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
        }
        
    };

    handleNext = (userAnswer) => {
            const wordList = this.state.wordList;
            const updatedWordSet = {
                ...wordList[this.state.count],
                userAnswer
            };

            wordList[this.state.count] = updatedWordSet;

            this.setState((prevState) => ({
                wordList,
                count: this.state.count + 1 >= this.state.wordList.length ? this.state.count : this.state.count + 1
            }));

            
        if (this.state.count + 1 >= this.state.wordList.length) {
            const json = JSON.stringify(this.state.wordList);
            localStorage.setItem('wordList', json);

            this.props.handleModule('QuizResult');
        }
    };

    render() {
        return (
            <div className="container">
                <Question
                    word={this.state.wordList[this.state.count]}
                    handleNext={this.handleNext}
                    count={this.state.count} />
            </div>
        );
    }
}