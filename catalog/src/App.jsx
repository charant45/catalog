import React from 'react';
import CatalogPlacements from '../src/component/CatalogPlacements';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      marginLeft: '360px'
    }}>
      <h1 style={{ textAlign: 'center' }}>Catalog Placements Solver</h1>
      <CatalogPlacements />
    </div>
  );
}

export default App;
