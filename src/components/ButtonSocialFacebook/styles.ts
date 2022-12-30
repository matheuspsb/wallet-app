import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
    margin-bottom: 16px;
    margin-left: ${RFValue(10)}px;

    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: ${RFValue(5)}px;
    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);

    background-color: ${({ theme }) => theme.COLORS.BLUE};
`

export const IconFacebook = styled(Fontisto)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
    margin-left: ${RFValue(10)}px;

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
    color: ${({ theme }) => theme.COLORS.WHITE};
`
