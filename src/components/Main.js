import "./Main.css";

import InstagramLogo from "../assets/owner/instagram.png";
import TwitterLogo from "../assets/owner/twitter.png";
import MoreIcon from "../assets/owner/more.png";


const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src="https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg"
              alt="Active punk"
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">CP Punk 1</div>
          <span className="itemNumber">#1</span>
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
              <div>0xE547ac1Ba178351fa7428EBFc9763A448666B15e</div>
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
