import React from "react";

const Card = (props) => {
  return (
    <div key={props.idx}>
      <a href={props.elem.url} target="_blank">
        <div className="h-40 w-44 bg-white rounded-xl">
          <img
            className="h-full w-full rounded object-cover"
            src={props.elem.download_url}
            alt=""
          />
        </div>
      </a>
      <h2 className="font-bold text-lg">{props.elem.author}</h2>
    </div>
  );
};

export default Card;
