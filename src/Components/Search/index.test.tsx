import * as React from 'react';
import {shallow} from 'enzyme';
import Search from '../Search/'

test('Search component test', () => {
    const searchComp = shallow(<Search data={[
        { name: { first: 'Rob', last: 'Zombie' }, phone: '666', email: 'r@z.a', _id: '0' },
        { name: { first: 'Bob', last: 'Lich' }, phone: '13', email: 'l@l.a', _id: '1' }
    ]}/>);

    // Check values
    expect(searchComp.find('.name').first().text()).toEqual('Zombie Rob');
    expect(searchComp.find('.phone').first().text()).toEqual('666');
    expect(searchComp.find('.email').first().text()).toEqual('r@z.a');
    expect(searchComp.find('.users-container li').length).toEqual(2);

    // Check input change
    searchComp.find('input').simulate('change', {target: {value: 'ob'}});
    expect(searchComp.find('.users-container li').length).toEqual(2);
    searchComp.find('input').simulate('change', {target: {value: 'rob'}});
    expect(searchComp.find('.users-container li').length).toEqual(1);
});