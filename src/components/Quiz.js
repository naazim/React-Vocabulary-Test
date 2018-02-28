import React from 'react';
import Question from './Question';
import Progress from './Progress';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        shuffledList: [],
        count: 0
    };

    componentWillMount() {
        this.setState(() => ({
            shuffledList: this.props.shuffledList
        }));
    };
    
    /**
     * @description Updates the shuffled array with user's answer. If its the last question, 
     * then shows the result component
     * @param {string} userAnswer Translation answer entered by user
     */
    handleNext = (userAnswer) => {
        const shuffledList = this.props.shuffledList;
        const updatedWordSet = {
            ...shuffledList[this.state.count],
            userAnswer
        };

        shuffledList[this.state.count] = updatedWordSet;

        this.setState((prevState) => ({
            shuffledList,
            count: this.state.count + 1 >= this.state.shuffledList.length ? this.state.count : this.state.count + 1
        }));

        if (this.state.count + 1 >= this.state.shuffledList.length) {
            this.props.handleShuffledList(this.state.shuffledList);
            this.props.handleModule('QuizResult');
        }
    };

    render() {
        const percentage = this.state.count / 20 * 100;
        return (
            <div className="wrapper">
                <Progress percentage={percentage} />

                <Question
                    word={this.state.shuffledList[this.state.count]}
                    handleNext={this.handleNext}
                    count={this.state.count} />
            </div>
        );
    }
}