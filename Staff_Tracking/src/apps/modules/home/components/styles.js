import styled from 'styled-components/native'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { scale, verticalScale, moderateScale } from 'scale-master';
import { Header, Icon, Badge } from 'native-base';


export const LeftView = styled(View)`
    flex: 4;
    background-color: white
`

export const ListStaff = styled(View)`
    flex:  2;
`

export const ListDetail = styled(View)`
    flex: 1;
`

export const TitleLeft = styled(View)`
    height: 30;
    width: 100%;
    background-color: whitesmoke;
    justify-content: center;
    align-items: center;
`
export const TextTitleLeft = styled(Text)`
    font-size: 16px;
    font-weight: 600;
    color: #95A0AA;
`

export const ScrollListStaff = styled(FlatList)`
    flex: 1;
`


export const RightView = styled(View)`
    flex: 7;
    background-color: blue
`
