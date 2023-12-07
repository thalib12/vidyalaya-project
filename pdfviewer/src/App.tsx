import React from 'react';
import "./App.css"
import ExtractedPdfs from './pages/ExtractedPdfs';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PdfViewer } from './pages/PdfViewer';
import Homepage from './pages/Homepage';

const App: React.FC = () => {

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={
            <Homepage />
          } />
          <Route path='/all-extracted-pdfs/:id' element={
            <ExtractedPdfs />
          } />
          <Route path='/pdf-view/:id' element={
            <PdfViewer />
          } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
