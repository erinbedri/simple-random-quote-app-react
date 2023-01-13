import React, { useState, useEffect } from "react";

export default function Quote() {
  const baseUrl = "https://api.quotable.io/random";

  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();

    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  return (
    <div className="container">
      <div id="quote-box">
        <div id="text">{quote.content}</div>
        <div id="author">{quote.author}</div>
        <button id="new-quote" onClick={clickHandler}>
          Get New Quote
        </button>
      </div>
    </div>
  );
}
