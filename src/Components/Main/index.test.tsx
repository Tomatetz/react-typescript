import * as React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main/'

test('Main component values test', () => {
  const mainComp = shallow(<Main data={[{ age: 37, balance: '$1,461.65'}, { age: 27, balance: '$1,100.11'}]} />);

  // Check values
  expect(mainComp.find('.total').text()).toEqual('2');
  expect(mainComp.find('.av-age').text()).toEqual('32');
  expect(mainComp.find('.st-dev').text()).toEqual('255.64738567018455');
});