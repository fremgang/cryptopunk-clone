import CollectionCard from "./CollectionCard.js";

import "./PunkList.css";


const PunkList = ({ punkListData }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk) => {
        return (
          <div>
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PunkList;
