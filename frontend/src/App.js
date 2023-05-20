import Hero from "./components/Hero";
import TextSection from "./components/TextSection";
import degg from "./images/desktop/image-transform.jpg";
import megg from "./images/mobile/image-transform.jpg";
import dcup from "./images/desktop/image-stand-out.jpg";
import mcup from "./images/mobile/image-stand-out.jpg";
import CherryCard from "./components/CherryCard";
import OrangeCard from "./components/OrangeCard";
import ClientCard from "./components/ClientCard";
import emily from "./images/image-emily.jpg";
import thomas from "./images/image-thomas.jpg";
import jennie from "./images/image-jennie.jpg";

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
      {/* Testimonials */}
      <div className="flex flex-col items-center pt-12 gap-16 md:col-span-2">
        <h2 className="font-fraunces text-base tracking-[0.15rem] uppercase text-gblue">
          Client Testimonials
        </h2>
        <div className="md:flex">
          <ClientCard
            portrait={emily}
            content="We put trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            name="Emily R."
            title="Marketing Director"
          />
          <ClientCard
            portrait={thomas}
            content="Sunnyside's enthusiasm coupled with their keen interest in our brand's succes made it a satisfying and enjoyable experience."
            name="Thomas S."
            title="Chief Operating Officer"
          />
          <ClientCard
            portrait={jennie}
            content="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            name="Jennie F."
            title="Business Owner"
          />
        </div>
      </div>
      {/* 4 photos */}
      <div className="grid grid-cols-2 md:grid-cols-2"></div>
    </div>
  );
}

export default App;
