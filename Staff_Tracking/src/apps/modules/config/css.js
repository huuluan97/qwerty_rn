import styled from 'styled-components/native'
import { View } from 'react-native'
import { scale, verticalScale, moderateScale } from 'scale-master';

export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    height: 50;
    padding-left: 10;
    padding-right: 10;
    shadow-color: hsla(0, 0%, 10%, 0.15);
    shadow-offset: 0px 0px;
    shadow-opacity: 1;
    shadow-radius: 20;
`