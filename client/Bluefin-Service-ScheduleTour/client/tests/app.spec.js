/* eslint-disable*/
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import axios from 'axios';

import App from '../src/app';
import CalendarContainer from '../src/CalendarContainer';
import CalendarEntry from '../src/CalendarEntry';
import ScheduleButton from '../src/ScheduleButton';
import Contact from '../src/Contact';
import { Box1, Box2 } from '../src/styles/Contact-style';
import Refund from '../src/Refund';
import StartOffer from '../src/StartOffer';
import RefundFlyout from '../src/RefundFlyout';

jest.mock('axios');

describe('App', () => {
  let data;
  beforeEach(() => {
    data = {
      data: [
        {
          id: 123456789,
          listing_price: 123456,
          name: 'Mamba'
        }
      ]
    };
    axios.get = jest.fn(() => Promise.resolve(data));
    axios.post = jest.fn(() => Promise.resolve());
  });

  xit('snapshot renders', () => {
    const app = renderer.create(<App />);
    let tree = app.toJSON();
    expect(app).toMatchSnapshot();
  });

  describe('On mount', () => {
    it('keeps the listingId state null if no number passed in as props', async () => {
      const wrapper = shallow(<App />);
      await Promise.all([
        expect(axios.get).toHaveBeenCalledTimes(0),
        expect(wrapper.state().houseData).toBeNull()
      ]);
    })

    it('makes a call to the api', async () => {
      const wrapper = shallow(<App listingId={123456789}/>);
      await Promise.all([
        expect(axios.get).toHaveBeenCalledWith('/house?listingId=123456789'),
        expect(axios.get).toHaveBeenCalledTimes(1)
      ]);
    });

    it('changes the listingId state to be the number passed in as props', async () => {
      const wrapper = shallow(<App listingId={123456789}/>);
      const instance = wrapper.instance();

      expect(instance.props.listingId).toEqual(123456789);
      await Promise.all([
        expect(axios.get).toHaveBeenCalledTimes(1),
        wrapper.setState({houseData: data.data[0]}, () => {
          expect(wrapper.state().houseData.id).toEqual(123456789);
          expect(wrapper.state().houseData.listing_price).toEqual(123456);
          expect(wrapper.state().houseData.name).toEqual('Mamba');
        })
      ])
    });

    // to see if rerendering works... will change as components are added
    // it('renders the name of the agent to dom', async () => {
    //     const wrapper = shallow(<App listingId={123456789}/>);
    //     await Promise.all([
    //       wrapper.setState({houseData: {
    //         id: 123456789,
    //         listing_price: 123456,
    //         name: 'Mamba'
    //       }}, () => {
    //         expect(wrapper.find('p').text()).toEqual('Mamba');
    //       })
    //     ]);
    // })
  });

  describe('Calendar', () => {
    it('should render to the dom', () => {
      const wrapper = shallow(<App listingId={123456789}/>);
      wrapper.setState({houseData: 'something'});
      expect(wrapper.find(CalendarContainer).length).toEqual(1);
    });

    it('renders calendar entries for next two weeks', () => {
      const dates = {
        day: [
          'Thursday',  'Friday',
          'Saturday',  'Sunday',
          'Monday',    'Tuesday',
          'Wednesday', 'Thursday',
          'Friday',    'Saturday',
          'Sunday',    'Monday'
        ],
        month: [
          'January',  'January',
          'January',  'February',
          'February', 'February',
          'February', 'February',
          'February', 'February',
          'February', 'February'
        ],
        date: [
          29, 30, 31, 1, 2,
           3,  4,  5, 6, 7,
           8,  9
        ]
      }
      const wrapper = mount(<CalendarContainer dates={dates}/>);
      expect(wrapper.find(CalendarEntry).length).toEqual(12);
    });

    describe('Calendar entry', () => {
      let date;
      beforeEach(() => {
        date = {
          day: 'WEDNESDAY',
          month: 'JAN',
          date: 29
        };
      });

      it('receives props of one day', () => {
        const wrapper = shallow(<CalendarEntry date={date}/>).dive();
        expect(wrapper.find('.date').text()).toEqual('29');
        expect(wrapper.find('.month').text()).toEqual('JAN');
        expect(wrapper.find('.day').text()).toEqual('WEDNESDAY');
      });

      it('Renders Card Styling for selected entry', () => {
        // eslint-disable-next-line react/jsx-filename-extension
        const wrapper = mount(<CalendarEntry date={date} selected={true} />);
        expect(wrapper).toContainMatchingElement('Selected');
        expect(wrapper).not.toContainMatchingElement('Not Selected');
        expect(wrapper).toContainMatchingElement('Day');
        expect(wrapper).toContainMatchingElement('Date');
        expect(wrapper).toContainMatchingElement('Month');
       });

       it('Renders Card Styling for selected entry', () => {
        // eslint-disable-next-line react/jsx-filename-extension
        const wrapper = mount(<CalendarEntry date={date} selected={false} />);
        expect(wrapper).toContainMatchingElement('NotSelected');
        expect(wrapper).not.toContainMatchingElement('Selected');
        expect(wrapper).toContainMatchingElement('Day');
        expect(wrapper).toContainMatchingElement('Date');
        expect(wrapper).toContainMatchingElement('Month');
       });
    });
  });


  describe('Schedule Tour Button', () => {
    it('sends a post request when clicked', async () => {
      const wrapper = mount(<App listingId={123456789}/>);
      wrapper.find(ScheduleButton).simulate('click');

      await expect(axios.post).toHaveBeenCalledTimes(1);
    });

    it('Renders Button Styling', () => {
      // eslint-disable-next-line react/jsx-filename-extension
      const wrapper = mount(<ScheduleButton />);
      expect(wrapper).toContainMatchingElement('Button');
    });
  });

  describe('Ask Button', () => {
    it('ask button renders', () => {
      const wrapper = shallow(<Contact />);
      expect(wrapper.find('AskQuestion').length).toEqual(1);
    });

    it('Renders Button Styling', () => {
      // eslint-disable-next-line react/jsx-filename-extension
      const wrapper = mount(<Contact />);
      expect(wrapper).toContainMatchingElement('Wrapper');
      expect(wrapper).toContainMatchingElement('AskQuestion');
     });
  });

  describe('Contact Button', () => {
    it('contact button renders', () => {
      const wrapper = shallow(<Contact />);
      expect(wrapper.find('PhoneNumber').length).toEqual(1);
    });

    it('Renders Button Styling', () => {
      // eslint-disable-next-line react/jsx-filename-extension
      const wrapper = mount(<Contact />);
      expect(wrapper).toContainMatchingElement('Wrapper');
      expect(wrapper).toContainMatchingElement('PhoneNumber');
     });
  });

  describe('Refund Info', () => {
    test('refund component renders', () => {
      const wrapper = shallow(<Refund />);
      expect(wrapper).toContainMatchingElement('Refund');
      expect(wrapper).toContainMatchingElement('Text');
      expect(wrapper).toContainMatchingElement('SVG');
    });

    it('calculates a fixed percent refund', () => {
      const wrapper = mount(<Refund price={10000} />);
      expect(wrapper.find('Text').text()).toEqual('Bluefin Refund: $37')
    });

    describe('Flyout', () => {
      it('renders upon click to the SVG', () => {
        const wrapper = mount(<Refund />);
        expect(wrapper.find(RefundFlyout).length).toEqual(0);
        wrapper.find('SVG').simulate('click');
        expect(wrapper.find(RefundFlyout).length).toEqual(1);
      });

      it('unrenders upon click to the SVG', () => {
        const wrapper = mount(<Refund />);
        expect(wrapper.find(RefundFlyout).length).toEqual(0);
        wrapper.find('SVG').simulate('click');
        expect(wrapper.find(RefundFlyout).length).toEqual(1);
        wrapper.find('SVG').simulate('click');
        expect(wrapper.find(RefundFlyout).length).toEqual(0);
      });
    });
  });

  describe('Start Offer button', () => {
    test('start offer component renders', () => {
      const wrapper = shallow(<StartOffer />);
      expect(wrapper).toContainMatchingElement('StartOfferButton');
      expect(wrapper).toContainMatchingElement('StartOfferText');
    });
  });
});
