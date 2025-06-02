import React from 'react';
import './banggia.css';
import Header from '../Header';
import Sidebar from '../Sidebar';

const vietnamDomains = [
  { name: 'Domain .vn', registration: '770,000đ/năm ', renewal: '482,000đ/năm ' },
  { name: 'Domain .com.vn', registration: '648,000đ/năm ', renewal: '349,000đ/năm' },
  { name: 'Domain .net.vn| Domain .biz.vn', registration: '648,000đ/năm ', renewal: '349,000đ/năm ' },
  { name: 'Domain .name.vn', registration: '76,500đ/năm ', renewal: '46,500đ/năm ' },
  { name: 'Domain .org.vn | Domain .gov.vn | Domain .pro.vn | Domain .info.vn | Domain .ac.vn | Tên miền địa giới hành chính ', registration: '413,000đ/năm', renewal: '205,000đ/năm' },
];

const internationalDomains = [
  { name: 'Domain .com', registration: '396,000đ/năm ', renewal: '396,000đ/năm ' },
  { name: 'Domain .asia', registration: '342,100đ/năm ', renewal: '342,100đ/năm ' },
  { name: 'Domain .net', registration: '462,000đ/năm  ', renewal: '462,000đ/năm ' },
  { name: 'Domain .org', registration: '352,000đ/năm ', renewal: '352,000đ/năm ' },
  { name: 'Domain .info', registration: '715,000đ/năm ', renewal: '715,000đ/năm ' },
  { name: 'Domain .rodeo', registration: '700,700đ/năm ', renewal: '700,700đ/năm ' },
  { name: 'Domain .company', registration: '182,600đ/năm', renewal: '182,600đ/năm ' },
  { name: 'Domain .link', registration: '249,700đ/năm ', renewal: '249,700đ/năm ' },
  { name: 'Domain .us', registration: '216,700đ/năm ', renewal: '216,700đ/năm ' },
  { name: 'Domain .com.co', registration: '297,000đ/năm ', renewal: '297,000đ/năm ' },
  { name: 'Domain .net.co', registration: '253,000đ/năm ', renewal: '253,000đ/năm ' },
  { name: 'Domain .nom.co | Domain .desi', registration: '34,833đ/năm ', renewal: '34,833đ/năm ' },
  { name: 'Domain .photography | Domain .technology | Domain .photos | Domain .equipment | Domain .gallery | Domain .graphics | Domain .lighting | Domain .directory | Domain .today | Domain .tips | Domain .systems | Domain .agency | Domain .management | Domain .report | Domain .center | Domain .supply | Domain .support | Domain .supplies | Domain .exposed | Domain .email | Domain .solutions | Domain .education | Domain .institute | Domain .international | Domain .schule | Domain .city | Domain .reisen', registration: '459,999đ/năm', renewal: '459,999đ/năm' },
  { name: 'Domain .name', registration: '225,500đ/năm ', renewal: '225,500đ/năm ' },
  { name: 'Domain .pw', registration: '216,700đ/năm ', renewal: '216,700đ/năm ' },
  { name: 'Domain .biz', registration: '660,000đ/năm', renewal: '660,000đ/năm ' },
  { name: 'Domain .futbol | Domain .xyz | Domain .rocks', registration: '287,100đ/năm ', renewal: '287,100đ/năm ' },
  { name: 'Domain .pictures', registration: '262,900đ/năm ', renewal: '262,900đ/năm ' },
  { name: 'Domain .audio | Domain .hiphop | Domain .guitars | Domain .blackfriday', registration: '3,479,300đ/năm ', renewal: '3,479,300đ/năm' },
  { name: 'Domain .juegos', registration: '10,423,600đ/năm ', renewal: '10,423,600đ/năm ' },
  { name: 'Domain .bz', registration: '1,263,900đ/năm ', renewal: '1,263,900đ/năm ' },
  { name: 'Domain .ws', registration: '741,400đ/năm ', renewal: '741,400đ/năm' },
  { name: 'Domain .me', registration: '759,000đ/năm ', renewal: '759,000đ/năm' },
  { name: 'Domain .ninja', registration: '416,900đ/năm ', renewal: '416,900đ/năm ' },
  { name: 'Domain .gratis | Domain .network', registration: '452,100đ/năm', renewal: '452,100đ/năm ' },
  { name: 'Domain .website | Domain .reviews | Domain .dance', registration: '502,700đ/năm ', renewal: '502,700đ/năm ' },
  { name: 'Domain .bargains | Domain .vacations | Domain .works | Domain .guru | Domain .land | Domain .bike | Domain .clothing | Domain .singles | Domain .estate | Domain .contractors | Domain .construction | Domain .enterprises | Domain .domains | Domain .academy | Domain .computer | Domain .training | Domain .builders | Domain .coffee | Domain .cash | Domain .digital | Domain .associates | Domain .media | Domain .cheap | Domain .zone | Domain .boutique | Domain .farm | Domain .services | Domain .vision | Domain .fish | Domain .tools | Domain .parts | Domain .industries | Domain .pub | Domain .community | Domain .catering | Domain .cards | Domain .marketing | Domain .events | Domain .productions | Domain .democrat | Domain .foundation | Domain .properties | Domain .social | Domain .rentals | Domain .immobilien | Domain .watch | Domain .cool | Domain .repair | Domain .florist | Domain .house | Domain .exchange | Domain .gripe | Domain .moda | Domain .discount | Domain .fitness | Domain .church | Domain .life | Domain .guide | Domain .direct | Domain .place | Domain .deals | Domain .kaufen | Domain .consulting | Domain .town | Domain .fail | Domain .limited | Domain .wtf | Domain .care | Domain .republican | Domain .vet | Domain .haus', registration: '694,100đ/năm', renewal: '694,100đ/năm ' },
  { name: 'Domain .gift', registration: '469,700đ/năm ', renewal: '469,700đ/năm ' },
  { name: 'Domain .plumbing | Domain .camera | Domain .kitchen | Domain .shoes | Domain .toys | Domain .cleaning | Domain .camp | Domain .glass | Domain .solar | Domain ', registration: '1,131,900đ/năm ', renewal: '1,131,900đ/năm ' },
];

