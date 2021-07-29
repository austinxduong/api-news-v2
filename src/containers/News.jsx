import React, { Component } from 'react';
import HeadlineList from '../components/headlines/HeadlineList';
import { fetchHeadlines } from '../services/fetchHeadlines';

export default class NewsApi extends Component {
    state = {
      loading: true,
      news: {},
    }

    async componentDidMount() {
        // console.log('hello');
      const news = await fetchHeadlines();
      console.log('hello');
      this.setState({ news, loading: false });
    }

    // handleChange({ target }) {
    //   console.log(target);
    //   this.setState({ search: target.value });
    // }

    render() {
      const { news, loading } = this.state;
      if(loading) return <h1>En Route...</h1>;

      return (
        <>
          <HeadlineList news={news} />
        </>
      );
    }


}
