import React from 'react';
import { shallow } from 'enzyme';
import FullPost from './FullPost';
// import mockAxios from 'axios';

describe('<FullPost />', () => {
    let wrapper;
    
    beforeEach(() => {
        const props = {
            id: 1,
        };
        wrapper = shallow(<FullPost {...props} />);
    });

    it('render as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('deletePostHandler() should call API with required params', () => {
        const instance = wrapper.instance();
        // spy on deletePostHandler
        // const deletePostHandlerSpy = jest.spyOn(instance, 'deletePostHandler');
        // const deleteButton = wrapper.find('.Delete');
        // deleteButton.simulate('click');
        // expect(deletePostHandlerSpy).toHaveBeenCalledTimes(1);
        // expect(instance.props.id).toBe(1);
        // expect(wrapper.find('.Delete')).toBeDefined();
        
    });

    // it('componentWillUpdate() should call backend API', () => {
    //     const instance = wrapper.instance();
        
    //     instance.componentDidUpdate();

    //     expect(mockAxios.get).toHaveBeenCalledTimes(1);
    // });

});