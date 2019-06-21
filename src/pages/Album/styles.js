import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  thumbnail: {
    width: '100%',
    height: 120,
  },
  thumbnailContainer: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  author: {
    fontSize: 16,
    color: colors.whiteTransparent,
  },
});

export default styles;
