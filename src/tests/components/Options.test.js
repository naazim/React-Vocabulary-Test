import React from 'react';
import { shallow } from 'enzyme';
import Options from '../../components/Options';

describe('Options', () => {
    const handleDeleteAll = jest.fn();
    let options= [{"native":"Hello","foreign":"Hallo"},{"native":"Good","foreign":"Gut"}];
    let wrapper = shallow(<Options options={options} handleDeleteAll={handleDeleteAll} />);

    test('should render options correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should delete entire list on click of remove all mlink', () => {
        wrapper.find('.button--link').simulate('click');
        expect(handleDeleteAll).toHaveBeenCalled();
    });

    test('should render an option for every object in the word list array', () => {
        expect(wrapper.find('Option').length).toBe(2);
    });

    test('should show message to add words when list is empty', () => {
        expect(wrapper.find('.widget__message').length).toBe(0);
        options= [];
        wrapper = shallow(<Options options={options} handleDeleteAll={handleDeleteAll} />);
        expect(wrapper.find('.widget__message').length).toBe(1);
        expect(wrapper.find('.widget__message').text()).toBe('Enter 20 words with translations get started');
        expect(wrapper).toMatchSnapshot();
    });

});