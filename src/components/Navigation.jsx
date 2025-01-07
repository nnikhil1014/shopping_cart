import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between max-w-4xl mx-auto">
        <Link to="/" className="text-lg font-semibold hover:text-gray-300">
          Home
        </Link>
        <Link to="/cart" className="text-lg font-semibold hover:text-gray-300">
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
