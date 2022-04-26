const stateDefault = [
//   {
//     maSP: 1,
//     tenSP: "Iphone",
//     hinhAnh: "./img/products/black.jpg",
//     giaBan: 1000,
//     soLuong: 1,
//   },
];

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
      case 'THEM_GIO_HANG': {
          let gioHang = state;
            //kiểm tra action.spGH có trong giỏ hàng hay chưa
          let sp = gioHang.find(sp=>sp.maSP === action.spGH.maSP);
          if(sp){
              sp.soLuong += 1;
          }else {
            gioHang.push(action.spGH)
            console.log({gioHang});
          }
          
            //immutable: tính bất biến
            //Đối với state là object hoặc array phải clone ra object array mới
          return [...gioHang];
      }
      case 'XOA_GIO_HANG': {
          let gioHang = [...state];
          gioHang = gioHang.filter(sp=>sp.maSP !== action.maSPClick);
          return gioHang;
      }
      case 'TANG_GIAM_SO_LUONG': {
        let gioHang = [...state];
        //Tìm ra sp cần tăng giảm
        let sp  = gioHang.find(spGH => spGH.maSP === action.maSPClick);
        if(sp){
          sp.soLuong += action.soLuong;
          if(sp.soLuong < 1){
            alert('Số lượng không được nhỏ hơn 1');
            sp.soLuong -= action.soLuong;
            return gioHang;
          }
        }
        return gioHang;
      }
    default: return state;
  }
};
