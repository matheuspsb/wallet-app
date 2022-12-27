import React from "react";

import { SafeAreaView, Text } from "react-native";

import { ButtonSocial } from "../../components/ButtonSocial";
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

                        <ButtonSocial title="Google" />

                        <ButtonSocial title="Google" />

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
