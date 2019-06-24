import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('component with App className', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toBeDefined();
  });
});

