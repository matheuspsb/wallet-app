import { View, Text } from 'react-native'
import React from 'react'

import { Container, Title } from './styles'

interface IButtonProps {
    title: string;
    onPress: () => void;
}

export const Button = ({ title, onPress = () => {} }: IButtonProps) => {
    return (
        <Container onPress={onPress}>
            <Text>{title}</Text>
        </Container>
    )
}
