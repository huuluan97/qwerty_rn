import React, { Component } from 'react';
import {
    Platform,
    StatusBar,
    TouchableOpacity,
    View,
    TextInput,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { Icon, Badge, Left, Body, Right, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { scale, verticalScale, moderateScale, height, width } from 'scale-master';
import { HeaderContainer, HeaderTitle } from './styles'

export default class HeaderDefault extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            numBadge: 0
        })
    }

    
    render() {
        return (
            <HeaderContainer>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    backgroundColor="transparent"
                    barStyle="light-content"
                />
                <Left
                    style={{
                        flex: 0.1
                    }}
                >
                    <TouchableOpacity onPress={() => this.props.toggleDrawer()}>
                        <Icon name='menu' style={{fontSize: 25, color: '#fff'}} />
                    </TouchableOpacity>
                </Left>
                <Body
                    style={{
                        flex: 0.8
                    }}
                >
                    <HeaderTitle fontSize={scale(14)}>{this.props.title}</HeaderTitle>
                </Body>
                <Right
                    style={{
                        flex: 0.1
                    }}
                ></Right>
            </HeaderContainer>
        );
    }
}

const styles = StyleSheet.create({
    badge: {
        height: 22,
        width: 22,
        backgroundColor: 'red',
        position: "absolute", left: 20,
        zIndex: 9999,
        marginTop: -10,
        padding: 2,
        justifyContent: 'center'
    },
});
