// InputShortener.js

import React from 'react';
import './InputShortener.css';

const InputShortener = () => {
  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a long link"
          className="long-url"
        /><br></br>
        <input
          type="text"
          placeholder="Enter Random alphanumeric"
          className="back-half"
        />
        <button>shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
