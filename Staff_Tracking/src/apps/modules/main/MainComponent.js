/**
 * React Component
 */
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    PermissionsAndroid,
    Platform,
    Alert,
    FlatList,
    BackHandler,
    PushNotificationIOS,
    Linking,
    Dimensions,
    Image
} from "react-native";

/**
 * Lib Javascript
 */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import MapView, { Marker, Callout, ProviderPropType } from 'react-native-maps';

/**
 * CSS
 */
import {
    ViewContainer,
    SubContainer,
    ContainerButton,
    ButtonCheckIn,
    TitleButton
} from './styles'

/**
 * Component Child
 */
import { HeaderDefault } from '../../common/header';
import Geolocation from 'react-native-geolocation-service';
const { width, height } = Dimensions.get('window');

import logoHeinKen from 'images/logoKen.jpg';


export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feature: [
                {
                    id: 1,
                    title: 'Điểm danh'
                },
                {
                    id: 2,
                    title: 'Báo cáo'
                },
                {
                    id: 3,
                    title: 'Đồng bộ'
                },
                {
                    id: 4,
                    title: 'Thống kê'
                },
                {
                    id: 5,
                    title: 'Tuỳ chỉnh'
                },
                {
                    id: 6,
                    title: 'Cài đặt'
                }
            ]
        };
    }

    componentDidMount() {
        this.renderSelect()
    }

    renderSelect = () => {
        
    }


    alertMessage = (title) => {
        Alert.alert(
            '',
            title,
            [
                {
                    text: 'OK', onPress: () => { return }
                },
            ],
            { cancelable: false }
        )
    }

    toggleDrawer = () => {
        this.props.navigation.toggleDrawer()
    }

    render() {
        return (
            <ViewContainer>
                <HeaderDefault title='Tuỳ Chọn' toggleDrawer={this.toggleDrawer} />
                <SubContainer>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={logoHeinKen} style={{width: 300, height: 150}} resizeMode={'stretch'} />
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        backgroundColor: 'white'
                    }}
                >
                    {
                        this.state.feature.map((item, index) => {
                            return (
                                <TouchableOpacity key={index.toString()}>
                                    <View
                                        style={styles.buttonSelect}
                                    >
                                        <Text  style={styles.title}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </SubContainer>  
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    buttonSelect: {
        height: width / 3 - 50,
        width: width / 3 - 50,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowRadius: 8.30,
        elevation: 13,
        borderWidth: 0.5,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: '400'
    }
});

// const mapStateToProps = state => {
// 	return {
		
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onDelete: () => {
// 			dispatch(deleteCustomers());
// 		},
// 		onSetGroup: group_id => {
// 			dispatch(setGroup(group_id));
// 		}
// 	};
// };



