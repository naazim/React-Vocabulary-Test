import React from 'react';
import { shallow } from 'enzyme';
import Progress from '../../components/Progress';

test('should display the recieved progress value', () => {
    const wrapper = shallow(<Progress percentage="50" />);
    expect(wrapper.find('.progress__percent').prop('style').width).toBe('50%');
    expect(wrapper).toMatchSnapshot();
})

test('should display no progress if recieved progress value is 0', () => {
    const wrapper = shallow(<Progress percentage="0" />);
    expect(wrapper.find('.progress__percent').prop('style').width).toBe('0%');
    expect(wrapper).toMatchSnapshot();
})