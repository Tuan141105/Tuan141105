import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Info from './account/thongtincanhan/thongtincanhan.jsx';
import DKTM from './api/dangkytenmien/dangkytenmien.jsx';
import DownloadPage from './api/gioithieuchung/gioithieuchung.jsx';
import DownloadPlugin from './api/huongdansudung/huongdansudung.jsx';
import KTTM from './api/kiemtratenmien/kiemtratenmien.jsx';
import TheoDanhSach from './api/laydanhsachsanpham/laydanhsachsanpham.jsx';
import TheoID from './api/laysanphamtheoid/laytheoid.jsx';
import App from './App.jsx';
import BangGia from './banggia/banggia.jsx';
import FeedbackForm from './baoloivagopychucnang/baoloi.jsx';
import CauHinhDaiLy from './cauhinh/cauhinhdaily/cauhinhdaily.jsx';
import CauHinhGia from './cauhinh/cauhinhgiasanpham/cauhinhgia.jsx';
import ChuKySo from './dangkymoi/dangkychukyso/dangkychukyso.jsx';
import CloudBackup from './dangkymoi/dangkycloudbackup/dangkycloudbackup.jsx';
import CloudServer from './dangkymoi/dangkycloudserver/dangkycloudserver.jsx';
import MuaCloudServer from './dangkymoi/dangkycloudserver/datmua.jsx';
import CloudServerPro from './dangkymoi/dangkycloudserverpro/dangkycloudserverpro.jsx';
import EmailServer from './dangkymoi/dangkyemailserver/dangkyemailserver.jsx';
import HoaDonDienTu from './dangkymoi/dangkyhoadondientu/dangkyhoadondientu.jsx';
import Hosting from './dangkymoi/dangkyhosting/dangkyhosting.jsx';
import SSL from './dangkymoi/dangkyssl/dangkyssl.jsx';
import TongDaiAo from './dangkymoi/dangkytongdaiao/dangkytongdaiao.jsx';
import NewRequest from './hotro/guiyeucau/guiyeucau.jsx';
import './index.css';
import BanKhai from './khachhang/bankhai/bankhai.jsx';
import CustomerList from './khachhang/danhsach/danhsach.jsx';
import AddNew from './khachhang/themmoi/themmoi.jsx';
import Login from './login/login.jsx';
import OrderList from './order/order.jsx';
import NapTien from './quanlytaikhoan/naptien/naptien.jsx';
import TransactionList from './quanlytaikhoan/taikhoanchinh/taikhoanchinh.jsx';
import VoucherList from './quanlytaikhoan/taikhoankhuyenmai/taikhoankhuyenmai.jsx';
import AllService from './service/tatcadichvu/tatca.jsx';
import Cart from './shoppingcart.jsx';
import TraLoiHoTro from './traloihotro/traloihotro.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/traloihotro",
    element: <TraLoiHoTro />,
  },
  {
    path: "/giohang",
    element: <Cart />,
  },
  {
    path: "/danhsachdonhang",
    element: <OrderList />,
  },
  {
    path: "/guiyeucau",
    element: <NewRequest />,
  },
  {
    path: "/theodanhsach",
    element: <TheoDanhSach />,
  },
  {
    path: "/hoadondientu",
    element: <HoaDonDienTu />,
  },
  {
    path: "/email_server",
    element: <EmailServer />,
  },
  {
    path: "/tatcadichvu",
    element: <AllService />,
  },
  {
    path: "/naptien",
    element: <NapTien />,
  },
  {
    path: "/user/feedback",
    element: <FeedbackForm />,
  },
  {
    path: "/taikhoanchinh",
    element: <TransactionList />,
  },
  {
    path: "/taikhoankhuyenmai",
    element: <VoucherList />,
  },
  {
    path: "/danhsachkhachhang",
    element: <CustomerList />,
  },
  {
    path: "/bankhaikhachhang",
    element: <BanKhai />,
  },
  {
    path: "/kiemtratenmien",
    element: <KTTM />,
  },
  {
    path: "/dangkytenmien",
    element: <DKTM />,
  },
  {
    path: "/chukyso",
    element: <ChuKySo />,
  },
  {
    path: "/cloudbackup",
    element: <CloudBackup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/gioithieuchung",
    element: <DownloadPage />,
  },
  {
    path: "/huongdansudung",
    element: <DownloadPlugin />,
  },
  {
    path: "/vps",
    element: <CloudServer />,
  },
  {
    path: "/cloud_server_pro",
    element: <CloudServerPro />,
  },
  {
    path: "/hosting",
    element: <Hosting />,
  },
  {
    path: "/banggia",
    element: <BangGia />,
  },
  {
    path: "/products/taduphone",
    element: <TongDaiAo />,
  },
  {
    path: "/products/ssl",
    element: <SSL />,
  },
  {
    path: "/laysanphamtheoid",
    element: <TheoID />,
  },
  {
    path: "/thongtincanhan",
    element: <Info />,
  },
  {
    path: "/cauhinhdaily",
    element: <CauHinhDaiLy />,
  },
  {
    path: "/themkhachhangmoi",
    element: <AddNew />,
  },
  // {
  //   path: "/user/ticket/create",
  //   element: <NewRequest />,
  // }
  {
    path: "/cauhinhgia",
    element: <CauHinhGia />,
  },
  {
    path: "/products/vps/order/",
    element: <MuaCloudServer />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
);
