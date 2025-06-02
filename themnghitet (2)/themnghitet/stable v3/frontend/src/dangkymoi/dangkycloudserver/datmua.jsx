import React, { useState } from "react";
import "./datmua.css";
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const MuaCloudServer = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(""); // New state for the selected version
  const [supportRequest, setSupportRequest] = useState("");

  const templates = [
    { 
      name: "Plesk", 
      versions: ["Obsidian 18.0.47 - PHP 8", "Onyx 17.8.11 - PHP 7.4", "Onyx 17.5.3 - PHP 7.3"], 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Logo_Plesk.svg/220px-Logo_Plesk.svg.png" 
    },
    { 
      name: "CentOS", 
      versions: ["7.9", "7.8", "7.7"], 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Centos-logo-light.svg/250px-Centos-logo-light.svg.png" 
    },
    { 
      name: "Rocky Linux", 
      versions: ["8.4", "8.3", "8.2"], 
      image: "https://www.pnc.jp/blog/wp-content/uploads/2021/11/Rocky.png" 
    },
    { 
      name: "Ubuntu", 
      versions: ["18.04", "20.04", "16.04"], 
      image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2023_4_27_638182006866391692_ubuntu-la-gi.jpg" 
    },
    { 
      name: "Debian", 
      versions: ["9.4", "10.0", "11.0"], 
      image: "https://www.easyredmine.com/EasyRedmine/media/images/articles/p14/f3704/debian-gnu-linux-8-jessie-reached-end-of-life-upgrade-to-debian-stretch-now-521586-2.jpg?width=1920&height=0&rmode=min&quality=75&token=a7vd96XfaUO%2Bniyr13y7Er0VdEJpUGpsapr6kxMghEo%3D" 
    },
  ];
  
  const handleTemplateSelect = (templateName) => {
    setSelectedTemplate(templateName);
    setSelectedVersion(""); // Reset version when a new template is selected
  };

  const handleVersionSelect = (event) => {
    setSelectedVersion(event.target.value);
  };

  const handleSupportRequestChange = (event) => {
    setSupportRequest(event.target.value);
  };

  const handleContinue = () => {
    if (!selectedVersion) {
      alert("Please select a version before continuing.");
      return;
    }
    alert(`Selected Template: ${selectedTemplate}\nSelected Version: ${selectedVersion}\nSupport Request: ${supportRequest}`);
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Hệ điều hành - Template:</p>
          </div>
        </div>
        <div className="os-app-container">
          <div className="os-template-container">
            {templates.map((template) => (
              <div
                key={template.name}
                className={`os-template-card ${selectedTemplate === template.name ? "os-selected" : ""}`}
                onClick={() => handleTemplateSelect(template.name)}
              >
                <img src={template.image} alt={template.name} className="os-template-image" />
                <h3 className="os-template-name">{template.name}</h3>
                {selectedTemplate === template.name && (
                  <select className="os-template-select" value={selectedVersion} onChange={handleVersionSelect}>
                    <option value="">Select Version</option>
                    {template.versions.map((version) => (
                      <option key={version} value={version}>
                        {version}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
          </div>
          <div className="os-support-request">
            <h2 className="os-support-header">Yêu cầu hỗ trợ:</h2>
            <textarea
              className="os-support-textarea"
              value={supportRequest}
              onChange={handleSupportRequestChange}
              placeholder="Nhập yêu cầu hỗ trợ của bạn..."
            />
          </div>
          <a href="/giohang"><button className="os-continue-button" onClick={handleContinue}>
            Tiếp tục ➔
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default MuaCloudServer;
