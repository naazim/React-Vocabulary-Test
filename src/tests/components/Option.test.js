import React from 'react';
import { shallow } from 'enzyme';
import Option from '../../components/Option';

test('should show the option panel with words recieved', () => {
    const wrapper = shallow(<Option nativeWord="morning" foreignWord="morgan" />);
    expect(wrapper.find('.option__text').at(0).text()).toEqual('morning');
    expect(wrapper.find('.option__text').at(1).text()).toEqual('morgan');
    expect(wrapper).toMatchSnapshot();
});

test('should delete the word pair on delete click', () => {
    const handleDeleteWordSpy = jest.fn();
    const wrapper = shallow(<Option nativeWord="morning" foreignWord="morgan" handleDeleteWord={handleDeleteWordSpy} />);
    wrapper.find('.button--icon').simulate('click');
    expect(handleDeleteWordSpy).toHaveBeenCalled();
});