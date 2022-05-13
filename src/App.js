import logo from './logo.svg';
import './App.css';
import CardRCC from './Components/CardRCC';
import CardRFC from './Components/CardRFC';
import BTLayout from './Components/BTLayout/BTLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import StyleComponent from './StyleComponent/StyleComponent.js';
import TangGiamFontSize from './StateDemo/TangGiamFontSize';
import ThayDoiMauSac from './StateDemo/ThayDoiMauSac';
import BaiTapChonXe from './StateDemo/BaiTapChonXe';
import RenderArray from './RenderArray/RenderArray';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesShop from './Props/ShoesShop/ShoesShop';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';
import TangGiamSoLuong from './DemoRedux/TangGiamSoLuong/TangGiamSoLuong';
import BaiTapThuKinh from './BaiTapThuKinh/BaiTapThuKinh';
import BaiTapChonXeRedux from './DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux';
import BaiTapGioHangRedux from './DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
import { BaiTapGameXucXac } from './DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac';
import BaiTapBookingTicket from './DemoRedux/BaiTapBookingTicket/BaiTapBookingTicket';
//Cấu hình route cho app component
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HeaderHome from './Components/HeaderHome/HeaderHome';
import Profile from './pages/Profile/Profile';
import Detail from './pages/Detail/Detail';
import Search from './pages/Search/Search';
import BaiTapQuanLyNguoiDung from './pages/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';
import LifeCycle from './pages/LifeCycle/LifeCycle';
import DemoUseState from './hooks/DemoUseState/DemoUseState';
import DemoUseEffect from './hooks/DemoUseEffect/DemoUseEffect';
import ApiRcc from './pages/Api/DemoApi/ApiRcc';
import ApiRfc from './pages/Api/DemoApi/ApiRfc';
import CustomHooks from './hooks/CustomHooks/CustomHooks'
import TangGIamSoLuongHooks from './DemoRedux/TangGIamSoLuongHooks/TangGIamSoLuongHooks'
import ApiReduxHooks from './pages/Api/DemoApi/ApiReduxHooks';
import DemoUseCallback from './hooks/DemoUseCallback/DemoUseCallback';
import DemoUseMemo from './hooks/DemoUseMemo/DemoUseMemo';
import DemoUseRef from './hooks/DemoUseRef/DemoUseRef';
import ToDoListApp from './pages/DemoThunk/ToDoListApp';
function App() {
  return (
    
    <BrowserRouter>
    {/* <HeaderHome /> */}
    <HeaderHome/>
    <Switch>
      <Route exact path={'/home'} render={(propsRoute)=>{//propsRoute: this.props.history, this.props.location, this.props.match
          return <div>
            {/* <HeaderHome/> */}
            <Home {...propsRoute} />    
          </div>
      }} />
      <Route exact path={'/contact'} component={Contact} />
      <Route exact path={'/about'} component={About} />
      <Route exact path={'/login'} component={Login} />
      <Route exact path={'/register'} component={Register} />
      <Route exact path={'/profile'} component={Profile} />
      <Route exact path={'/search'} component={Search} />
      <Route exact path={'/detail/:postid'} component={Detail} />
      <Route exact path={'/btqlnd'} component={BaiTapQuanLyNguoiDung} />
      <Route exact path={'/lifecycle'} component={LifeCycle} />
      <Route exact path={'/usestate'} component={DemoUseState} />
      <Route exact path={'/useeffect'} component={DemoUseEffect} />
      <Route exact path={'/apircc'} component={ApiRcc} />
      <Route exact path={'/apirfc'} component={ApiRfc} />
      <Route exact path={'/customhook'} component={CustomHooks} />
      <Route exact path={'/reduxhooks'} component={TangGIamSoLuongHooks} />
      <Route exact path={'/apireduxhooks'} component={ApiReduxHooks} />
      <Route exact path={'/usecallback'} component={DemoUseCallback} />
      <Route exact path={'/usememo'} component={DemoUseMemo} />
      <Route exact path={'/useref'} component={DemoUseRef} />
      <Route exact path={'/todolistapp'} component={ToDoListApp} />
      <Route exact path={'/'} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
