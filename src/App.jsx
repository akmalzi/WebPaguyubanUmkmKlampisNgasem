import Beranda from "./page/Beranda";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaftarUMKM from "./page/DaftarUMKM";
import Berita from "./page/Berita";
import HubungiKami from "./page/HubungiKami";
import ScrollToTop from "./component/ScrollToTop";
import DetailUMKM from "./page/DetailUMKM";

function App() {
  return (
    <>
      <div className="w-screen h-auto">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/daftarumkm" element={<DaftarUMKM />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/hubungi" element={<HubungiKami />} />
            <Route path="/detail" element={<DetailUMKM />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
