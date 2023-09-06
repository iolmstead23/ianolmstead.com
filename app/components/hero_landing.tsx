export default function Hero() {
  return (
      <div>
        <div className="overflow-hidden bg-cover bg-no-repeat bg-[url('/background_hero.jpg')] h-[500px] clip-banner">
          <div className="h-full lg:h-96 md:h-48 sm:h-28">
            <h1 className="text-3xl font-bold text-center text-white lg:my-[200px] md:my-[175px] my-[150px]">
              Hero Block
            </h1>
          </div>
        </div>
      </div>
     )
}