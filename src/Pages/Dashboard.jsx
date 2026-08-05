function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-10 text-center">

        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome, Shankaragouda 👋
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Welcome to My Company Dashboard
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Explore Website
        </button>

      </div>
    </div>
  );
}

export default Dashboard;