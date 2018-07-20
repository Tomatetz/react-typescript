import * as React from 'react';
import {shallow} from 'enzyme';
import Contacts from '../Contacts/'

test('Contacts component test', () => {
    const contactsComp = shallow(<Contacts data={[{ name: { first: 'a', last: 'a' }, phone: '23456', email: 'a@a.a', _id: '0' }]}/>);

    // Check values
    expect(contactsComp.find('.name').text()).toEqual('a a');
    expect(contactsComp.find('.phone').text()).toEqual('23456');
    expect(contactsComp.find('.email').text()).toEqual('a@a.a');
    expect(contactsComp.find('.pagination').length).toEqual(1);

    // Check pagination
    contactsComp.setState({
        allData: new Array(13)
            .fill({})
            .map((u, i) => ({ name: { first: 'a', last: 'a' }, phone: '23456', email: 'a@a.a', _id: i
        }))
    });
    expect(contactsComp.find('.pagination').length).toEqual(2);
    expect(contactsComp.find('.pagination').first().hasClass('active'));
    contactsComp.find('.pagination').last().simulate('click');
    expect(contactsComp.find('.pagination').last().hasClass('active'));

    contactsComp.setState({ step: 0 });
    expect(contactsComp.find('.pagination').first().hasClass('active'));
});