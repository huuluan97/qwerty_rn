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
    Linking
} from "react-native";

/**
 * Lib Javascript
 */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";

/**
 * CSS
 */
import {
    ViewContainer,
    SubContainer
} from './styles'

/**
 * Component Child
 */
import { HeaderDefault } from '../../common/header';
import {
    LeftComponent,
    RightComponent 
} from "./components";

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            isLoading: false, 
            selectedIndex: -1,
            data: null
        };
    }

    componentDidMount() {
        this.getListStaff()
    }

    handleSelected = (item) => {
        this.setState({
            selectedIndex: item.id,
            data: item
        });
    }

    getListStaff = () => {
        return fetch('http://www.mocky.io/v2/5d465003320000280cae8bfd')
            .then((response) => response.json())
            .then((responseJson) => {
               
                this.setState({
                    isLoading: false,
                    item: responseJson
                })
                console.log(this.state)
                return responseJson;
            })
            .catch((error) => {
                this.setState({
                    isLoading: false
                });
                Alert("Thông báo","Vui lòng kiểm tra kết nối mạng");
            });
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
                <HeaderDefault title='Theo dõi Nhân viên' toggleDrawer={this.toggleDrawer}/>
                <SubContainer>
                    <LeftComponent selectedIndex={this.state.selectedIndex} item={this.state.item} handleSelected={this.handleSelected} />
                    <RightComponent data={this.state.data}/>
                </SubContainer>
            </ViewContainer>
        );
    }
}


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



