
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ReduxProvider } from './providers/ReduxProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { RootNavigator } from './navigation/RootNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default App;
