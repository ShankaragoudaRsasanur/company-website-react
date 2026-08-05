import { useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [section, setSection] = useState("");

  const services = [
    "Web Development",
    "App Development",
    "Cloud Solutions",
    "AI Solutions",
    "UI/UX Design",
    "Cyber Security",
  ];

  const loadProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
    setSection("products");
  };

  const loadClients = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUsers(data.users);
    setSection("clients");
  };

  const loadEmployees = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUsers(data.users);
    setSection("employees");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome, Shankaragouda 👋
      </h1>

      <p className="mb-8 text-gray-600">
        Welcome to My Company Dashboard
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div onClick={loadProducts} className="cursor-pointer bg-white p-6 rounded-xl shadow-lg text-center hover:bg-blue-100">
          <h2 className="text-5xl font-bold text-blue-600">194</h2>
          <p className="mt-3 font-semibold">Products</p>
        </div>

        <div onClick={loadClients} className="cursor-pointer bg-white p-6 rounded-xl shadow-lg text-center hover:bg-green-100">
          <h2 className="text-5xl font-bold text-green-600">80+</h2>
          <p className="mt-3 font-semibold">Clients</p>
        </div>

        <div onClick={loadEmployees} className="cursor-pointer bg-white p-6 rounded-xl shadow-lg text-center hover:bg-purple-100">
          <h2 className="text-5xl font-bold text-purple-600">25+</h2>
          <p className="mt-3 font-semibold">Employees</p>
        </div>

        <div onClick={() => setSection("services")} className="cursor-pointer bg-white p-6 rounded-xl shadow-lg text-center hover:bg-red-100">
          <h2 className="text-5xl font-bold text-red-600">6</h2>
          <p className="mt-3 font-semibold">Services</p>
        </div>
      </div>

      {section === "products" && (
        <div>
          <h2 className="text-3xl font-bold text-center my-8">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow-lg p-4">
                <img src={p.thumbnail} alt={p.title} className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-xl font-bold mt-3">{p.title}</h3>
                <p>{p.description}</p>
                <p className="font-bold text-blue-600">₹ {p.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {(section === "clients" || section === "employees") && (
        <div>
          <h2 className="text-3xl font-bold text-center my-8">
            {section === "clients" ? "Clients" : "Employees"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {users.map((u) => (
              <div key={u.id} className="bg-white rounded-xl shadow-lg p-4 text-center">
                <img src={u.image} alt={u.firstName} className="w-24 h-24 rounded-full mx-auto" />
                <h3 className="text-xl font-bold mt-3">{u.firstName} {u.lastName}</h3>
                <p>{u.email}</p>
                <p>{u.phone}</p>
                <p>{u.company?.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {section === "services" && (
        <div>
          <h2 className="text-3xl font-bold text-center my-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
