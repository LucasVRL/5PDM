import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './views/loginView.js';
import SearchScreen from './views/searchView';
import RegisterScreen from './views/registeView.js';
import GarbageDescriptionScreen  from './views/garbageDescriptionView.js';
import ReportListScreen  from './views/reportList.js';

const Stack = createStackNavigator();

const TelaComBotaoVoltar = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>Voltar</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="GarbageDescription" component={GarbageDescriptionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ReportList" component={ReportListScreen} options={{headerShown: false}}/>   
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
