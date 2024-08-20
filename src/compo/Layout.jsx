import { Routes, Route } from "react-router-dom";
import { QrcodeGenerator } from "./generator/QrcodeGenerator";
import { Qrcodescan } from "./scan/Qrcodescan";
import { Navigation } from "./Navi/Navigation";
const Layout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/generete" element={<QrcodeGenerator />}></Route>
        <Route path="/scan" element={<Qrcodescan />}></Route>
      </Routes>
    </div>
  );
};

export { Layout };
