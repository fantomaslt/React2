import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Aux, { Props } from './hoc/Aux';

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Layout>
          {' '}
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
