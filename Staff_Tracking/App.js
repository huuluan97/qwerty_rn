import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar
} from 'react-native'
import {
    Header
} from 'native-base'

import configureStore from './src/apps/controller';
import { scale, verticalScale, moderateScale } from 'scale-master';

import { HeaderDefault } from './src/apps/common/header'
import  RootNavigation  from './src/apps/routes'

export default class App extends Component {
    render() {
        return (
            <Provider store={configureStore}>
                <RootNavigation />
            </Provider>
        );
    }
}

