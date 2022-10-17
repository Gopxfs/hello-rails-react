import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessagesPage from './pages/Messages';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MessagesPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
