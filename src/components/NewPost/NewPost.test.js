import React from 'react';
import { shallow } from 'enzyme';
import NewPost from './NewPost';

describe('<NewPost />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<NewPost />);
    });

    it('render as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });
});