import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppRoutes from './AppRoutes';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  // console.log(AppRoutes);

  return (
    <Router>
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
