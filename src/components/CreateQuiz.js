import React from 'react';
import Options from './Options';
import AddOption from './AddOption';
import Progress from './Progress';

export default class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        wordList: [],
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            wordList: prevState.wordList.filter((word) => optionToRemove !== prevState.wordList.indexOf(word))
        }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ wordList: [] }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handleTest = () => {
        const randomNum = Math.floor(Math.random() * this.state.wordList.length);
        const option = this.state.wordList[randomNum];
        this.props.handleModule('PerformQuiz');
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
            wordList: [...prevState.wordList, { 'native': option, 'foreign': option2, 'userAnswer': undefined }]
        }));

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
        };
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const {wordList} = this.state;
        return (
            <div className="wrapper">
                <Progress percentage={wordList.length} />
                <div className="widget">
                    <Options
                        options={wordList}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                </div>
                <input
                    type="button"
                    onClick={this.handleTest}
                    className="button button--big"
                    disabled={wordList.length < 2}
                    value="Take Test"
                />
            </div>
        );
    }
};