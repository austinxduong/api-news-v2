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
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.API_KEY}`
  );

  console.log('sunny');
  const json = await res.json();
  return json;
};


// export const fetchHeadlines = async () => {
//   const res = await fetch(
//     'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=actualAPI_KEY_HERE'
//   );

//   console.log('sunny');
//   const json = await res.json();
//   return json;
// };

