/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';

// React Components
import PaymentInput from './PaymentInput.jsx';
import LegendItem from './LegendItem.jsx';
import CustomizeBar from './CustomizeBar.jsx';

// Styles
import PaymentContainer from './paymentStyles/PaymentContainer.jsx';
import PaymentBar from './paymentStyles/PaymentBar.jsx';
import PaymentBarElement from './paymentStyles/PaymentBarElement.jsx';
import LegendFlex from './paymentStyles/LegendFlex.jsx';
import PaymentHeader from './paymentStyles/PaymentHeader.jsx';
import PaymentHeading from './paymentStyles/PaymentHeading.jsx';

// Helper Functions
import dollarFormat from '../../../helpers/dollarFormat.js';
import lastNonZero from '../../../helpers/lastNonZero.js';

const PaymentCalculator = ({
  updatePrice, price, downPayment, payments, loanType, rate,
}) => {
  // Determine total payment from the array;
  const payment = payments.reduce(((accumulator, currentValue) => accumulator + currentValue), 0);
  const colorScheme = ['#59e0d0', '#77a2d0', '#e69c8a', '#fadd77', '#b0a0d8'];
  const legend = ['Principal and Interest', 'Property Taxes', 'HOA Dues', 'Homeowners\' Insurance', 'Mortgage Insurance'];
  const lastIndex = lastNonZero(payments);

  return (
    <PaymentContainer>
      <PaymentHeader>Payment Calculator</PaymentHeader>
      <PaymentHeading>
        {`${dollarFormat(payment)} per month`}
      </PaymentHeading>
      <CustomizeBar loanType={loanType} rate={rate} />
      <PaymentBar>
        {payments.map((amount, index) => {
          let borderRadius = '0px';
          switch (index) {
            case 0:
              borderRadius = '25px 0px 0px 25px';
              break;
            case lastIndex:
              borderRadius = '0px 25px 25px 0px';
              break;
            default:
              borderRadius = '0px';
              break;
          }
          return (
            <PaymentBarElement
              color={colorScheme[index]}
              width={`${(amount / payment) * 100}%`}
              borderRadius={borderRadius}
            />
          );
        })}
      </PaymentBar>
      <LegendFlex>
        {payments.map((amount, index) => {
          if (amount) {
            return (
              <LegendItem
                amount={amount}
                color={colorScheme[index]}
                legend={legend[index]}
              />
            );
          }
          return null;
        })}
      </LegendFlex>
      <PaymentInput
        price={price}
        updatePrice={updatePrice}
        downPayment={downPayment}
      />
    </PaymentContainer>
  );
};


export default PaymentCalculator;
