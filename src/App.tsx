import React from 'react';
import Routes from './routes';
import './styles/settings/colors.css';
import './styles/reset.css';
import './styles/global.css';


class App extends React.Component {
  constructor(props: any) {
    super(props);

    document.addEventListener('readystatechange', event => {
      console.log(document.readyState);
    });
  }

  render() {
    return (
      
        <Routes />
 

    );
  }
}

export default App;




