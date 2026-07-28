import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Welcome to <br />
            <span className="text-yellow-300">My Company</span>
          </h1>

          <p className="text-lg md:text-xl mb-8">
            We build modern websites and applications using
            React, Java, Spring Boot, and modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-72 md:w-[450px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;