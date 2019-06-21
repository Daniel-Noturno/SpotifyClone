import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secundary,
    paddingHorizontal: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
    ...ifIphoneX({
      height: 74,
      paddingBottom: metrics.basePadding,
    }, {
      height: 54,
    }),
  },
  currentSong: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: colors.white,
  },
  author: {
    fontSize: 12,
    color: colors.dark,
    marginTop: 5,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlIcons: {
    color: colors.white,
  },
  play: {
    marginHorizontal: metrics.baseMargin / 2,
  },
});

export default styles;
