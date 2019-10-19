import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home/index';
import RegisterScreen from './Register/index';
import LoginScreen from './Login/index';

const MainNavigator = createStackNavigator({
  // Home: {screen: HomeScreen},
  Register: {screen: RegisterScreen},
  Login: {screen: LoginScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
// import Register from './Register/Register';
