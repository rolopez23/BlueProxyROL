/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

import Ad from './Ad.jsx';
import Slider from './slider/Slider.jsx';
import SliderBox from './slider/SliderBox.jsx';
import LoanInput from './input/LoanInput.jsx';

// styled components
import AdListContainer from './AdStyles/AdListContainer.jsx';
import TitleBar from './AdStyles/TitleBar.jsx';

// @autobind
class AdList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanType: '30 Year Fixed',
      selectedCard: null,
      showLoan: false,
    };
    this.cardClick = this.cardClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.toggleLoanType = this.toggleLoanType.bind(this);
  }


  cardClick(card) {
    // console.log(card);
    this.setState({
      selectedCard: card,
    });
  }

  handleSelect(select) {
    // console.log(select);
    const { loanTypeChange } = this.props;
    this.setState({
      loanType: select,
    });
    loanTypeChange(select);
  }

  toggleLoanType() {
    const { showLoan } = this.state;
    this.setState({
      showLoan: !showLoan,
    });
  }

  sendInfo() {
    console.log('sending information')
  }

  render() {
    const { ads, rateChange } = this.props;
    const { loanType, selectedCard, showLoan } = this.state;
    const renderLoans = ads.filter((ad) => (ad.type === loanType));
    return (
      <AdListContainer>
        <TitleBar onClick={this.toggleLoanType}>
          <div>Today's Rates for this home</div>
          <div>
            {loanType}
            {showLoan ? (
              <svg height="25" viewBox="0 0 48 48" width="25" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z" />
                <path d="M0 0h48v48h-48z" fill="none" />
              </svg>
            ) : (
              <svg height="25" viewBox="0 0 48 48" width="25" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
                <path d="M0-.75h48v48h-48z" fill="none" color="blue" />
              </svg>
            )}
          </div>
        </TitleBar>
        { showLoan ? (
          <div>
            <LoanInput
              select={this.handleSelect}
            />
          </div>
        ) : null}
        <div>
          <Slider>
            {renderLoans.map((ad) => (
              <SliderBox>
                <Ad
                  key={ad._id}
                  id={ad._id}
                  seller={ad.seller}
                  NMLS={ad.NMLS}
                  APR={ad.APR}
                  interestRate={ad.interestRate}
                  selectedCard={selectedCard}
                  click={this.cardClick}
                  send={this.sendInfo}
                  rateChange={rateChange}
                />
              </SliderBox>
            ))}
          </Slider>
        </div>
      </AdListContainer>
    );
  }
}


export default AdList;
