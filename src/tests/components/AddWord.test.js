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