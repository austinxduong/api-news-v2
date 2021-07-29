/* eslint-disable max-len */
export const fetchHeadlines = async () => {
  // endpoints: country = us, catergory = entertainment
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.api_key}`);
  const { headlines } = await res.json();

  return headlines;
};
