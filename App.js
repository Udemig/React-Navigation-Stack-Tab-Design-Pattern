import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigatior from './src/router/tabNavigators';


function App() {
  return (
    <NavigationContainer>
      <TabNavigatior/>
      {/* <StackNavigator/> */}
    </NavigationContainer>
  );
}

export default App;
