import styled from 'styled-components/native'
import { View, Text, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale } from 'scale-master';
import { Header, Icon, Badge, Left, Right } from 'native-base';


export const ItemPerson = styled(View)`
    padding-left: 10;
    padding-right: 10;
    padding-top: 15;
    padding-bottom: 15;
    justify-content: space-between;
    flex-direction: row;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
    background-color: #fff;
`
export const NameStaff = styled(Text)`
    font-size: 22px;
`

export const ItemChoice = styled(View)`
        height: 24;
        width: 24;
        border-radius: 12;
        border-width: 1;
        border-top-color: #f24;
        align-items: center;
        justify-content: center;
`
export const CircleSelect = styled(View)`
    height: 10;
    width: 10;
    border-radius: 5;
    align-items: center;
    justify-content: center;
    background-color: #f24;
`


