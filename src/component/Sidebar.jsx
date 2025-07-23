import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // opsional icon

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="md:hidden sticky top-0 z-10">
      {/* Button untuk buka sidebar */}
      <button className="p-4" onClick={() => setSidebarOpen(true)}>
        <Menu size={28} />
      </button>

      {/* Overlay gelap */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            Beranda
          </Link>
          <Link to="/berita" onClick={() => setSidebarOpen(false)}>
            Berita
          </Link>
          <Link to="/daftarumkm" onClick={() => setSidebarOpen(false)}>
            UMKM
          </Link>
          <Link to="/tentang" onClick={() => setSidebarOpen(false)}>
            Tentang
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
