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
import Geolocation from 'react-native-geolocation-service';

/**
 * CSS
 */
import logoHeinKen from 'images/logoKen.jpg';


const { width, height } = Dimensions.get('window');

import MapView, { Marker, Callout, ProviderPropType } from 'react-native-maps';
import flagImg from 'images/flag-blue.png';


const ASPECT_RATIO = width / height;
const LATITUDE = 10.780889;
const LONGITUDE = 106.629271;
const LATITUDE_DELTA = 0.003;
const LONGITUDE_DELTA = 0.003;
const SPACE = 0.01;


import {
    RightView,
    TitleLeft,
    TextTitleLeft
} from './styles'

export default class RightComponent extends Component {
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.data) {
            //this.state.region.latitude = nextProps.data.lat;
            //this.state.region.longitude = nextProps.data.lng;
            this.setState({
                region: {
                    latitude: parseFloat(nextProps.data.lat),
                    longitude: parseFloat(nextProps.data.lng),
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                },
            })
        }  
    }

    componentDidMount() {
        // Instead of navigator.geolocation, just use Geolocation.
       
        Geolocation.getCurrentPosition(
            position => {
                this.setState({
                    initialPosition : position
                }, () => {
                    console.log(this.state.initialPosition)
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

    renderMarkers = () => {
        
    }
 
    render() {
        const maps = [];
        // for (let i = 0; i < 10; i++) {
        //     maps.push(
        //         <MapView
        //             liteMode
        //             key={`map_${i}`}
        //             style={styles.map}
        //             initialRegion={SAMPLE_REGION}
        //         />
        //     );
        // }
        return (
            <RightView>
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
                        {/* {
                            this.state.markers.map((marker, index) =>  {
                                return(
                                    <Marker 
                                        coordinate={marker.coordinates}
                                        title={marker.title}
                                        key={index.toString()}
                                    />
                                )
                            })
                        } */}
                    {/* <Marker
                        coordinate={{
                            latitude: LATITUDE,
                            longitude: LONGITUDE,
                        }}
                        centerOffset={{ x: -18, y: -60 }}
                        anchor={{ x: 0.69, y: 1 }}
                        image={flagImg}
                    /> */}
                    {/* <Marker
                        coordinate={{
                        latitude: LATITUDE - SPACE,
                        longitude: LONGITUDE - SPACE,
                        }}
                        centerOffset={{ x: -42, y: -60 }}
                        anchor={{ x: 0.84, y: 1 }}
                    >
                        <Callout>
                        <View>
                            <Text>This is a plain view</Text>
                        </View>
                        </Callout>
                    </Marker> */}
                    </MapView>
            </RightView>
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



