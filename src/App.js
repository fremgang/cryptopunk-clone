import "./App.css";

import Header from "./components/Header.js";
import CollectionCard from "./components/CollectionCard.js";


function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={1}
        name={"CP Punk 1"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg"
      />
    </div>
  );
}

export default App;
