
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ReduxProvider } from './app/providers/ReduxProvider';
import { RootNavigator } from './app/navigation/RootNavigator';

export default function App() {
  return (
    <ReduxProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ReduxProvider>
  );
}
