import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>
        Sorry, the page you are looking for might be in another universe 😅
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: '5em',
    color: '#e74c3c',
    margin: 0,
  },
  text: {
    fontSize: '1.2em',
    color: '#333',
    margin: '20px 0',
  },
  
};

export default NotFound;
