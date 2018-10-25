import App from './Test';
import React from 'react';
import { shallow } from 'enzyme';
import setupTest from './setupTest';
setupTest;

describe('<App />', () => {
  test('should Hello World', () => {
    const wrapper = shallow(<App name="World" />);
    expect(wrapper.find('h1').text()).toBe('Hello World');
  });
});
