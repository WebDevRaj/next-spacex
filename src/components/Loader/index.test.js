import React from 'react';
import {shallow} from 'enzyme';

import Loader from './index';

describe('Loader component', () => {

	const wrapper = shallow(<Loader />);
    it('renders loader component', () => {
		expect(wrapper.find('.loader')).toHaveLength(1);
    });
});