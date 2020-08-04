import React from 'react';
import Routes from './routes';

class App extends React.Component {

  constructor(props: any) {
    super(props);
    document.addEventListener('readystatechange', event => {
      console.log(document.readyState);
    });
  }
  
  

  render() {
    return (
      <>
        <Routes />
      </>
    );
  }

}

export default App;
