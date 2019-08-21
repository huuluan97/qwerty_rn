import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import { scale, verticalScale, moderateScale } from 'scale-master';
import { Header, Icon, Badge } from 'native-base';


export const ViewContainer = styled(View)`
    flex: 1
`

export const SubContainer = styled(View)`
    flex: 1;
    flex-direction: row;
`

export const ContainerButton = styled(View)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 10;
    padding-bottom: 10;
    height: 80px;
`

export const ButtonCheckIn = styled(View)`
    padding-top: 10;
    padding-bottom: 10;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: #f24;
    border-radius: 20px;
    width: 200px;
    shadow-opacity: 0.75;
    shadow-color: red;
    shadow-offset: 0px 0px;
    width: 120px;
`

export const TitleButton = styled(Text)`
    font-size: 16px;
    color: black;
`