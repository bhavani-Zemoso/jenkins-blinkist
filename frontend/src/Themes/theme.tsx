import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        subtitle3: React.CSSProperties;
        body3: React.CSSProperties;
        caption1: React.CSSProperties;
        caption2: React.CSSProperties;
        subtitle5: React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {
        subtitle3?: React.CSSProperties;
        body3?: React.CSSProperties;
        caption1?: React.CSSProperties;
        caption2?: React.CSSProperties;
        subtitle5?: React.CSSProperties;
    }

    interface SimplePaletteColorOptions {
        toggle?: string;
        placeholder?: string;
    }

    interface Palette {
        textcolor: Palette['primary'];
        backgroundcolor: Palette['primary'];
    }

    interface PaletteOptions {
        textcolor?: PaletteOptions['primary'];
        backgroundcolor?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        subtitle3: true;
        body3: true;
        caption1: true;
        caption2: true;
        subtitle5: true;
    }
}

export const theme = createTheme({
  
    palette: {
        primary: {
            main:'#2CE080',
            dark: '#20BA68',
            light: '#E2F2E9',
            toggle: '#22C870',
        },
        secondary: {
            light: '#C6DAF6',
            main: '#0365F2',
        },
        grey: {
            100: '#BAC9CF',
            200: '#6C787F',
            400: '#3A4649',
            500: '#042330',
        },
        textcolor: {
            light: '#6D787E',
            main: '#03314B',
            dark: '#042330',
            placeholder: '#747575',
        },
        backgroundcolor: {
            light: '#F7F7F7',
            main: '#F1F6F4',
        },
    },

    typography: {

       fontFamily: "Roboto",

        h1:{
            fontSize: '36px',
            lineHeight: '45px',
            fontWeight: '700',
            fontFamily: "Roboto",
        },

        subtitle1: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: '500',
            fontFamily: "Roboto",
        },
        subtitle2: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: '500',
            fontFamily: "Roboto",
        },
        subtitle3: {
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: '400',
            fontFamily: "Roboto",
        },
        subtitle5: {
            fontSize: '20px',
            lineHeight: '25px',
            fontWeight: '400',
            fontFamily: 'Roboto',
        },

        body1: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '700',
            fontFamily: "Roboto",
        },
        body2: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '400',
            fontFamily: "Roboto",
        },
        body3: {
            fontSize: '22px',
            lineHeight: '26px',
            fontWeight: '400',
            fontFamily: "Roboto",
        },
        caption1: {
            fontSize: '14px',
            lineHeight: '22px',
            fontWeight: '400',
            fontFamily: "Roboto",
        },
        caption2: {
            fontSize: '14px',
            lineHeight: '22px',
            fontWeight: '700',
            fontFamily: "Roboto",
        }
    },

    spacing: [4, 8, 12, 16, 20, 24, 32, 48]

});

