import React, { useState } from "react";

import { SafeAreaView, Text } from "react-native";
import { useTheme } from "styled-components/native";

import Input from '../../components/Input/Input'
import { Button } from '../../components/Button'
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
    ButtonSingup,
    TitleButtonSignUp1,
    TitleButtonSignUp2,
    ContentForgotPassword,
    ContentButtonForgotPassword,
    ContentTitleForgotPassword,
} from './styles'


const Login: React.FC = () => {

    const { COLORS } = useTheme();

    const [loading, setLoading] = useState(false)

    function onPressButton() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

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
                        iconSize={20}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={false}
                        iconName='mail-outline'
                        keyboardType="email-address"
                        placeholder="Digite seu e-mail"
                    />
                    <Input
                        LeftIcon
                        RightIcon
                        iconSize={20}
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                        iconName='lock-closed-outline'
                        placeholder="Digite sua senha"
                    />

                    <ContentForgotPassword>
                        <ContentButtonForgotPassword onPress={() => {}}>
                            <ContentTitleForgotPassword>Recuperar Senha</ContentTitleForgotPassword>
                        </ContentButtonForgotPassword>
                    </ContentForgotPassword>

                    <Button
                        title='Entrar'
                        variant="primary"
                        onPress={onPressButton}
                        style={{ marginBottom: 20 }}
                    />

                </ContentBody>

                <ContentFooter>
                    <ButtonSingup onPress={() => {}}>
                        <TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
                        <TitleButtonSignUp2>Cadastre-se</TitleButtonSignUp2>
                    </ButtonSingup>
                </ContentFooter>

            </Container>
        </SafeAreaView>
    );
}

export { Login };
