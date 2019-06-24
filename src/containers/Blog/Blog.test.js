import React from 'react';
import { shallow } from 'enzyme';
// import mockAxios from 'axios';

import Blog from './Blog';



describe('<Blog />', () => {

    let wrappper;

    beforeEach(() => {
        wrappper = shallow(<Blog />);
    });

    it('should render as expected', () => {
        expect(wrappper).toMatchSnapshot();
    });

    // it('componentDidMount() should call backend API', () => {
    //     const instance = wrappper.instance();
        
    //     instance.componentDidMount();

    //     expect(mockAxios.get).toHaveBeenCalledTimes(1);
    // });
});
