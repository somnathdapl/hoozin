import {Navigation} from 'react-native-navigation';
import {registerScreens, layout} from './App/Containers/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(layout);
});