import React from 'react';
import {shallow} from 'enzyme';

import Filter from './index';

describe('Filter component', () => {
	const props = {
		applied:{
			year: null,
			sLaunch: null,
			sLand: null,
		},
		handleChange:jest.fn()
	}
	const wrapper = shallow(<Filter {...props}/>);
    it('renders Filter component', () => {

		expect(wrapper.find('.filters')).toHaveLength(1);
    });
});