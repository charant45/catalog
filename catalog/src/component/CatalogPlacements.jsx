import React, { useState, useEffect } from 'react'
import TestCase from './TestCase'
import { solvePolynomial } from '../utils/polynomial'

export default function CatalogPlacements() {
  const [testCase1, setTestCase1] = useState(null)
  const [testCase2, setTestCase2] = useState(null)
  const [results, setResults] = useState({ case1: '', case2: '' })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/testCase1.json').then(response => response.json()),
      fetch('/testCase2.json').then(response => response.json())
    ]).then(([data1, data2]) => {
      setTestCase1(data1)
      setTestCase2(data2)
      setIsLoading(false)
    }).catch(error => {
      console.error('Error loading test cases:', error)
      setIsLoading(false)
    })
  }, [])

  const handleSolve = () => {
    if (testCase1 && testCase2) {
      const result1 = solvePolynomial(testCase1)
      const result2 = solvePolynomial(testCase2)
      setResults({ case1: result1, case2: result2 })
    }
  }

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' , marginLeft: '60px'}}>
      <h1 style={{ textAlign: 'center', color: '#4A4A4A' }}>Catalog Placements</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', flexWrap: 'wrap'}}>
      <div style={{ flex: '1 1 45%', minWidth: '300px', maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <TestCase data={testCase1} title="Test Case 1" />
      </div>
      <div style={{ flex: '1 1 45%', minWidth: '300px', maxHeight: '500px', overflowY: 'auto', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <TestCase data={testCase2} title="Test Case 2" />
      </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <button 
          onClick={handleSolve} 
          style={{
            padding: '12px 20px', 
            backgroundColor: '#007BFF', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontSize: '16px'
          }}
        >
          Solve Both Test Cases
        </button>
      </div>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', color:'#000000' }}>
        <h2>Results:</h2>
        <p><strong>Test Case 1 Secret:</strong> {results.case1 || 'Not solved yet'}</p>
        <p><strong>Test Case 2 Secret:</strong> {results.case2 || 'Not solved yet'}</p>
      </div>
    </div>
  )
}
