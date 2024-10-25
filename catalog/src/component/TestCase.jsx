import React from 'react';

const TestCase = ({ data, title }) => {
  if (!data) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
        color: '#888',
        fontSize: '16px'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{
      flex: '1 1 45%',
      minWidth: '300px',
      backgroundColor: '#f9f9f9',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
    }}>
      <h3 style={{
        margin: '0 0 10px',
        color: '#333',
        fontSize: '18px',
        textAlign: 'center'
      }}>{title}</h3>
      <pre style={{
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
        color: '#444',
        fontSize: '14px'
      }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default TestCase;
