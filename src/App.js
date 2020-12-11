import { useState } from "react";

import Html5QrcodeScannerPlugin from "./components/Html5QrcodeScannerPlugin";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <h1>Сканнер</h1>
    
      <Html5QrcodeScannerPlugin
        fps={10}
        qrBox={250}
        disableFlip={false}
        qrCodeSuccessCallback={(mesg) => {
          setData(mesg)
        }}
        qrCodeErrorCallback={(error) => {
          console.error(error);
        }}
      />
      { data && 
      <>
      <h3>данные с чека {data}</h3>
      </>}
    </div>
  );
}

export default App;
