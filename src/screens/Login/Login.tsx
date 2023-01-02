import React from "react";

import { SafeAreaView, Text } from "react-native";
import { useTheme } from "styled-components/native";

import Input from '../../components/Input/Input'
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocial";
import { ButtonSocialFacebook } from "../../components/ButtonSocialFacebook/ButtonSocialFacebook"
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from './styles'


const Login: React.FC = () => {

    const { COLORS } = useTheme();

    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>

                    <Title>Seja bem vindo(a) {"\n"} a Wallet App</Title>

                    <Description>Entrar com rede sociais</Description>

                    <ViewButton>

                        <ButtonSocialGoogle title="Google" />

                        <ButtonSocialFacebook title="Facebook" iconName="facebook" />

                    </ViewButton>

                </ContentHeader>

                <ContentBody>
                    <Input
                        LeftIcon
                        iconSize={25}
                        iconName='mail-outline'
                        iconColor={COLORS.TEXTDARK}
                        placeholder="Digite seu e-mail"
                    />
                    <Input
                        LeftIcon
                        RightIcon
                        iconName='lock-closed-outline'
                        placeholder="Digite sua senha"
                    />

                </ContentBody>

                <ContentFooter>

                </ContentFooter>

            </Container>
        </SafeAreaView>
    );
}

export { Login };
