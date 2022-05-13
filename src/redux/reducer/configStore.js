import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { gameXucXacReducer } from "./gameXucXacReducer";
import { gioHangReducer } from "./gioHangReducer";
import { stateNumber } from "./numberReducer";
import { stateImgCar } from "./stateImgCarReducer";
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDungReducer";
import {tasksReducer} from './tasksReducer'
import { toDoListReducer } from "./toDoListReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
//import redux thunk

const rootReducer = combineReducers({
  stateNumber: stateNumber,
  stateImgCar: stateImgCar,
  gioHangReducer: gioHangReducer,
  gameXucXacReducer,
  BaiTapDatVeReducer,
  quanLyNguoiDungReducer:quanLyNguoiDungReducer,
  tasksReducer,
  toDoListReducer
});

const middleware = [
  thunk,
];
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));
