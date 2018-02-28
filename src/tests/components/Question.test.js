import React from 'react';
import { shallow } from 'enzyme';
import Question from '../../components/Question';

describe('Question', () => {
    const handleNextSpy = jest.fn();
    const word = {"native":"Good","foreign":"Gut"};
    const wrapper = shallow(<Question word={word} handleNext={handleNextSpy} />);

    test('should render Question correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});