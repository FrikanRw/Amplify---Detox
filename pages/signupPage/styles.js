import { StyleSheet, Platform, NativeModules } from 'react-native';
import { scale, FONT_FAMILY, COLOR_PRIMARY, verticalScale, iosBody, backgrounHeightadapt, height, width } from '../../assets/common';

const hasSoftNavBar = Platform.OS === 'android' ? !!NativeModules.SoftKeyDetectModule.has_soft_keys : false;

const styles = StyleSheet.create({
  WholeBody: {
    padding: 0,
    marginTop: verticalScale(80),
    height: verticalScale(508) >= 508 ? iosBody(508) : verticalScale(508),
    width: scale(375),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackgroundImage: {
    width,
    height: hasSoftNavBar ? height + backgrounHeightadapt() : height,
  },
  Icon: {
    marginLeft: scale(133),
    marginTop: verticalScale(49),
  },
  LoginButton: {
    marginTop: height / 5.76,
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 4,
    width: width / 1.184,
    height: height / 12.8,
    position: 'absolute',
    bottom: height / 45,
    left: width / 180,
  },
  TextInputContainer: {
    borderBottomColor: '#0F2051',
    borderBottomWidth: 1,
    paddingBottom: 8.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: scale(52),
    width: scale(279),
  },
  TextInput: {
    marginTop: scale(23),
    width: scale(279),
    color: '#0F2051',
    padding: 0,
    fontFamily: `${FONT_FAMILY}-Regular`,
    fontSize: scale(16),
  },
  TextHeader: {
    height: scale(64),
    width: scale(279),
    justifyContent: 'flex-start',
  },
  LargeText: {
    width: scale(265),
    textAlign: 'left',
    color: '#0F2051',
    fontFamily: `${FONT_FAMILY}-ExtraBold`,
    fontSize: scale(28) >= 30 ? scale(24) : scale(28),
    backgroundColor: 'transparent',
  },
  MediumText: {
    textAlign: 'left',
    fontSize: scale(20),
    color: '#0F2051',
    fontFamily: `${FONT_FAMILY}-Medium`,
    backgroundColor: 'transparent',
  },
  PasswordText: {
    textAlign: 'left',
    fontSize: scale(11),
    fontFamily: `${FONT_FAMILY}-Medium`,
    color: COLOR_PRIMARY,
    backgroundColor: 'transparent',
  },
  Termconditions: {
    width: scale(279),
    height: verticalScale(36) > 40 ? iosBody(65) : verticalScale(36),
    marginTop: verticalScale(32),
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  Termconditions2: {
    width: scale(220),
    flexDirection: 'row',
  },
  Privterm: {
    color: '#0F2051',
    fontFamily: `${FONT_FAMILY}-Regular`,
    fontSize: scale(14),
    textDecorationLine: 'underline',
  },
  TcText: {
    textAlign: 'left',
    color: '#0F2051',
    fontFamily: `${FONT_FAMILY}-Regular`,
    fontSize: scale(14),
  },
  ButtonContainer: {
    marginTop: verticalScale(32),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PromptContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  PromptText: {
    textAlign: 'center',
    width: scale(215),
    marginTop: scale(15),
    color: COLOR_PRIMARY,
    fontFamily: `${FONT_FAMILY}-Regular`,
    fontSize: scale(14),
  },
  PromptTitle: {
    textAlign: 'center',
    marginTop: scale(25),
    color: COLOR_PRIMARY,
    fontFamily: `${FONT_FAMILY}-Bold`,
    fontSize: scale(20),
  },
  PromptButton: {
    marginTop: scale(21),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bumper: {
    height: verticalScale(254) >= 254 ? iosBody(275) : verticalScale(254),
  },
});

export default styles;
