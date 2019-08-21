import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import getSlideFromRightTransitionConfig from '../utilities/transition-config';
import { HomeComponent } from '../modules/home'
import { AttendanceComponent } from '../modules/staff'
import { MainComponent } from '../modules/main'

const RootNavigator = createDrawerNavigator({
    Main: {
        screen: MainComponent,
        navigationOptions: {
            gesturesEnabled: false,
            title: 'Trang Chủ'
        },
    },
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            gesturesEnabled: false,
            title: 'Quản lý Nhân viên'
        },
    },
    Attendance: {
        screen: AttendanceComponent,
        navigationOptions: {
            gesturesEnabled: false,
            title: 'Điểm danh'
        }
    },
},{
    initialRouteName: 'Main',
    headerMode: 'none',
    mode: 'modal',
    transitionConfig: getSlideFromRightTransitionConfig,
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
});

export default RootNavigator;