import { StyleSheet } from 'react-native'
import Theme from '../../Theme/hoozin-theme'
import Mixins from '../../Theme/mixins'

export const LoginStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        flex: 1.6,
        justifyContent: 'center'
    },
    logoText: {
        ...Theme.BRAND_LOGO,
        ...Mixins.centeredText
    },
    inputForm: {
        flex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.68)',
        marginRight: 35,
        marginLeft: 35,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    textInput: {
        alignSelf: 'stretch',
        overflow: 'visible',
        ...Theme.BRAND_BODY_TEXT,
        ...Mixins.centeredText,
        ...Mixins.fullWidthCenterAlignedFlexContainer
    },
    rowItem: {
        ...Mixins.fullWidthCenterAlignedFlexContainer
    },
    separator: {
        borderBottomColor: Theme.BRAND_COLOR.PRIMARY_TEXT,
        borderBottomWidth: 1,
        paddingLeft: 90,
        paddingRight: 90,
    },
    commonText: {
        ...Theme.BRAND_BODY_TEXT,
        ...Mixins.centeredText
    },
    line: {
        borderBottomColor: Theme.BRAND_COLOR.ACCENT,
        borderBottomWidth: 1,
    },
    socialLogin: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    googleLogin: {
        marginRight: 5,
    },
    loginFailed: {
        borderColor: 'red'
    },
    button: {
        ...Theme.BRAND_BODY_TEXT,
        color: Theme.BRAND_COLOR.STYLE1,
    },
    loginButton: {
        ...Theme.BRAND_BODY_TEXT,
        color: Theme.BRAND_COLOR.PRIMARY
    },
    footer: {
        flex: 2,
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },
    buttonContainer: {
        marginBottom: 15,
    },
    overlay: {
        ...Mixins.fullScreenAbsoluteContainer,
        backgroundColor: Theme.BRAND_COLOR.OVERLAY
    },
    spinner: {
        ...Mixins.fullWidthCenterAlignedFlexContainer
    },
})