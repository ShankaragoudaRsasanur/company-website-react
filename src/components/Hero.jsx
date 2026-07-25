import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Welcome to My Company
          </h1>

          <p className="text-lg mb-6">
            We build modern websites and applications using React.
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>

        <img
          src={hero}
          alt="Hero"
          className="w-96 mt-10 md:mt-0"
        />
      </div>
    </section>
  );
}

export default Hero;