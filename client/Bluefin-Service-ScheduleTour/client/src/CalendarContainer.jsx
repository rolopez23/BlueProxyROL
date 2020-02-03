/* eslint-disable react/prop-types */
import React from 'react';
import CalendarEntry from './CalendarEntry';
import {
  Wrapper, EntryWrapper, NextButton, PrevButton,
} from './styles/CalendarContainer-style';


export default class CalendarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStart: 0,
      prevButton: false,
      nextButton: true,
      refs: null,
    };
    this.prevHandleClick = this.prevHandleClick.bind(this);
    this.nextHandleClick = this.nextHandleClick.bind(this);
  }
  // these methods allow for button scrolling;


  componentDidMount() {
    const { dates } = this.props;
    const refs = dates.reduce((acc, value) => {
      acc[value.id] = React.createRef();
      return acc;
    }, {});
    this.setState({
      refs,
    });
  }

  prevHandleClick() {
    const { currentStart, nextButton, refs } = this.state;
    this.setState({ currentStart: currentStart - 3 }, () => {
      // have to reset the currentstart variable
      // eslint-disable-next-line
      const { currentStart } = this.state;
      if (!nextButton) {
        this.setState({ nextButton: true });
      }
      refs[currentStart].current.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
      });
      if (!currentStart) {
        this.setState({ prevButton: false });
      }
    });
  }

  nextHandleClick() {
    const { currentStart, prevButton, refs } = this.state;
    this.setState({ currentStart: currentStart + 3 }, () => {
      // have to reset the currentstart variable
      // eslint-disable-next-line
      const { currentStart } = this.state;
      if (!prevButton) {
        this.setState({ prevButton: true });
      }
      if (currentStart === 9) {
        this.setState({ nextButton: false });
      }
      refs[currentStart].current.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
      });
    });
  }

  render() {
    const { dates, clickFn, selectedDate } = this.props;
    const { prevButton, nextButton, refs } = this.state;
    return (
      <Wrapper>
        <EntryWrapper>
          {dates.map((date) => {
            // logic:there cant be the same day number in two weeks.
            // So comparing only the day would suffice
            let selected = false;
            if (selectedDate && selectedDate.dayOfMonth === date.dayOfMonth) {
              selected = true;
            }
            return (
              <>
                <span>
                  <CalendarEntry
                    refs={refs ? refs[date.id] : null}
                    key={date}
                    date={{
                      dayOfWeek: date.dayOfWeek,
                      month: date.month,
                      dayOfMonth: date.dayOfMonth,
                    }}
                    clickFn={clickFn}
                    selected={selected}
                  />
                </span>
              </>
            );
          })}
        </EntryWrapper>
        { prevButton
          ? (
            <PrevButton onClick={() => this.prevHandleClick()}>
              <svg viewBox="-13 -20 32 42" fill="#777" transform="rotate(180)">
                <path d="M1.214 11.921L.079 10.786a.268.268 0 0 1 0-.379L4.486 6 .079 1.593a.268.268 0 0 1 0-.38L1.214.08a.268.268 0 0 1 .379 0L7.325 5.81a.268.268 0 0 1 0 .38L1.593 11.92a.268.268 0 0 1-.38 0" fillRule="evenodd" />
              </svg>
            </PrevButton>
          )
          : <></>}
        { nextButton
          ? (
            <NextButton
              left={prevButton ? '245px' : '279px'}
              onClick={() => this.nextHandleClick()}
            >
              <svg viewBox="-12 -10 32 42" fill="#777">
                <path d="M1.214 11.921L.079 10.786a.268.268 0 0 1 0-.379L4.486 6 .079 1.593a.268.268 0 0 1 0-.38L1.214.08a.268.268 0 0 1 .379 0L7.325 5.81a.268.268 0 0 1 0 .38L1.593 11.92a.268.268 0 0 1-.38 0" fillRule="evenodd" />
              </svg>
            </NextButton>
          )
          : <></>}
      </Wrapper>
    );
  }
}
