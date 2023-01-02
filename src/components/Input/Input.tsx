import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Container, InputContainer } from './styles'

interface InputProps {
    RightIcon?: boolean;
    LeftIcon?: boolean;
}

const Input: React.FC<InputProps> = ({ RightIcon, LeftIcon }) => {
    const { COLORS } = useTheme();

    return (
        <Container>

            {LeftIcon && (
                <Ionicons
                    name="mail-outline"
                    size={20}
                    color={COLORS.TEXTDARK}
                    style={{ padding: 5, marginLeft: 10 }}
                />
            )}

            <InputContainer />

            {RightIcon && (
                <Ionicons
                    name="md-lock-closed-outline"
                    size={20}
                    color={COLORS.TEXTDARK}
                    style={{ padding: 5, marginRight: 10 }}
                />
            )}
        </Container>
    )
}

export default Input
