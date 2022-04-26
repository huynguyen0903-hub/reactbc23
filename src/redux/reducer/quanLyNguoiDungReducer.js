const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyevana",
      matKhau: "123456",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "0909090909",
      email: "nguyenvana@gmail.com",
      loaiNguoiDung: "QuanTri",
    },
    {
      taiKhoan: "nguyevanb",
      matKhau: "988979",
      hoTen: "Nguyễn Văn B",
      soDienThoai: "0808080808",
      email: "nguyenvanb@gmail.com",
      loaiNguoiDung: "NguoiDung",
    },
  ],
  nguoiDungSua:{
    taiKhoan: "nguyevanb",
    matKhau: "988979",
    hoTen: "Nguyễn Văn B",
    soDienThoai: "0808080808",
    email: "nguyenvanb@gmail.com",
    loaiNguoiDung: "NguoiDung"
  }
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
      case'DANG_KY':{
          state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]

          return {...state};
      }
      case 'XOA_NGUOI_DUNG':{
          state.mangNguoiDung = [...state.mangNguoiDung.filter(nd=>nd.taiKhoan !== action.taiKhoan)];
          return {...state};
      }
      case 'SUA_NGUOI_DUNG':{
          state.nguoiDungSua = action.nguoiDung;
          return {...state}
      }
    default:
      return state;
  }
};
