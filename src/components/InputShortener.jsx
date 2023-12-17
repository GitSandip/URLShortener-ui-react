import React, { useState } from 'react';
import './InputShortener.css';
import postLink from '../service/api.js';

const InputShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [backHalf, setBackHalf] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShortenClick = async () => {
    const data = {
      long_url: longUrl,
      back_half: backHalf,
    };

    try {
      const response = await postLink(data);
      console.error("response from axios....",response);
      setShortUrl(response);
      setLongUrl('');
      setBackHalf('');
      
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleCopyClick = () => {
    // Copy the short URL to the clipboard
    navigator.clipboard.writeText(shortUrl);
    // Optionally, provide some user feedback (e.g., tooltip, notification)
    alert('Short URL copied to clipboard!');
  };

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
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        /><br></br>
        <input
          type="text"
          placeholder="Enter Random alphanumeric"
          className="back-half"
          value={backHalf}
          onChange={(e) => setBackHalf(e.target.value)}
        />
        <button onClick={handleShortenClick}>shorten</button>
      </div>
      {shortUrl && (
        <div className="short-url-container">
          <p>Short URL: {shortUrl}</p>
          <button onClick={handleCopyClick}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default InputShortener;
