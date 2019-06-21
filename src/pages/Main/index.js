import React, { Component } from 'react';
import {
  View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AlbumsActions } from '~/store/ducks/albums';

import PropTypes from 'prop-types';

import AlbumItem from './components/AlbumItem';
import styles from './styles';

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Biblioteca',
    headerRight: (
      <TouchableOpacity
        style={styles.headerRight}
        onPress={() => navigation.navigate('Search')}
      >
        <Icons name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    ),
  });

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  render() {
    const { albums, navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        { albums.loading
          ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
          : (
            <FlatList
              data={albums.data}
              keyExtractor={album => String(album.id)}
              renderItem={({ item }) => (
                <AlbumItem
                  onPress={() => navigation.navigate('Album', { album: item })}
                  album={item}
                />
              )}
            />
          )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispachToProps = dispatch => bindActionCreators(AlbumsActions, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(Main);
