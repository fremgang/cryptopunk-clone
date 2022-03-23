import "./CollectionCard.css";

import weth from "../assets/weth.png";


const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="NFT Image" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="Ethereum" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
