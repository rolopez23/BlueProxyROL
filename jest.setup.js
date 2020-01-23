import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapater-react-16';

configure({ adapter: new Adapter() });
