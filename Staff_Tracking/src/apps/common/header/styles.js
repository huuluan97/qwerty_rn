import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import { scale, verticalScale, moderateScale } from 'scale-master';
import { Header, Icon, Badge, Left } from 'native-base';


export const HeaderContainer = styled(Header)`
    border-width: 0;
    padding-right: 10;
    padding-left: 10;
    flex-direction: row;
    background-color: rgba(73,0,255, 0.8);
`

export const HeaderTitle = styled(Text)`
    font-size: ${props => props.fontSize};
    font-weight: 400;
    color: white;
    align-items: center;
`