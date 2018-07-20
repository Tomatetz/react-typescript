import * as React from 'react';
import {shallow} from 'enzyme';
import Menu from '../Menu/'

test('Search component test', () => {
    const menuComp = shallow(<Menu />);

    // Check value
    expect(menuComp.find('Link').length).toEqual(4);

    // Simulate click
    menuComp.find('Link').first().simulate('click');
    expect(menuComp.find('Link li').first().hasClass('active'));

    // Check state
    menuComp.setState({ current: 'help'});
    expect(menuComp.find('Link li').last().hasClass('active'));
});