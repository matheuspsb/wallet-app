import React from "react";

import { SafeAreaView, Text } from "react-native";

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

                        <ButtonSocialFacebook title="Facebook" />

                    </ViewButton>

                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>

            </Container>
        </SafeAreaView>
    );
}

export { Login };
