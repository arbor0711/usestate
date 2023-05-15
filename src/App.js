import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);

  const eventHandler = (e) => setQuote(e.target.value);

  return (
    <section>
      <div>
        <lable>Enter your question here.</lable>
        <br></br>
        <textarea onChange={eventHandler} type="text" />
      </div>
      {quote ? (
        <p>
          <b>You have asked: </b>
          <em>{quote}</em>
        </p>
      ) : null}
    </section>
  );
}

export default App;
