import React from 'react';
import { shallow } from 'enzyme';
import Result from '../../components/Result';

describe('Result', () => {
    const handleModuleSpy = jest.fn();
    const shuffledList=[{"native":"Hello","foreign":"Hallo"},{"native":"Good","foreign":"Gut"}];
    const wrapper = shallow(<Result shuffledList={shuffledList} handleModule={handleModuleSpy} />);

    test('should render Result correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should render a result item for every object in the shuffled list', () => {
        expect(wrapper.find('ResultItem').length).toBe(2);
    });

    test('should switch to the list component on clicking back button', () => {
        wrapper.find('.question__button').simulate('click');
        expect(handleModuleSpy).toHaveBeenCalled();
    })
});