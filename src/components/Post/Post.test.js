import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

describe('<Post />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Post />);
    });

    it('render as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });
});