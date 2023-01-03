import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity).attrs({

})`
    width: 100%;
    height: 50px;

    align-items: center;
    justify-content: center;

    border-radius: ${RFValue(8)}px;

    margin-top: ${RFValue(15)}px;

    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};

    color: ${({ theme }) => theme.COLORS.BACKGROUNDDARK};
`
