// import { SearchSource } from 'jest';
import React, { Component } from 'react';
import HeadlineList from '../components/headlines/HeadlineList';
// eslint-disable-next-line max-len
import { fetchHeadlines, fetchUserInputField } from '../services/fetchHeadlines';
import ArticleSearch from '../components/headlines/HeadlineSearch';

export default class NewsApi extends Component {
    state = {
      loading: true,
      news: {},
      searchArticle: '',
    }

    async componentDidMount() {
      // console.log('hello');
      const news = await fetchHeadlines();
      // console.log('hello');
      this.setState({ news, loading: false });
    }

    handleChange({ target }) {
      console.log(target);
      this.setState({ searchArticle: target.value });
    }

    handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({ loading: true });
      // eslint-disable-next-line max-len
      const userTypesIntoInputField = await fetchUserInputField(this.state.articleSearch);
      this.setState({
        loading: false,
        news: userTypesIntoInputField,
      });
    };

    render() {
      const { news, loading } = this.state;
      if(loading) return <h1>En Route...</h1>;

      return (
        <>

          <ArticleSearch
            articleSearch={this.state.articleSearch}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />

          <HeadlineList news={news} />
          
        </>
      );
    }


}
