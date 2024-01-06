import { CDN_URL } from "../../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between"
        >
          <div>
            <span>{item.card.info.name}</span>
            <span>
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <img className="w-24" src={CDN_URL + item.card.info.imageId} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
