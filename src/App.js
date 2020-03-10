import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PDFViewer} from "@react-pdf/renderer";
import {MyDocument} from "./components/MyDocument";

function App() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
}

export default App;
