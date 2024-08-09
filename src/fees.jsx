import React from 'react';

function MyComponent() {
  // Define CSS styles as JavaScript objects
  const containerStyles = {
    textAlign: 'center',     // Center align the content
    padding: '100px 0',       // Add padding instead of margin
    clear: 'both',           // Clear any floated elements
    backgroundColor: 'grey',
  };

  const anchorStyles = {
    display: 'block',       // Make anchor tags block-level elements
    margin: '10px 0',       // Add vertical spacing between anchor tags
  };

  return (
    <div style={containerStyles}>
      <h2>Fees Structure</h2>
      <a style={anchorStyles} href="https://example.com">Visit Example</a>
      <a style={anchorStyles} href="https://reactjs.org">Visit React</a>
    </div>
  );
}

export default MyComponent;
