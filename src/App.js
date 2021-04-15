import React from 'react';
import Romeo from './Romeo.json';
import styled from "styled-components";

// Styled component phrase
const StyledPhrase = styled.div`
  font-size: 18px;
  color: #123456;
  font-style:italic;
  margin-left: 15px;
`;


class App extends React.Component {
    
  render() {
    return <div>
      {Romeo.map((item, index) => {
        return (
          <div>
            <StyledPhrase>{item}</StyledPhrase>
          </div>
        );
      })}
  </div>
  }
}

export default App;
