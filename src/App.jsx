import React from "react";
import data from "./data.json";
function App() {
  console.log(data.sections);
  return (
    <div>
      <div>
        <h2>{data.sections.header.title}</h2>
        <p>{data.sections.header.description}</p>
        <img src={data.sections.header.logo} alt={data.sections.header.alt} />
        {data.sections.header.text_logo}
      </div>

      <div>
        <h2>{data.sections.one.title}</h2>
        <img src={data.sections.one.image} alt={data.sections.one.alt} />
      </div>
    </div>
  );
}

export default App;
