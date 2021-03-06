/* eslint-disable max-len */
// export const fetchHeadlines = async () => {
//   console.log('newcode');
//   // endpoints: country = us, catergory = entertainment
//   const res = await fetch(`https://newsapi.org/v2/everything?q=sunny&apiKey=${process.env.API_KEY}`);
//   console.log('testinghi');
//   const headlines = await res.json();


//   return headlines;
// };


export const fetchHeadlines = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`
  );

  // console.log('sunny');
  const json = await res.json();
  // console.log(json.articles);
  return json.articles;
};


// export const fetchHeadlines = async () => {
//   const res = await fetch(
//     'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ACTUAL_API_KEY_HERE'
//   );

//   console.log('sunny');
//   const json = await res.json();
//   return json;
// };

export const fetchUserInputField = async (searchUserInput) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?q{searchUserInput}h&apiKey=${process.env.API_KEY}`
  )
  const json = await res.json();
  return json.articles;
};


