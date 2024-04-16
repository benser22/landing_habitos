import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Layout from "../Layout/Layout";
import Body from "../Body/Body";

function LandingPage() {
  return (
    <div>
      {/* Header Section */}
      <Navbar />
      <Layout>
        <Hero />
        <Body />
      </Layout>
      {/* Section One
      <div>
        <h2>{data.sections.one.title}</h2>
        <img src={data.sections.one.image} alt={data.sections.one.alt} />
      </div>

      {/* Section Two */}
      {/* <div>
        <h2>{data.sections.two.title}</h2>
        <ul>
          {Object.entries(data.sections.two.filtersbar).map(([key, value]) => (
            <li key={key}>
              <select>
                {value.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </li>
          ))}
        </ul>
        <button>{data.sections.two.button}</button>
      </div> */}

      {/* Section Three */}
      {/* <div>
        <h2>{data.sections.three.title}</h2>
        <p>{data.sections.three.subtitle}</p>
        <img src={data.sections.three.image1} alt={data.sections.three.alt1} />
        <img src={data.sections.three.image2} alt={data.sections.three.alt2} />
        <img src={data.sections.three.image3} alt={data.sections.three.alt3} />
      </div> */}

      {/* Section Four */}
      {/* <div>
        <h2>{data.sections.four.title}</h2>
        <p>{data.sections.four.subtitle}</p>
        <img src={data.sections.four.image} alt={data.sections.four.alt} />
        <img src={data.sections.four.pill} alt={data.sections.four.pill_alt} />
        <p>{data.sections.four.pill_text1}</p>
        <p>{data.sections.four.pill_text2}</p>
        <img src={data.sections.four.band} alt={data.sections.four.band_alt} />
        <p>{data.sections.four.band_text1}</p>
        <p>{data.sections.four.band_text2}</p>
      </div> */}

      {/* Section Five */}
      {/* <div>
        <h2>{data.sections.five.title1}</h2>
        <p>{data.sections.five.subtitle1}</p>
        <img src={data.sections.five.image1} alt={data.sections.five.alt1} />
        <h2>{data.sections.five.title2}</h2>
        <p>{data.sections.five.subtitle2}</p>
        <img src={data.sections.five.image2} alt={data.sections.five.alt2} />
      </div> */}

      {/* Section Six */}
      {/* <div>
        <h2>{data.sections.six.title}</h2>
        <p>{data.sections.six.subtitle1}</p>
        <p>{data.sections.six.subtitle2}</p>
        <p>{data.sections.six.description}</p>
      </div> */}

      {/* Section Seven */}
      {/* <div>
        <h2>{data.sections.seven.title}</h2>
        <p>{data.sections.seven.subtitle}</p>
        <input
          type="text"
          placeholder={data.sections.seven.input_placeholder}
        />
        <button>{data.sections.seven.button}</button>
      </div> */}

      {/* Footer Section */}
      {/* <footer>
        <img src={data.sections.footer.logo} alt={data.sections.footer.alt} />
        <p>{data.sections.footer.text_logo}</p>
        <p>{data.sections.footer.paragraph}</p>
        <div>
          <div>
            <h3>Company</h3>
            <ul>
              {data.sections.footer.links.Company.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              {data.sections.footer.links.Support.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              {data.sections.footer.links.Contact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <img
            src={data.sections.footer.links["facebook-icon"]}
            alt="Facebook"
          />
          <img src={data.sections.footer.links["twitter-icon"]} alt="Twitter" />
          <img
            src={data.sections.footer.links["linkedin-icon"]}
            alt="LinkedIn"
          />
        </div>
        <p>{data.sections.footer.links.copy}</p>
        <p>{data.sections.footer.links.designBy}</p>
      </footer>  */}
    </div>
  );
}

export default LandingPage;
