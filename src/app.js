import React from 'react';
import { View } form 'react-navtive';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <View>App</View>
    </Provider>
  )
}
export default App;
