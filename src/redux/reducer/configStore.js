import { combineReducers, createStore } from "redux";
import { gameXucXacReducer } from "./gameXucXacReducer";
import { gioHangReducer } from "./gioHangReducer";
import { stateNumber } from "./numberReducer";
import { stateImgCar } from "./stateImgCarReducer";
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDungReducer";


const rootReducer = combineReducers({
  stateNumber: stateNumber,
  stateImgCar: stateImgCar,
  gioHangReducer: gioHangReducer,
  gameXucXacReducer,
  BaiTapDatVeReducer,
  quanLyNguoiDungReducer:quanLyNguoiDungReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
