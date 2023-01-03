import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

export const Container = styled.View`
    padding: ${RFValue(20)}px;
`

export const ContentHeader = styled.View`
    width: 100%;

    align-items: center;
    justify-content: space-between;

    margin-left: -10px;
`
export const ContentBody = styled.View``

export const ViewButton = styled.View`
    flex-direction: row;
`

export const Title = styled.Text`
    margin-top: ${RFValue(40)}px;

    text-align: center;

    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`
export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    margin-bottom: ${RFValue(10)}px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

export const ButtonSingup = styled(Pressable)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const TitleButtonSignUp1 = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};

    color: ${({ theme }) => theme.COLORS.GRAY3};
`

export const TitleButtonSignUp2 = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    font-size: 17px;

    color: ${({ theme }) => theme.COLORS.BLUE};

    margin-left: 10px;
`

export const ContentForgotPassword = styled.View`
    width: 100%;

    padding: 10px;
    margin-top: 8px;

    align-items: flex-end;
    justify-content: flex-end;
`

export const ContentButtonForgotPassword = styled(Pressable)`
    align-items: flex-end;
    justify-content: flex-end;
`

export const ContentTitleForgotPassword = styled.Text`
    align-items: flex-end;

    font-size: 15px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY3};

`
