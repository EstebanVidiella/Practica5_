import React, { useState, FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { gql, useQuery } from "@apollo/client";
import "./quote.css";
const Quote = gql`
  query getQuote($name: String!) {
    quote(where: { name: { eq: $name } }) {
      quote
      movie
    }
  }
`;
interface QuoteProps {
  name: string;
  changeFilter: Function;
}

interface IQuote {
  quotes: Array<{
    quote: string;
    movie: string;
  }>;
}

const InfoQuote: FC<QuoteProps> = (props) => {
  const { data, loading, error } = useQuery<IQuote>(Quote, {
    variables: { name: props.name },
  });
  
  //const rawQuotes = fetch('https://the-one-api.dev/v2/quote',{heards:headers})
  //const quotes =  rawQuotes;
  //const quote = quotes.docs[Math.floor(Math.random()*quotes.docs.length)];
  const [index, setIndex] = useState<number>(-1);

  return (
    <div className="container_global">
      {loading && <ClipLoader color="blue" />}
      {error && <div>{error.message}</div>}
      {data &&
        data.quotes.map((quote, index_quote) => {
          if (index === index_quote) {
            return (
              <div className="container_info">
                <div
                  className="name no"
                  onClick={() => {
                    setIndex(index);
                  }}
                >
                  {quote.quote}
                </div>
                
            
              </div>
            );
          } else {
            return (
              <div className="container_info">
                <div
                  className="name"
                  onClick={() => {
                    setIndex(index_quote);
                  }}
                >
                  {quote.quote}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default InfoQuote;
