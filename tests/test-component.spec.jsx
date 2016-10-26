/**
 * Created by AlexEOL on 25.10.16.
 */
import TestComponent from '../src/test-component';
import { shallow } from 'enzyme';
import React from 'react';

describe('test-component', () => {
  describe('Mounting', () => {
    it('should render into the document', () => {
      const component = shallow(<TestComponent />);
      expect(component).toBeDefined();
    });
  });
});
