/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Styled from 'styled-components';

// Other Components
import StyledContactButton from './ContactButton.jsx';

// Styles
import BankRateCard from './AdStyles/BankRateCard.jsx';
import LenderInfo from './AdStyles/LenderInfo.jsx';
import InterestRate from './AdStyles/InterestRate.jsx';
import Bold from './AdStyles/Bold.jsx';
import Seller from './AdStyles/Seller.jsx';
import APRStyle from './AdStyles/APR.jsx';


const Ad = ({
  id, seller, APR, NMLS, interestRate, selectedCard, click, send, rateChange,
}) => {
  const toggled = id === selectedCard;
  const clickFunction = (value) => {
    if (!toggled) {
      rateChange(APR);
      return click(value);
    }
    rateChange(3.5);
    return click(null);
  };

  // console.log(id, selectedCard, toggled);
  return (
    <BankRateCard height={toggled ? '110px' : '80px'}>
      <LenderInfo onClick={() => clickFunction(id)}>
        <div>
          <InterestRate>
            <Bold>{interestRate}</Bold>
            %
          </InterestRate>
          Interest Rate
        </div>
        <div>
          <APRStyle>
            <Bold>{APR}</Bold>
            %
          </APRStyle>
          {`APR as of ${`${new Date().getMonth() + 1}/${new Date().getDate()}`}`}
        </div>
        <div id='NMLS'>
          <Seller><Bold>{seller}</Bold></Seller>
          {`NMLS #  ${NMLS}`}
        </div>
      </LenderInfo>
      {toggled ? <StyledContactButton send={send} /> : null}
    </BankRateCard>
  );
};


export default Ad;