function BangGia() {
  return (

    <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="container">
      <div className="Dashboard">
        <div className="icon-dashboard">
          <i className="fa-solid fa-bars"></i>
          <p>Bảng Giá Tên Miền</p>
        </div>   
      </div>
      <div className="slide-bar"></div>
      <div className="pricing-table">
        <h2>
        <img src="https://static-00.iconduck.com/assets.00/fire-icon-1513x2048-1ztytpky.png" alt="" width={30} height={35}/> TÊN MIỀN VIỆT NAM  <img src="https://static-00.iconduck.com/assets.00/fire-icon-1513x2048-1ztytpky.png" alt="" width={30} height={35}/>
        </h2>
        <table>
          <thead>
            <tr>
              <th>TÊN MIỀN .VN</th>
              <th>ĐĂNG KÝ MỚI (Giá đã bao gồm VAT)</th>
              <th>GIA HẠN (Giá đã bao gồm VAT)</th>
            </tr>
          </thead>
          <tbody>
            {vietnamDomains.map((domain, index) => (
              <tr key={index}>
                <td>{domain.name}</td>
                <td>{domain.registration}</td>
                <td>{domain.renewal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pricing-table">
        <h2>
        <img src="https://static-00.iconduck.com/assets.00/fire-icon-1513x2048-1ztytpky.png" alt="" width={30} height={35}/> TÊN MIỀN QUỐC TẾ <img src="https://static-00.iconduck.com/assets.00/fire-icon-1513x2048-1ztytpky.png" alt="" width={30} height={35}/>
        </h2>
        <table class = "bangia-table">
          <thead>
            <tr>
              <th>TÊN MIỀN</th>
              <th>ĐĂNG KÝ MỚI (Giá đã bao gồm VAT) (Chiết khấu 20%)</th>
              <th>GIA HẠN (Giá đã bao gồm VAT) (Chiết khấu 15%)</th>
            </tr>
          </thead>
          <tbody>
            {internationalDomains.map((domain, index) => (
              <tr key={index}>
                <td>{domain.name}</td>
                <td>{domain.registration}</td>
                <td>{domain.renewal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default BangGia;
