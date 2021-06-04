import React, { useState, FC, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { gql, useQuery } from "@apollo/client";
import "./testeo3.css";

const Infoquotes = () => {
    const [quote,setQuote] = useState()
    
    useEffect(() => {
        const headers ={
            'Accept': 'application/json',
            'Athorization': 'Bearer Hweiz-fiYtAnIQM8pZ_s'
        }

        const fetchData = async () => {
            const rawQuotes = await fetch ('https://the-one-api.dev/v2/quote', {
                headers: headers
            })
            const quotes = await rawQuotes.json();
            const quote = quotes.docs[Math.floor(Math.random()* quotes.docs.length)];
            setQuote(quote.dialog)
        };

        fetchData();
    }, []);

    return(
        <div>
            <blockquote>{quote}</blockquote>
        </div>
    
    );
}

export default Infoquotes;