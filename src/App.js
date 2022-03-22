import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header.js";
import PunkList from "./components/PunkList.js";
import Main from "./components/Main.js";

import "./App.css";


function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const wallet = "0xE547ac1Ba178351fa7428EBFc9763A448666B15e";
    const url = `https://testnets-api.opensea.io/assets?asset_contract_address=${wallet}&order_direction=asc`;

    const getMyNft = async () => {
      const openseaData = await axios.get(url);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNft();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
