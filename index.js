import { AppRegistry } from 'react-native';
import App from './App';
import codePush from 'react-native-code-push'

// 
console.ignoredYellowBox = ['Remote debugger'];


AppRegistry.registerComponent('NextApp', () => App);
// 解决codePush 回滚问题
// AppRegistry.registerComponent('NextApp', () => codePush(App));
