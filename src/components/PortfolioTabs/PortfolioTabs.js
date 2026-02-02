import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import India from "../India/India.js";
import Odisha from "../Odisha/Odisha.js";
import DistrictList from "../DistrictList/DistrictList.js";
import DistrictDetails from "../DistrictDetails/DistrictDetails.js";
import State from "../State/State.js";

import "./PortfolioTabs.css";
const colorizeWords = (text) => {  
  const colors = [
    "#e63946", "#457b9d", "#ffb703", "#8d99ae", "#06d6a0", "#ef476f",
    "#118ab2", "#ff7f51", "#073b4c", "#7b2cbf", "#f72585", "#4361ee",
    "#4cc9f0", "#ff9e00"
  ];

  const words = text.split(" ");

  return words.map((word, index) => (
    <span key={index} style={{ color: colors[index % colors.length], marginRight: "6px" }}>
      {word}
    </span>
  ));
};

const PortfolioTabs = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  return (
    <div className="container py-5">

      {/* Header Box */}
      <div className="header-box text-center mb-4">
        <h2 className="fw-bold mb-1" style={{ color: "#007bff" }}>
          Odisha Portfolio
        </h2>
        <p className="text-muted mb-0">India → Odisha → District Information</p>
      </div>

      {/* Tabs */}
      <Tabs defaultActiveKey="india" className="mb-4 custom-tabs" justify>

        <Tab eventKey="india" title="India">
          <div className="tab-content-box shadow-sm">
            <India />
          </div>
        </Tab>

        <Tab eventKey="state" title="State">
          <div className="tab-content-box shadow-sm">
            <State />
          </div>
        </Tab>

        <Tab eventKey="odisha" title="Odisha" >
          <div className="tab-content-box shadow-sm row">
            <Odisha />
          </div>
        </Tab>

        <Tab eventKey="districts" title="Districts">

          {/* Styled Quote Section */}
          <div className="text-center my-4">
            <p
              className="fw-bold px-3 py-3 mx-auto rounded shadow"
              style={{
                maxWidth: "1520px",
                // background: "#fff",
                fontSize: "22px",
                // borderLeft: "6px solid #ff6f61",
                // borderRight: "6px solid #ff6f61",
                lineHeight: "38px"
              }}
            >
              {colorizeWords("ବୌଦେ ଭରା କନକ ବଗ, ବାପୁ ଅଯା କେ ସୁମନ ମାଗ, ସନୁ ବସୁ ଝାଜେ କୋକ କେ ଖୋଜ")}
            </p>
          </div>


          <div className="row tab-content-box shadow-sm p-4">

            {/* District List */}
            <div className="col-md-6">
              <DistrictList onSelect={setSelectedDistrict} />
            </div>

            {/* District Details */}
            <div className="col-md-6">
              <div className="district-card p-3">
                <DistrictDetails districtKey={selectedDistrict} />
              </div>
            </div>

          </div>
        </Tab>

      </Tabs>
    </div>
  );
};

export default PortfolioTabs;
