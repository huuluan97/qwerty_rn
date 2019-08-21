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
import { Container, Header, Content, Accordion } from "native-base";
/**
 * CSS
 */
import {
    LeftView,
    TitleLeft,
    TextTitleLeft,
    ListStaff,
    ListDetail,
    ScrollListStaff
} from './styles'


/**
 * Component
 */
import ItemStaff from '../items/ItemStaff';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Four Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Five Element", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." }

];

export default class LeftComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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

 
    render() {
        return (
            <LeftView>
                <ListStaff>
                    <TitleLeft>
                        <TextTitleLeft>
                            Danh sách Nhân viên
                        </TextTitleLeft>
                    </TitleLeft>
                    <ScrollListStaff
                        showsVerticalScrollIndicator={false}
                        //refreshing={refreshing}
                        //onRefresh={this.handleRefresh}
                        
                        onEndReachedThreshold={0.5}
                        //onEndReached={this.onEndReached}
                        //ListFooterComponent={this.renderFooter}
                        //onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false }}

                        keyExtractor={(item, index) => index.toString()}
                        data={this.props.item}
                        renderItem={({ item, index }) => {
                            return (
                                <ItemStaff 
                                    selectedIndex={this.props.selectedIndex}
                                    key={index.toString()}
                                    item={item} 
                                    handleSelected={this.props.handleSelected}
                                />
                            )
                        }}>
                    >
                    </ScrollListStaff>
                </ListStaff>
                <ListDetail>
                    <Accordion dataArray={dataArray} expanded={0}/>
                </ListDetail>
            </LeftView>
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



