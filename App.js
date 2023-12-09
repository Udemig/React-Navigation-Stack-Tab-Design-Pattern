import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {Provider} from 'react-redux';
import store from './src/store';
import StackNavigator from './src/router/stackNavigator';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva.light}>
          <StackNavigator />
        </ApplicationProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
