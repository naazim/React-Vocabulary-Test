import React from 'react';
import { shallow } from 'enzyme';
import AddWord from '../../components/AddWord';
import {handleAddWord} from '../../components/VocabularyApp';

test('should handle error for invalid form submission', () => {
    const handleAddWord = jest.fn();
    const wrapper = shallow(<AddWord handleAddWord ={handleAddWord} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
        target: { elements :{
            native: { value: 'hello' },
            foreign: { value: 'hallo' }
        }}
    });

    expect(handleAddWord).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
});

test('should show error message for invalid form submission', () => {
    const handleAddWord = jest.fn();
    const wrapper = shallow(<AddWord handleAddWord ={handleAddWord} />);
    wrapper.setState({ error: 'Enter valid native word'});
    
    const errorMsg = wrapper.find('.add-word-error').text();
    expect(errorMsg).toEqual('Enter valid native word');
});