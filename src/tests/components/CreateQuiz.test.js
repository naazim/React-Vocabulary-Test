import React from 'react';
import {shallow} from 'enzyme';
import CreateQuiz, {percentage} from '../../components/CreateQuiz';

describe('Create Quiz', () => {
    const handleModule = jest.fn();
    let wordList = [{"native":"Hello","foreign":"Hallo"},{"native":"Good","foreign":"Gut"}];
    let wrapper = shallow(<CreateQuiz wordList={wordList} handleModule={handleModule} />);
    
    test('should create the quiz correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show the percentage correctly', () => {
        expect(wrapper.find('Progress').props().percentage).toBe(10);
    });
    
    test('should disable button if word count is less than 20', () => {
        expect(wrapper.find('.button--big').props().disabled).toBe(true);
    });
    
    test('should enable button if word count is more than 20', () => {
        wordList = new Array(20);
        wrapper = shallow(<CreateQuiz wordList={wordList} handleModule={handleModule} />);
        expect(wrapper.find('.button--big').props().disabled).toBe(false);
    });
});


