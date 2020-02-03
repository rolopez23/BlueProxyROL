import React from 'react';
import { CustomSelect, HiddenSelect } from './CustomSelect.jsx';
import InputGrid from './InputGrid.jsx'

const LoanInput = ( { select }) => (
<InputGrid>
  <div>Loan Type</div>
  <CustomSelect>
    <HiddenSelect id="loanType" onChange={()=> select(event.target.value)}>
      <option value="30 Year Fixed">30 Year Fixed</option>
      <option value="15 Year Fixed">15 Year Fixed</option>
      <option value = "5/1 Arm">5/1 Arm</option>
    </HiddenSelect>
  </CustomSelect>
</InputGrid>
);

export default LoanInput;
