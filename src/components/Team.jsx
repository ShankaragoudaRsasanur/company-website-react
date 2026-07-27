function Team() {
  const members = [
    {
      name: "John Smith",
      role: "Frontend Developer",
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
    },
    {
      name: "David Wilson",
      role: "Backend Developer",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-blue-500 mx-auto mb-4"></div>

              <h3 className="text-2xl font-bold">
                {member.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;