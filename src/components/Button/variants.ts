import theme from '../../styles/theme'

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    };
    title: {
        color: string;
    };
    icon: {
        color: string;
    };
};

export interface ButtonVariante {
    enabled: ButtonStyle;
    disabled: ButtonStyle;
};

const buttonPrimary: ButtonVariante = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.PRIMARY,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
};

const buttonOutline: ButtonVariante = {
    enabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: theme.COLORS.PRIMARY,
        },
        title: {
            color: theme.COLORS.GRAY1,
        },
        icon: {
            color: theme.COLORS.GRAY1,
        },
    },
    disabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: theme.COLORS.PRIMARY,
        },
        title: {
            color: theme.COLORS.GRAY_100,
        },
        icon: {
            color: theme.COLORS.GRAY_100,
        },
    },
};

const buttonBlack: ButtonVariante = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.BLACK,
        },
        title: {
            color: theme.COLORS.ORANGE_300,
        },
        icon: {
            color: theme.COLORS.ORANGE_300,
        },
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
};

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutline,
    black: buttonBlack,
}
