import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to My Company
          </h1>

          <p className="text-base sm:text-lg mb-6">
            We build modern websites and applications using React.
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-64 sm:w-80 md:w-96"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;