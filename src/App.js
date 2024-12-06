import "./App.css";
import { Provider } from "./components/ui/provider";
import { Button } from "./components/ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";
import Header from "./components/Header/Header";
import PlantsList from "./components/PlantsList/plants-list";
import plant1 from "./assets/images/plant1.jpg";
import plant2 from "./assets/images/plant2.jpg";
import plant3 from "./assets/images/plant3.jpg";
import plant4 from "./assets/images/plant4.jpg";

function App() {
  return (
    <Provider>
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
        <DrawerRoot size="md">
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <button className="filters-button">Filters</button>
          </DrawerTrigger>
          <DrawerContent offset="4" rounded="md">
            <DrawerHeader>
              <DrawerTitle>Find your perfect plant</DrawerTitle>
              <DrawerCloseTrigger />
            </DrawerHeader>
            <DrawerBody>
              <form>
                <label htmlFor="difficulty">Difficulty:</label>
                <select name="difficulty" id="difficulty">
                  <option value="10-13">easy</option>
                  <option value="5-9">medium</option>
                  <option value="1-4">hard</option>
                </select>
                <label htmlFor="watering">Watering:</label>
                <select name="watering" id="watering">
                  <option value="none">none</option>
                  <option value="minimum">minimum</option>
                  <option value="average">average</option>
                  <option value="frequent">frequent</option>
                </select>
                <label htmlFor="sunlight">Sunlight:</label>
                <select name="sunlight" id="sunlight">
                  <option value="full_shade">full shade</option>
                  <option value="part_shade">part shade</option>
                  <option value="full_sun">full sun</option>
                </select>
                <label htmlFor="edible">Edible:</label>
                <input type="checkbox" name="edible" id="edible" />
                <label htmlFor="poisonous">Poisonous:</label>
                <input type="checkbox" name="poisonous" id="poisonous" />
                <label htmlFor="indoor">Indoor:</label>
                <input type="checkbox" name="indoor" id="indoor" />
                <DrawerActionTrigger asChild>
                  <Button variant="outline">Apply</Button>
                </DrawerActionTrigger>
              </form>
            </DrawerBody>
            {/*<DrawerFooter>*/}
            {/*  <DrawerActionTrigger asChild>*/}
            {/*    <Button variant="outline">Cancel</Button>*/}
            {/*  </DrawerActionTrigger>*/}
            {/*</DrawerFooter>*/}
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
        <div className="items-list">
          <PlantsList />
        </div>
      </section>
    </Provider>
  );
}

export default App;
