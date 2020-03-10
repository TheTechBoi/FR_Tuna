import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import BespokeScreen from './src/screens/BespokeScreen';
import RequestsScreen from './src/screens/RequestsScreen';
import FriendsScreen from './src/screens/FriendsScreen';

const AppStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Bespoke: BespokeScreen,
  Requests: RequestsScreen,
  Friends: FriendsScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  
})
const navigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName:'Home'
  });


export default createAppContainer(navigator);


