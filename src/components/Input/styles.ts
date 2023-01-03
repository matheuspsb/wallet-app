import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 10px;

    width: 100%;
    height: 60px;

    padding: 0 12px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.GRAY5};
`

export const InputContainer = styled.TextInput`
    flex: 1;

    height: 50px;

    border: 0;
    border-radius: 8px;

    font-size: 14px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`
