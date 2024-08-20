import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import s from "./Qrcodescan.module.css";

export const Qrcodescan = () => {
  let [tgScan, settgScan] = useState("ТУТ ЧЕТО должно быть");
  const scanHandler = (scanner) => {
    settgScan(Object.entries(scanner[0])[1][1]);
  };
  return (
    <div className={s.container}>
      <Scanner
        components={{
          zoom: true,
          finder: true,
          audio: false
        }}
        styles={{
          container: {
            height: "30%",
            width: "30%"
          }
        }}
        allowMultiple
        onScan={scanHandler}
      />
      <a className={s.result} href={tgScan}>
        {tgScan}
      </a>
    </div>
  );
};
