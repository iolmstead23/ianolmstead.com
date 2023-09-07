export default function Hero() {
  return (
      <div>
        <div className="bg-cover bg-no-repeat bg-[url('/coding.gif')] h-[500px] clip-banner">
          <div className="bg-[hsla(0,0%,0%,0.75)] overflow-hidden h-full">
            <div className="flex flex-wrap flex-col font-bold text-center text-white lg:my-[200px] md:my-[175px] my-[150px]">
              <h1 className="text-3xl">
                Like what you see?
              </h1>
              <h2 className="text-2xl">
                Find out how I can digitize your business.
              </h2>
            </div>
          </div>
        </div>
      </div>
     )
}