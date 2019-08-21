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
    Dimensions
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

const ASPECT_RATIO = width / height;
const LATITUDE = 10.780889;
const LONGITUDE = 106.629271;
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = 0.003;
const SPACE = 0.01;

export default class AttendanceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialPosition: null,
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [{
                    title: 'hello',
                    coordinates: {
                    latitude: 10.780889,
                    longitude: 106.629271
                    },
                },
                {
                    title: 'hi',
                    coordinates: {
                    latitude: 10.7817997,
                    longitude: 106.6293762
                },  
              }]
        };
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    },
                });
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
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
                <HeaderDefault title='Điểm danh' toggleDrawer={this.toggleDrawer} />
                <SubContainer>
                <MapView
                    region={this.state.region}
                    provider={this.props.provider}
                    style={styles.map}
                    initialRegion={this.state.region}
                    onPress={this.onMapPress}
                    loadingEnabled
                    loadingIndicatorColor="#666666"
                    loadingBackgroundColor="#eeeeee"
                    showsUserLocation={true}
                    followUserLocation={true}
                    loadingEnabled={true}
                    zoomEnabled={true}
                    zoomTapEnabled={true}
                    zoomControlEnabled={true}
                >
                    <Marker 
                        coordinate={{
                            latitude: this.state.region.latitude,
                            longitude: this.state.region.longitude,
                        }}
                        centerOffset={{ x: -18, y: -60 }}
                        anchor={{ x: 0.69, y: 1 }}
                    />
                </MapView>
                </SubContainer>
                <ContainerButton>
                    <TouchableOpacity>
                        <ButtonCheckIn>
                            <TitleButton>Điểm danh</TitleButton>
                        </ButtonCheckIn>
                    </TouchableOpacity>
                </ContainerButton>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
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



