import { useState, useEffect } from "react";

import InstagramLogo from "../assets/owner/instagram.png";
import TwitterLogo from "../assets/owner/twitter.png";
import MoreIcon from "../assets/owner/more.png";

import "./Main.css";


const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_url}
              alt="Active punk"
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImage">
            <img
              src="https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg"
              alt="Owner"
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>{activePunk.owner.address}</div>
              <div className="ownerHandle">@pakavi</div>
            </div>
            <div className="ownerLink">
              <img src={InstagramLogo} alt="Instagram" />
            </div>
            <div className="ownerLink">
              <img src={TwitterLogo} alt="Twitter" />
            </div>
            <div className="ownerLink">
              <img src={MoreIcon} alt="More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
