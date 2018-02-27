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
        return (
            <div className="wrapper">
                <Progress percentage={this.state.count} />

                <Question
                    word={this.state.shuffledList[this.state.count]}
                    handleNext={this.handleNext}
                    count={this.state.count} />
            </div>
        );
    }
}