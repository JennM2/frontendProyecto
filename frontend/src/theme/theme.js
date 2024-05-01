import {createTheme, CssBaseline, ThemeProvider} from '@material-ui/core';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';
import Merriweather from '../assets/fonts/Merriweather-Regular.ttf';


const PoppinsRegular = {
    fontFamily: "Poppins-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    src: `url(${Poppins})`
};
const PoppinsBold = {
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontWeight: 800,
    src: `url(${Poppins})`
};
const PoppinsSemibold = {
    fontFamily: "Poppins-SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    src: `url(${Poppins})`
};
const MerriweatherRegular ={
    fontFamily: "Merriweather-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    src: `url(${Merriweather})`
};
const MerriweatherBold ={
    fontFamily: "Merriweather-Bold",
    fontStyle: "normal",
    fontWeight: 800,
    src: `url(${Merriweather})`
};


const theme = createTheme({
    typography: {
        fontFamily: [PoppinsRegular.fontFamily, PoppinsBold.fontFamily, PoppinsSemibold.fontFamily, MerriweatherRegular.fontFamily, MerriweatherBold.fontFamily].join(",")
    },
    palette: {
        primary: {
            main: "#FFFFFF",
            light: "#1E3D58",
            dark: "#D9D9D9",
            contrastText: "#061633"
        },
        common: {
            black: "#000000",
            white: "#FFFFFF",
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "@font-face": [PoppinsRegular, PoppinsBold,PoppinsSemibold, MerriweatherRegular, MerriweatherBold]
            },
            body: {
                fontFamily: ["PoppinsRegular"]
            },
            "h1, h2, h3, h4, h5, h6": {
                margin: 0,
                padding: 0
            }
        }
    }
});

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>
        <CssBaseline/> {children} </ThemeProvider>
);
export default Theme;
