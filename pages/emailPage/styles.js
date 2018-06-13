import { StyleSheet, Platform, NativeModules } from 'react-native';
import { scale, FONT_FAMILY, COLOR_PRIMARY, verticalScale, iosBody, backgrounHeightadapt, height, width } from '../../assets/common';

const hasSoftNavBar = Platform.OS === 'android' ? !!NativeModules.SoftKeyDetectModule.has_soft_keys : false;


const styles = StyleSheet.create({
  WholeBody: {
    marginTop: verticalScale(75),
    height: scale(508),
    width: scale(284),
    flexDirection: 'column',
  },
  BackgroundImage: {
    width,
    height: hasSoftNavBar ? height + backgrounHeightadapt() : height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    marginLeft: scale(133),
    marginTop: verticalScale(49) >= 55 ? iosBody(10) : scale(49),
  },
  TextHeader: {
    height: scale(161),
    width: scale(292),
    justifyContent: 'flex-start',
  },
  LargeText: {
    textAlign: 'left',
    color: '#0F2051',
    fontFamily: `${FONT_FAMILY}-Bold`,
    fontSize: scale(28),
    backgroundColor: 'transparent',
  },
  MediumText: {
    textAlign: 'left',
    marginTop: verticalScale(21),
    fontSize: scale(14),
    color: '#0F2051',
    fontFamily: `${FONT_FAMILY}-Medium`,
    backgroundColor: 'transparent',
  },
  BoldMediumText: {
    fontFamily: `${FONT_FAMILY}-Bold`,
    marginTop: verticalScale(7),
  },

  InfoText: {
    height: scale(36),
    width: scale(204),
    fontFamily: `${FONT_FAMILY}-Regular`,
  },
  ButtonContainer: {
    marginTop: verticalScale(16),
    width: scale(292),
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

});

export default styles;
