import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Button, Title } from './styles'


interface Props extends RectButtonProps {
    title: string
}

const ButtonSocialFacebook: React.FC<Props> = ({ title, ...rest }) => {
    return (
        <Button {...rest}>
            <Title>{title}</Title>
        </Button>
    )
}

export { ButtonSocialFacebook }
