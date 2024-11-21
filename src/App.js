import "./App.css";
import Header from "./components/Header/Header";
import plant1 from "./assets/images/plant1.jpg";
import plant2 from "./assets/images/plant2.jpg";
import plant3 from "./assets/images/plant3.jpg";
import plant4 from "./assets/images/plant4.jpg";

function App() {
  return (
    <>
      <section id="cover">
        <Header />
        <div className="slogan-wrapper">
          <h1 className="slogan">
            Life <br /> Love
            <br /> Leaf
          </h1>
        </div>
      </section>
      <section id="discover">
        <h2 className="discover-title">Best home plants</h2>
        <div className="discover-info_wrapper">
          <div className="discover-info discover-info1">
            <img className="discover-info_img" src={plant1} alt="" />
            <p className="discover-info_text">
              Step into a world of greenery at our plant store, where every
              corner bursts with life and inspiration. From vibrant indoor
              plants that add warmth to your home, to lush greenery perfect for
              transforming any workspace, we have something for everyone.
            </p>
          </div>
          <div className="discover-info discover-info2">
            <img className="discover-info_img" src={plant2} alt="" />
            <p className="discover-info_text discover-info_text2">
              Explore our handpicked collection of premium plants, curated to
              thrive in a variety of environments.
            </p>
          </div>

          <div className="discover-info discover-info3">
            <img className="discover-info_img" src={plant3} alt="" />
            <p className="discover-info_text discover-info_text3">
              Whether you're looking for easy-care options, statement pieces, or
              the perfect gift, our knowledgeable team is here to guide you
              every step of the way.
            </p>
          </div>
          <div className="discover-info discover-info4">
            <img className="discover-info_img" src={plant4} alt="" />
            <p className="discover-info_text discover-info_text4">
              At Life Leaf Love we believe plants do more than decorate — they
              inspire, bring happiness, create serenity, and foster a deep
              connection to nature. Visit us and let’s grow together!
            </p>
          </div>
        </div>
      </section>
      <section id="items">
        <h2 className="items-title">
          Discover <br /> your perfect
          <br /> houseplant today
        </h2>
        <p className="items-info">
          In our collection you will find over 200 plant varieties, from
          easy-care greenery to exotic species, each with detailed information
          to help you choose the perfect addition to your space.
        </p>
        <div className="items-list">
          <div className="item">
            <p>Monstera</p>
            <img className="item-img" src={plant4} alt="plant" />
            <p>Info</p>
            <p>Info</p>
            <p>More</p>
            <p>Price: 1000$</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
