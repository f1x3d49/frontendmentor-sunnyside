import Hero from "./components/Hero";
import TextSection from "./components/TextSection";
import degg from "./images/desktop/image-transform.jpg";
import megg from "./images/mobile/image-transform.jpg";
import dcup from "./images/desktop/image-stand-out.jpg";
import mcup from "./images/mobile/image-stand-out.jpg";
import CherryCard from "./components/CherryCard";
import OrangeCard from "./components/OrangeCard";

function App() {
  return (
    <div className="w-screen h-screen md:grid md:grid-cols-2 md:grid-flow-dense bg-nwhite ">
      <Hero />
      {/* First row */}
      <section className="md:col-start-2">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={degg}
            className="w-full object-fill"
          />
          <source srcSet={megg} />
          <img src={megg} alt="egg" className="object-center w-full" />
        </picture>
      </section>
      <TextSection
        title="Transform your brand"
        content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients trough comepling visuals that do most of the marketing for you."
        color="pyellow"
      />
      {/* Second row */}
      <section className="md:col-start-1">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={dcup}
            className="w-full object-fill"
          />
          <source srcSet={mcup} />
          <img src={mcup} alt="cup" className="object-center w-full" />
        </picture>
      </section>
      <TextSection
        title="Stand out to the right audience"
        content="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        color="sred"
      />
      <CherryCard />
      <OrangeCard />
    </div>
  );
}

export default App;
