import React, {useState} from 'react';
import logo from './logo.svg';
import { ApolloProvider } from '@apollo/client/react';
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

import InputText from './components/input/input'
import InfoQuote from './components/query/quote'
import InfoQuotes from './components/query/testeo3'

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL,
  cache: new InMemoryCache()
})


function App() {
  
  const [searchName, setName] = useState<string>("")
  const [type, setType] = useState<boolean>(false);

  const setAll = (name: string, isQuote: boolean) => {
    setName(name);
    setType(isQuote)
  }
  console.log(searchName + " " + type);
  
  return (
    <ApolloProvider client={client}>
      {searchName === "" &&
        <InputText changeFilter={setAll}/>
      }

      {searchName !== "" &&
        <div>
          <div className="center" onClick={() => {
            setName("")
            setType(false)
            }}>
              <div className="image"></div>
              <div>Haz click aquí para volver al buscador</div>
          </div>
        {!type &&
          //<InfoQuotes />
          <InfoQuote name={searchName} changeFilter={setAll}/>
        }
        {type &&
          <InfoQuote name={searchName} changeFilter={setAll}/>
        }

        </div>
        
        
      }
    </ApolloProvider>
  );
}

export default App;
