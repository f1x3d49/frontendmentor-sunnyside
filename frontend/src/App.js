import Hero from "./components/Hero";
import TextSection from "./components/TextSection";
import degg from "./images/desktop/image-transform.jpg";
import megg from "./images/mobile/image-transform.jpg";

function App() {
  return (
    <div className="w-screen h-screen md:grid md:grid-cols-2 bg-nwhite overflow-x-hidden">
      <Hero />
      <section>
        <picture>
          <source media="(min-width: 768px)" srcSet={degg} />
          <source srcSet={megg} />
          <img className="" src={megg} alt="egg" />
        </picture>
      </section>
      <TextSection
        title="Transform your brand"
        content="We are a full service agency specializing in helping brands grow fast. Engage your clients trough compeling visuals that do most of the marketing for you."
      />
    </div>
  );
}

export default App;
