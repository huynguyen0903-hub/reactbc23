import React, { useCallback, useState } from "react";
import Comment from "./Comment";

export default function DemoUseCallback() {
  const [like, setLike] = useState(1);

  const [number, setNumber] = useState(1);

  const renderNotify = () => {
    return `Bạn đã thả ${like} ♥!`;
  };

  const renderNotifyCallback = useCallback(renderNotify, [like]);

  return (
    <div className="m-5">
      <p>Number: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <br />
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderNotify={renderNotifyCallback} />
    </div>
  );
}
