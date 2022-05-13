import React from "react";
import { useSelector, useDispatch } from "react-redux";

//useSelector là 1 hooks giúp kết nối tới redux store và lấy state về cho component
//useDispatch là 1 hooks giúp dispatch 1 redux action lên redux store
export default function TangGIamSoLuongHooks() {
  const stateNumber = useSelector((rootState) => rootState.stateNumber);

  const dispatch = useDispatch();

  const tangGiamSoLuong = (soLuong) => {
    //Tạo action
    const action = {
      type: "TANG_GIAM_SO_LUONG",
      soLuong: soLuong,
    };
    dispatch(action);
  };
  return (
    <div>
      <p>stateNumber:{stateNumber}</p>
      <button
        onClick={() => {
          tangGiamSoLuong(-1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          tangGiamSoLuong(1);
        }}
      >
        +
      </button>
    </div>
  );
}
