import React from "react";

import { SafeAreaView, Text } from "react-native";

import Input from "../../components/Input_old/index";

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
                        iconName={'mail'}
                        name="email"
                        placeholder="Seu e-mail"
                    />

                </ContentBody>

                <ContentFooter>

                </ContentFooter>

            </Container>
        </SafeAreaView>
    );
}

export { Login };
