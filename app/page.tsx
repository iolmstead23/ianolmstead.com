import Hero from './components/hero'
import Portfolio from './components/portfolio'

export default function Home() {
  return (
    <div className="mx-auto min-h-screen">
      <Hero />
      
      <div className="w-full flex flex-row flex-wrap">
        <Portfolio />
      </div>
    </div>
  );
};
