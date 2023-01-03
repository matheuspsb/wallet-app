import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { TextInputProps, TouchableOpacity } from 'react-native'

import { Container, InputContainer } from './styles'

interface InputProps {
    RightIcon?: boolean;
    LeftIcon?: boolean;
    iconName?: any;
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
}

const Input: React.FC<InputProps & TextInputProps> = ({
    RightIcon,
    LeftIcon,
    iconName,
    iconSize,
    iconColor,
    secureTextEntry,
    ...rest
}) => {

    const { COLORS } = useTheme();

    const [secury, setSecury] = useState(secureTextEntry)

    return (
        <Container>

            {LeftIcon && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.GRAY2}
                    style={{ padding: 5 }}
                />
            )}

            <InputContainer
                {...rest}
                secureTextEntry={secury}
                underlineColorAndroid='transparent'
                placeholderTextColor={COLORS.GRAY3}
            />

            {RightIcon && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <Icon
                        name={secury ? 'eye' : 'eye-off'}
                        size={iconSize}
                        color={iconColor || COLORS.GRAY2}
                        style={{ padding: 5 }}
                    />
                </TouchableOpacity>
            )}

        </Container>
    )
}

export default Input
