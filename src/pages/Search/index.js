import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SearchActions } from '~/store/ducks/search';

import SongList from '~/components/SongList';
import styles from './styles';

class Search extends Component {
  static navigationOptions = {
    title: 'Busca',
  }

  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    search: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.searchRequest = debounce(this.props.searchRequest, 750);
  }

  state = {
    searchInput: '',
  }

  search = (searchInput) => {
    this.setState({ searchInput });

    this.searchRequest(searchInput);
  }

  render() {
    const { search } = this.props;
    const { searchInput } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Busque por músicas..."
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
            value={searchInput}
            onChangeText={this.search}
          />
        </View>

        { search.loading && <ActivityIndicator size="small" color="#999" style={styles.loading} />}

        <SongList data={search.data} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispachToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(Search);
