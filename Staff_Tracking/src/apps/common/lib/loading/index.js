import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
// import BallIndicator from './BallIndicator'

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.loadDataView}>
                <View style={styles.indicatorView}>
                    <ActivityIndicator color='white' size='large'></ActivityIndicator>
                    {/* <BallIndicator color='white' size={32}></BallIndicator> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loadDataView: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // opacity: 0.7,
        backgroundColor: 'transparent'
    },
    indicatorView: {
        width: 80,
        height: 80,
        opacity: 0.7,
        borderRadius: 8,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }
})