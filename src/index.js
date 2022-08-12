import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import fruits from './data.json';


class Image extends React.Component {
  render() {
    return (
      <img />
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="fruits">
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);