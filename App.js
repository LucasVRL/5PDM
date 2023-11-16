import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './views/loginView.js';
import SearchScreen from './views/searchView';
import RegisterScreen from './views/registeView.js';
import GarbageDescriptionScreen  from './views/garbageDescriptionView.js';

const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="GarbageDescription" component={GarbageDescriptionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
