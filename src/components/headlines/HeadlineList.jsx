/* eslint-disable react/prop-types */
import React from 'react';
import Headline from './Headline';

const HeadlineList = ({ news }) => {
    console.log(news);
  const headlineElement = news.map(headline => (
    <li key={headline.title}>
      <Headline {...headline} />
    </li>
  ));

  return (<ul>{headlineElement}</ul>);

};

export default HeadlineList;
