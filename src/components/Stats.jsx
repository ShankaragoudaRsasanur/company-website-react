function Stats() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="text-center">
            <h3 className="text-5xl font-bold">150+</h3>
            <p className="mt-2">Projects Completed</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">80+</h3>
            <p className="mt-2">Happy Clients</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">25+</h3>
            <p className="mt-2">Team Members</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">5+</h3>
            <p className="mt-2">Years of Experience</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;