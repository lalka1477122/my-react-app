import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import s from "./QrcodeGenerator.module.css";

export let QrcodeGenerator = () => {
  let [q, setq] = useState("пустой qrcode");
  let [z, setZ] = useState("инпат");
  let [x, setX] = useState(false);

  const onclickHandler = function () {
    if (z != "") {
      setX(true);
      setq(z);
      setZ("");
    } else {
      alert("инпут пуст");
    }
  };

  const onCange = function (event) {
    setX(false);
    z = event.target.value;
    setZ(event.target.value);
    console.log(z);
  };

  return (
    <div className={s.container}>
      <input
        className={s.input}
        type="text"
        value={z}
        onChange={onCange}></input>
      <button className={s.button} onClick={onclickHandler} type="button">
        сгенить
      </button>
      {x && <QRCodeSVG value={q} />}
    </div>
  );
};
