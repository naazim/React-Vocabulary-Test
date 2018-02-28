import React from 'react';
import { shallow } from 'enzyme';
import ResultItem from '../../components/ResultItem';

describe('ResultItem', () => {
    let word = { native:"Hello", foreign:"Hallo", userAnswer: "Hal" };
    let wrapper = shallow(<ResultItem word={word}/>);

    test('should render ResultItem correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have an error indication for user\'s wrong answers',() =>{
        expect(wrapper.find('.result__error').length).toBe(1);
    });

    test('should have an error indication for user\'s right answers',() =>{
        word = { native:"Hello", foreign:"Hallo", userAnswer: "Hallo" };
        wrapper = shallow(<ResultItem word={word}/>);
        expect(wrapper.find('.result__error').length).toBe(0);
    });
});