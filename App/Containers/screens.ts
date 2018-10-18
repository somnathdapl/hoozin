import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import createStore from '../Redux';

import LoginScreen from './Login/LoginScreen';
import EventMapScreen from './EventMap/EventMapScreen';

const store = createStore();

export const registerScreens = () => {
    Navigation.registerComponentWithRedux('hoozin.Login', () => LoginScreen, Provider, store);
    Navigation.registerComponentWithRedux('hoozin.EventMap', () => EventMapScreen, Provider, store);
}

const appLayout = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: 'hoozin.Login'
                    }
                }
            ]
        }
    }
}

export const layout = appLayout;