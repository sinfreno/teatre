import React from 'react';
import Romeo from './Romeo.json';


class App extends React.Component {
    
  render() {
    return <div>
      {Romeo.map((item, index) => {
        return (
          <div>
            <p>{item}</p>
          </div>
        );
      })}
  </div>
  }
}

export default App;
