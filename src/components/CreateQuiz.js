import React from 'react';
import Options from './Options';
import AddWord from './AddWord';
import Progress from './Progress';

const CreateQuiz = (props) => {

    const handleAddWord = (native, foreign) => {
        if (!native) {
            return 'Enter valid native word';
        }
        if (!foreign) {
            return 'Enter valid foriegn word';
        }

        props.handleAddWord(native, foreign);
    };

    const { wordList } = props;

    return (
        <div className="wrapper">
            <Progress percentage={wordList.length} />
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