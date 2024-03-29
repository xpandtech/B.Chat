import React, { useState } from 'react';

function InputTextWithClearButton() {
  const [state1, setState1] = useState('');
  const [state2, setState2] = useState('');
  const [state3, setState3] = useState('');

  const handleClearText = (e, setStateFunction) => {
    e.preventDefault();
    setStateFunction('');
  };

  return (
    <div className="customer-info">
      <form>
        <div className="fieldset">
          <input
            type="search"
            name="state1"
            className="form-text"
            placeholder="Customer Name"
            value={state1}
            onChange={(e) => setState1(e.target.value)}
          />
        </div>
        <div className="fieldset">
          <input
            type="search"
            name="state2"
            className="form-text"
            placeholder="Company"
            value={state2}
            onChange={(e) => setState2(e.target.value)}
          />
        </div>
        <div className="fieldset">
          <input
            type="search"
            name="state3"
            className="form-text"
            placeholder="Email"
            value={state3}
            onChange={(e) => setState3(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default InputTextWithClearButton;
