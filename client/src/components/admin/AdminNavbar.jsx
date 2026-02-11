import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img className="w-10 h-auto" src={assets.logo} alt="logo" />
          <span className="text-lg font-semibold text-white">MaiShow</span>
        </div>
      </Link>
    </div>
  );
};

export default AdminNavbar;
