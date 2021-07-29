import React, { Component } from 'react';
import HeadlineList from '../components/headlines/HeadlineList';
import { fetchHeadlines } from '../services/fetchHeadlines';

export default class NewsApi extends Component {
    state = {
      loading: true,
      news: [],
    }

    async componentDidMount() {
      const news = await fetchHeadlines();
      this.setState({ news, loading: false });
    }

    handleChange({ hello }) {
      console.log(hello);
      this.setState({ search: hello.value });
    }

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
