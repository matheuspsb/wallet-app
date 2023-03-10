import React from 'react'
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { variants } from './variants';
import { Container, Title, Content } from './styles'

interface IButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'outline' | 'black' | 'transparent';
    style?: TouchableOpacityProps['style'];
}

export const Button: React.FC<IButtonProps> = ({
    title,
    onPress = () => { },
    isLoading,
    iconName,
    disabled,
    variant = 'primary',
    style,
}) => {
    const { COLORS } = useTheme();
    const buttonVariant = variants[variant];
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled

    return (
        <Container
            onPress={onPress}
            disabled={isLoading || disabled}
            style={[buttonStyle.button, style]}

        >
            {isLoading ? (
                <ActivityIndicator color={buttonStyle.icon.color} />
            ) : (
                <Content>
                    {iconName && (
                        <AntDesign
                            name={iconName}
                            size={25}
                            color={buttonStyle.icon.color}
                            style={{
                                marginRight: 15,
                            }}
                        />
                    )}
                    <Title>{title}</Title>
                </Content>
            )}

        </Container>
    )
}
