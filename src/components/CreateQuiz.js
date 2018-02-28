import React from 'react';
import Options from './Options';
import AddWord from './AddWord';
import Progress from './Progress';

const CreateQuiz = (props) => {

    /**
     * @description Handles the new word pair added and supplies the error messages
     */
    const handleAddWord = (native, foreign) => {
        if (!native && !foreign) {
            return 'Enter valid words';
        }
        else if (!native) {
            return 'Enter valid native word';
        }
        else if (!foreign) {
            return 'Enter valid foriegn word';
        }

        props.handleAddWord(native, foreign);
    };

    const { wordList } = props;
    const percentage = wordList.length /20 * 100;

    return (
        <div className="wrapper">
            <Progress percentage={percentage} />
            <div className="widget">
                <Options
                    options={wordList}
                    handleDeleteAll={props.handleDeleteAll}
                    handleDeleteWord={props.handleDeleteWord}
                />
                <AddWord
                    handleAddWord={handleAddWord}
                />
            </div>
            <input
                type="button"
                onClick={() => props.handleModule('PerformQuiz')}
                className="button button--big"
                disabled={wordList.length < 20}
                value="Take Test"
            />
        </div>
    );
};

export default CreateQuiz;