import React from 'react';
import Question from './Question';

export default class Quiz extends React.Component {
    state = {
        wordList: [],
        count: 0
    };

    shuffleArray = (o) => {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
    };

    componentWillMount() {
        try {
            const json = localStorage.getItem('wordList');
            const wordList = JSON.parse(json);
            let sortedList = this.shuffleArray(wordList);
            console.log('srted',sortedList)
            
            if (wordList) {
                this.setState(() => ({ wordList: sortedList }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    handleUpdate = () => {
        console.log('update handled')
    }

    render() {
        console.log('state', this.state)
        return (
            <div className="container">
                <Question word={this.state.wordList[this.state.count]}  handleUpdate={this.handleUpdate} count={this.state.count} />
            </div>
        );
    }
}