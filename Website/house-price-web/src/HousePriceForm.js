import React, { useState } from "react";
import axios from "axios";
import "./HousePriceForm.css";

const HousePriceForm = () => {
  const defaultFormData = {
    MSSubClass: 60,
    MSZoning: 3,
    LotFrontage: 65,
    LotArea: 8450,
    Street: 1,
    LotShape: 1,
    LandContour: 1,
    Utilities: 1,
    LotConfig: 1,
    LandSlope: 1,
    Neighborhood: 1,
    Condition1: 1,
    Condition2: 1,
    BldgType: 1,
    HouseStyle: 1,
    OverallQual: 7,
    OverallCond: 5,
    YearBuilt: 2003,
    YearRemodAdd: 2003,
    RoofStyle: 1,
    RoofMatl: 1,
    Exterior1st: 1,
    Exterior2nd: 1,
    MasVnrType: 1,
    MasVnrArea: 196,
    ExterQual: 1,
    ExterCond: 1,
    Foundation: 1,
    BsmtQual: 1,
    BsmtCond: 1,
    BsmtExposure: 1,
    BsmtFinType1: 1,
    BsmtFinSF1: 706,
    BsmtFinType2: 1,
    BsmtFinSF2: 0,
    BsmtUnfSF: 150,
    TotalBsmtSF: 856,
    Heating: 1,
    HeatingQC: 1,
    CentralAir: 1,
    Electrical: 1,
    f_1stFlrSF: 856,
    f_2ndFlrSF: 854,
    LowQualFinSF: 0,
    GrLivArea: 1710,
    BsmtFullBath: 1,
    BsmtHalfBath: 0,
    FullBath: 2,
    HalfBath: 1,
    BedroomAbvGr: 3,
    KitchenAbvGr: 1,
    KitchenQual: 1,
    TotRmsAbvGrd: 8,
    Functional: 1,
    Fireplaces: 0,
    FireplaceQu: null,
    GarageType: 1,
    GarageYrBlt: 2003,
    GarageFinish: 1,
    GarageCars: 2,
    GarageArea: 548,
    GarageQual: 1,
    GarageCond: 1,
    PavedDrive: 1,
    WoodDeckSF: 0,
    OpenPorchSF: 61,
    EnclosedPorch: 0,
    f_3SsnPorch: 0,
    ScreenPorch: 0,
    PoolArea: 0,
    MiscVal: 0,
    MoSold: 2,
    YrSold: 2008,
    SaleType: 1,
    SaleCondition: 1,
    TotalSF: 2000,
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Initialize loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // Set loading to true
    setPrice(null);
    try {
      const dataToSend = {};
      Object.keys(formData).forEach((key) => {
        if (key.startsWith("f_")) {
          dataToSend[key.slice(2)] = formData[key];
        } else {
          dataToSend[key] = formData[key];
        }
      });

      const response = await axios.post(
        "http://192.168.8.102:5000/predict",
        dataToSend
      );
      setPrice(response.data.predicted_price);
    } catch (err) {
      console.error("Error predicting price:", err);
      setError("An error occurred while predicting the price.");
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div id="predict-price" className="form-container">
      <h2>Enter Property Details</h2>
      <form onSubmit={handleSubmit} className="property-form">
        {/* Property Type */}
        <div className="form-group">
          <label>Property Type</label>
          <select
            name="msSubClass"
            value={formData.msSubClass}
            onChange={handleChange}
          >
            <option value="">Select Property Type</option>
            <option value="20">1-STORY 1946 & NEWER ALL STYLES</option>
            <option value="30">1-STORY 1945 & OLDER</option>
            <option value="40">1-STORY W/FINISHED ATTIC ALL AGES</option>
            <option value="45">1-1/2 STORY - UNFINISHED ALL AGES</option>
            <option value="50">1-1/2 STORY FINISHED ALL AGES</option>
            <option value="60">2-STORY 1946 & NEWER</option>
            <option value="70">2-STORY 1945 & OLDER</option>
            <option value="75">2-1/2 STORY ALL AGES</option>
            <option value="80">SPLIT OR MULTI-LEVEL</option>
            <option value="85">SPLIT FOYER</option>
            <option value="90">DUPLEX - ALL STYLES AND AGES</option>
            <option value="120">1-STORY PUD - 1946 & NEWER</option>
            <option value="150">1-1/2 STORY PUD - ALL AGES</option>
            <option value="160">2-STORY PUD - 1946 & NEWER</option>
            <option value="180">PUD - MULTILEVEL - INCL SPLIT LEV/FOYER</option>
            <option value="190">
              2 FAMILY CONVERSION - ALL STYLES AND AGES
            </option>
          </select>
        </div>

        {/* MS Zoning */}
        <div className="form-group">
          <label>MS Zoning</label>
          <select
            name="msZoning"
            value={formData.msZoning}
            onChange={handleChange}
          >
            <option value="">Select Zoning</option>
            <option value="A">Agriculture</option>
            <option value="C">Commercial</option>
            <option value="FV">Floating Village Residential</option>
            <option value="I">Industrial</option>
            <option value="RH">Residential High Density</option>
            <option value="RL">Residential Low Density</option>
            <option value="RP">Residential Low Density Park</option>
            <option value="RM">Residential Medium Density</option>
          </select>
        </div>

        {/* Lot Frontage */}
        <div className="form-group">
          <label>Lot Frontage</label>
          <input
            type="number"
            name="lotFrontage"
            value={formData.lotFrontage}
            onChange={handleChange}
            placeholder="Linear feet of street connected"
          />
        </div>

        {/* Lot Area */}
        <div className="form-group">
          <label>Lot Area (sq ft)</label>
          <input
            type="number"
            name="lotArea"
            value={formData.lotArea}
            onChange={handleChange}
            placeholder="Lot size in square feet"
          />
        </div>

        {/* Street */}
        <div className="form-group">
          <label>Street Type</label>
          <select name="street" value={formData.street} onChange={handleChange}>
            <option value="">Select Street Type</option>
            <option value="Grvl">Gravel</option>
            <option value="Pave">Paved</option>
          </select>
        </div>

        {/* Alley */}
        <div className="form-group">
          <label>Alley Access</label>
          <select name="alley" value={formData.alley} onChange={handleChange}>
            <option value="">Select Alley Access</option>
            <option value="Grvl">Gravel</option>
            <option value="Pave">Paved</option>
            <option value="NA">No alley access</option>
          </select>
        </div>

        {/* Lot Shape */}
        <div className="form-group">
          <label>Lot Shape</label>
          <select
            name="lotShape"
            value={formData.lotShape}
            onChange={handleChange}
          >
            <option value="">Select Lot Shape</option>
            <option value="Reg">Regular</option>
            <option value="IR1">Slightly irregular</option>
            <option value="IR2">Moderately Irregular</option>
            <option value="IR3">Irregular</option>
          </select>
        </div>

        {/* Land Contour */}
        <div className="form-group">
          <label>Land Contour</label>
          <select
            name="landContour"
            value={formData.landContour}
            onChange={handleChange}
          >
            <option value="">Select Land Contour</option>
            <option value="Lvl">Near Flat/Level</option>
            <option value="Bnk">
              Banked - Quick and significant rise from street grade to building
            </option>
            <option value="HLS">
              Hillside - Significant slope from side to side
            </option>
            <option value="Low">Depression</option>
          </select>
        </div>

        {/* Utilities */}
        <div className="form-group">
          <label>Utilities</label>
          <select
            name="utilities"
            value={formData.utilities}
            onChange={handleChange}
          >
            <option value="">Select Utilities</option>
            <option value="AllPub">All public Utilities (E,G,W,& S)</option>
            <option value="NoSewr">All public utilities except sewer</option>
            <option value="NoSeWa">All public utilities except water</option>
            <option value="ELO">Electricity only</option>
          </select>
        </div>

        {/* Lot Config */}
        <div className="form-group">
          <label>Lot Configuration</label>
          <select
            name="lotConfig"
            value={formData.lotConfig}
            onChange={handleChange}
          >
            <option value="">Select Lot Configuration</option>
            <option value="Inside">Inside lot</option>
            <option value="Corner">Corner lot</option>
            <option value="CulDSac">Cul-de-sac</option>
            <option value="FR2">Frontage on 2 sides of property</option>
            <option value="FR3">Frontage on 3 sides of property</option>
          </select>
        </div>

        {/* Land Slope */}
        <div className="form-group">
          <label>Land Slope</label>
          <select
            name="landSlope"
            value={formData.landSlope}
            onChange={handleChange}
          >
            <option value="">Select Land Slope</option>
            <option value="Gtl">Gentle slope</option>
            <option value="Mod">Moderate Slope</option>
            <option value="Sev">Severe Slope</option>
          </select>
        </div>

        {/* Neighborhood */}
        <div className="form-group">
          <label>Neighborhood</label>
          <input
            type="text"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            placeholder="Physical locations within Ames city limits"
          />
        </div>

        {/* Condition 1 */}
        <div className="form-group">
          <label>Proximity to main road or railroad 1</label>
          <input
            type="text"
            name="condition1"
            value={formData.condition1}
            onChange={handleChange}
            placeholder="Proximity to main road or railroad 1"
          />
        </div>

        {/* Condition 2 */}
        <div className="form-group">
          <label>Proximity to main road or railroad 2</label>
          <input
            type="text"
            name="condition2"
            value={formData.condition2}
            onChange={handleChange}
            placeholder="Proximity to main road or railroad 2"
          />
        </div>

        {/* Building Type */}
        <div className="form-group">
          <label>Building Type</label>
          <select
            name="bldgType"
            value={formData.bldgType}
            onChange={handleChange}
          >
            <option value="">Select Building Type</option>
            <option value="1Fam">Single-family Detached</option>
            <option value="2FmCon">
              Two-family Conversion; originally built as one-family dwelling
            </option>
            <option value="Duplx">Duplex</option>
            <option value="TwnhsE">Townhouse End Unit</option>
            <option value="TwnhsI">Townhouse Inside Unit</option>
          </select>
        </div>

        {/* House Style */}
        <div className="form-group">
          <label>House Style</label>
          <select
            name="houseStyle"
            value={formData.houseStyle}
            onChange={handleChange}
          >
            <option value="">Select House Style</option>
            <option value="1Story">One story</option>
            <option value="1.5Fin">
              One and one-half story: finished all floors
            </option>
            <option value="1.5Unf">
              One and one-half story: unfinished floor
            </option>
            <option value="2Story">Two story</option>
            <option value="2.5Fin">
              Two and one-half story: finished all floors
            </option>
            <option value="2.5Unf">
              Two and one-half story: unfinished floor
            </option>
            <option value="SFoyer">Split Foyer</option>
            <option value="SLvl">Split Level</option>
          </select>
        </div>

        {/* Overall Quality */}
        <div className="form-group">
          <label>Overall Quality</label>
          <select
            name="overallQual"
            value={formData.overallQual}
            onChange={handleChange}
          >
            <option value="">Select Overall Quality</option>
            <option value="10">Very Excellent</option>
            <option value="9">Excellent</option>
            <option value="8">Very Good</option>
            <option value="7">Good</option>
            <option value="6">Above Average</option>
            <option value="5">Average</option>
            <option value="4">Below Average</option>
            <option value="3">Fair</option>
            <option value="2">Poor</option>
            <option value="1">Very Poor</option>
          </select>
        </div>

        {/* Overall Condition */}
        <div className="form-group">
          <label>Overall Condition</label>
          <select
            name="overallCond"
            value={formData.overallCond}
            onChange={handleChange}
          >
            <option value="">Select Overall Condition</option>
            <option value="10">Very Excellent</option>
            <option value="9">Excellent</option>
            <option value="8">Very Good</option>
            <option value="7">Good</option>
            <option value="6">Above Average</option>
            <option value="5">Average</option>
            <option value="4">Below Average</option>
            <option value="3">Fair</option>
            <option value="2">Poor</option>
            <option value="1">Very Poor</option>
          </select>
        </div>

        {/* Year Built */}
        <div className="form-group">
          <label>Year Built</label>
          <input
            type="number"
            name="yearBuilt"
            value={formData.yearBuilt}
            onChange={handleChange}
            placeholder="Original construction date"
          />
        </div>

        {/* Roof Style */}
        <div className="form-group">
          <label>Roof Style</label>
          <select
            name="roofStyle"
            value={formData.roofStyle}
            onChange={handleChange}
          >
            <option value="">Select Roof Style</option>
            <option value="Flat">Flat</option>
            <option value="Gable">Gable</option>
            <option value="Gambrel">Gambrel (Dutch Gable)</option>
            <option value="Hip">Hip</option>
            <option value="Mansard">Mansard</option>
            <option value="Shed">Shed</option>
          </select>
        </div>

        {/* Roof Material */}
        <div className="form-group">
          <label>Roof Material</label>
          <select
            name="roofMatl"
            value={formData.roofMatl}
            onChange={handleChange}
          >
            <option value="">Select Roof Material</option>
            <option value="ClyTile">Clay or Tile</option>
            <option value="CompShg">Standard Composition</option>
            <option value="Membran">Membrane</option>
            <option value="Metal">Metal</option>
            <option value="Roll">Roll</option>
            <option value="Tar&Grv">Gravel & Tar</option>
            <option value="WdShake">Wood Shakes</option>
            <option value="WdShngl">Wood Shingles</option>
          </select>
        </div>

        {/* Exterior 1st */}
        <div className="form-group">
          <label>Exterior Covering on House 1</label>
          <input
            type="text"
            name="exterior1st"
            value={formData.exterior1st}
            onChange={handleChange}
            placeholder="Exterior covering on house 1"
          />
        </div>

        {/* Exterior 2nd */}
        <div className="form-group">
          <label>Exterior Covering on House 2</label>
          <input
            type="text"
            name="exterior2nd"
            value={formData.exterior2nd}
            onChange={handleChange}
            placeholder="Exterior covering on house 2"
          />
        </div>

        {/* Masonry Veneer Type */}
        <div className="form-group">
          <label>Masonry Veneer Type</label>
          <select
            name="masVnrType"
            value={formData.masVnrType}
            onChange={handleChange}
          >
            <option value="">Select Masonry Veneer Type</option>
            <option value="BrkCmn">Brick Common</option>
            <option value="BrkFace">Brick Face</option>
            <option value="CBlock">Cinder Block</option>
            <option value="None">None</option>
            <option value="Stone">Stone</option>
          </select>
        </div>

        {/* Masonry Veneer Area */}
        <div className="form-group">
          <label>Masonry Veneer Area (sq ft)</label>
          <input
            type="number"
            name="masVnrArea"
            value={formData.masVnrArea}
            onChange={handleChange}
            placeholder="Masonry veneer area in square feet"
          />
        </div>

        {/* Exterior Quality */}
        <div className="form-group">
          <label>Exterior Material Quality</label>
          <select
            name="exterQual"
            value={formData.exterQual}
            onChange={handleChange}
          >
            <option value="">Select Exterior Material Quality</option>
            <option value="Ex">Excellent</option>
            <option value="Gd">Good</option>
            <option value="TA">Average/Typical</option>
            <option value="Fa">Fair</option>
            <option value="Po">Poor</option>
          </select>
        </div>

        {/* Exterior Condition */}
        <div className="form-group">
          <label>Present Condition of the Material on the Exterior</label>
          <select
            name="exterCond"
            value={formData.exterCond}
            onChange={handleChange}
          >
            <option value="">Select Exterior Condition</option>
            <option value="Ex">Excellent</option>
            <option value="Gd">Good</option>
            <option value="TA">Average/Typical</option>
            <option value="Fa">Fair</option>
            <option value="Po">Poor</option>
          </select>
        </div>

        {/* Foundation */}
        <div className="form-group">
          <label>Foundation Type</label>
          <select
            name="foundation"
            value={formData.foundation}
            onChange={handleChange}
          >
            <option value="">Select Foundation Type</option>
            <option value="BrkTil">Brick & Tile</option>
            <option value="CBlock">Cinder Block</option>
            <option value="PConc">Pour Concrete</option>
            <option value="Slab">Slab</option>
            <option value="Stone">Stone</option>
            <option value="Wood">Wood</option>
          </select>
        </div>

        {/* Basement Quality */}
        <div className="form-group">
          <label>Height of the Basement</label>
          <select
            name="bsmtQual"
            value={formData.bsmtQual}
            onChange={handleChange}
          >
            <option value="">Select Basement Quality</option>
            <option value="Ex">Excellent (100+ inches)</option>
            <option value="Gd">Good (90-99 inches)</option>
            <option value="TA">Typical (80-89 inches)</option>
            <option value="Fa">Fair (70-79 inches)</option>
            <option value="Po">Poor (&lt;70 inches)</option>
            <option value="NA">No Basement</option>
          </select>
        </div>

        {/* Basement Condition */}
        <div className="form-group">
          <label>General Basement Condition</label>
          <select
            name="bsmtCond"
            value={formData.bsmtCond}
            onChange={handleChange}
          >
            <option value="">Select Basement Condition</option>
            <option value="Ex">Excellent</option>
            <option value="Gd">Good</option>
            <option value="TA">Typical - slight dampness allowed</option>
            <option value="Fa">Fair - dampness or some cracking</option>
            <option value="Po">
              Poor - severe cracking, dampness, or leakage
            </option>
            <option value="NA">No Basement</option>
          </select>
        </div>

        {/* Basement Exposure */}
        <div className="form-group">
          <label>Walkout or Garden Level Basement Walls</label>
          <select
            name="bsmtExposure"
            value={formData.bsmtExposure}
            onChange={handleChange}
          >
            <option value="">Select Basement Exposure</option>
            <option value="Gd">Good Exposure</option>
            <option value="Av">Average Exposure</option>
            <option value="Mn">Mimimum Exposure</option>
            <option value="No">No Exposure</option>
            <option value="NA">No Basement</option>
          </select>
        </div>

        {/* Basement Finished Type 1 */}
        <div className="form-group">
          <label>Quality of Basement Finished Area</label>
          <select
            name="bsmtFinType1"
            value={formData.bsmtFinType1}
            onChange={handleChange}
          >
            <option value="">Select Basement Finished Type 1</option>
            <option value="GLQ">Good Living Quarters</option>
            <option value="ALQ">Average Living Quarters</option>
            <option value="BLQ">Below Average Living Quarters</option>
            <option value="Rec">Average Rec Room</option>
            <option value="LwQ">Low Quality</option>
            <option value="Unf">Unfinshed</option>
            <option value="NA">No Basement</option>
          </select>
        </div>

        {/* Basement Finished SF 1 */}
        <div className="form-group">
          <label>Type 1 finished sq feet</label>
          <input
            type="number"
            name="bsmtFinSF1"
            value={formData.bsmtFinSF1}
            onChange={handleChange}
            placeholder="Type 1 finished sq feet"
          />
        </div>

        {/* Basement Finished Type 2 */}
        <div className="form-group">
          <label>Quality of Second Finished Area</label>
          <select
            name="bsmtFinType2"
            value={formData.bsmtFinType2}
            onChange={handleChange}
          >
            <option value="">Select Basement Finished Type 2</option>
            <option value="GLQ">Good Living Quarters</option>
            <option value="ALQ">Average Living Quarters</option>
            <option value="BLQ">Below Average Living Quarters</option>
            <option value="Rec">Average Rec Room</option>
            <option value="LwQ">Low Quality</option>
            <option value="Unf">Unfinshed</option>
            <option value="NA">No Basement</option>
          </select>
        </div>

        {/* Basement Finished SF 2 */}
        <div className="form-group">
          <label>Type 2 finished sq feet</label>
          <input
            type="number"
            name="bsmtFinSF2"
            value={formData.bsmtFinSF2}
            onChange={handleChange}
            placeholder="Type 2 finished sq feet"
          />
        </div>

        {/* Basement Unfinished SF */}
        <div className="form-group">
          <label>Unfinished square feet of basement area</label>
          <input
            type="number"
            name="bsmtUnfSF"
            value={formData.bsmtUnfSF}
            onChange={handleChange}
            placeholder="Unfinished square feet of basement area"
          />
        </div>

        {/* Total Basement SF */}
        <div className="form-group">
          <label>Total square feet of basement area</label>
          <input
            type="number"
            name="totalBsmtSF"
            value={formData.totalBsmtSF}
            onChange={handleChange}
            placeholder="Total square feet of basement area"
          />
        </div>

        {/* Heating */}
        <div className="form-group">
          <label>Type of heating</label>
          <select
            name="heating"
            value={formData.heating}
            onChange={handleChange}
          >
            <option value="">Select Heating Type</option>
            <option value="Floor">Floor Furnace</option>
            <option value="GasA">Gas forced warm air furnace</option>
            <option value="GasW">Gas hot water or steam heat</option>
            <option value="Grav">Gravity furnace</option>
            <option value="OthW">Hot water or steam heat other than gas</option>
            <option value="Wall">Wall furnace</option>
          </select>
        </div>

        {/* Heating Quality and Condition */}
        <div className="form-group">
          <label>Heating quality and condition</label>
          <select
            name="heatingQC"
            value={formData.heatingQC}
            onChange={handleChange}
          >
            <option value="">Select Heating Quality and Condition</option>
            <option value="Ex">Excellent</option>
            <option value="Gd">Good</option>
            <option value="TA">Average/Typical</option>
            <option value="Fa">Fair</option>
            <option value="Po">Poor</option>
          </select>
        </div>

        {/* Central Air Conditioning */}
        <div className="form-group">
          <label>Central air conditioning</label>
          <select
            name="centralAir"
            value={formData.centralAir}
            onChange={handleChange}
          >
            <option value="">Select Central Air Conditioning</option>
            <option value="N">No</option>
            <option value="Y">Yes</option>
          </select>
        </div>

        {/* Electrical System */}
        <div className="form-group">
          <label>Electrical system</label>
          <select
            name="electrical"
            value={formData.electrical}
            onChange={handleChange}
          >
            <option value="">Select Electrical System</option>
            <option value="SBrkr">Standard Circuit Breakers & Romex</option>
            <option value="FuseA">
              Fuse Box over 60 AMP and all Romex wiring (Average)
            </option>
            <option value="FuseF">
              60 AMP Fuse Box and mostly Romex wiring (Fair)
            </option>
            <option value="FuseP">
              60 AMP Fuse Box and mostly knob & tube wiring (poor)
            </option>
            <option value="Mix">Mixed</option>
          </select>
        </div>

        {/* 1st Floor SF */}
        <div className="form-group">
          <label>First Floor square feet</label>
          <input
            type="number"
            name="firstFlrSF"
            value={formData.firstFlrSF}
            onChange={handleChange}
            placeholder="First Floor square feet"
          />
        </div>

        {/* 2nd Floor SF */}
        <div className="form-group">
          <label>Second floor square feet</label>
          <input
            type="number"
            name="secondFlrSF"
            value={formData.secondFlrSF}
            onChange={handleChange}
            placeholder="Second floor square feet"
          />
        </div>

        {/* Low Quality Finished SF */}
        <div className="form-group">
          <label>Low quality finished square feet</label>
          <input
            type="number"
            name="lowQualFinSF"
            value={formData.lowQualFinSF}
            onChange={handleChange}
            placeholder="Low quality finished square feet"
          />
        </div>

        {/* Above grade (ground) living area square feet */}
        <div className="form-group">
          <label>Above grade (ground) living area square feet</label>
          <input
            type="number"
            name="grLivArea"
            value={formData.grLivArea}
            onChange={handleChange}
            placeholder="Above grade (ground) living area square feet"
          />
        </div>

        {/* Basement Full Bathrooms */}
        <div className="form-group">
          <label>Basement full bathrooms</label>
          <input
            type="number"
            name="bsmtFullBath"
            value={formData.bsmtFullBath}
            onChange={handleChange}
            placeholder="Basement full bathrooms"
          />
        </div>

        {/* Basement Half Bathrooms */}
        <div className="form-group">
          <label>Basement half bathrooms</label>
          <input
            type="number"
            name="bsmtHalfBath"
            value={formData.bsmtHalfBath}
            onChange={handleChange}
            placeholder="Basement half bathrooms"
          />
        </div>

        {/* Full Bathrooms above grade */}
        <div className="form-group">
          <label>Full bathrooms above grade</label>
          <input
            type="number"
            name="fullBath"
            value={formData.fullBath}
            onChange={handleChange}
            placeholder="Full bathrooms above grade"
          />
        </div>

        {/* Half Bathrooms above grade */}
        <div className="form-group">
          <label>Half bathrooms above grade</label>
          <input
            type="number"
            name="halfBath"
            value={formData.halfBath}
            onChange={handleChange}
            placeholder="Half bathrooms above grade"
          />
        </div>

        {/* Bedrooms Above Grade */}
        <div className="form-group">
          <label>Bedrooms Above Grade</label>
          <input
            type="number"
            name="bedroom"
            value={formData.bedroom}
            onChange={handleChange}
            placeholder="Bedrooms Above Grade"
          />
        </div>

        {/* Kitchens Above Grade */}
        <div className="form-group">
          <label>Kitchens Above Grade</label>
          <input
            type="number"
            name="kitchen"
            value={formData.kitchen}
            onChange={handleChange}
            placeholder="Kitchens Above Grade"
          />
        </div>

        {/* Kitchen Quality */}
        <div className="form-group">
          <label>Kitchen Quality</label>
          <select
            name="kitchenQual"
            value={formData.kitchenQual}
            onChange={handleChange}
          >
            <option value="">Select Kitchen Quality</option>
            <option value="Ex">Excellent</option>
            <option value="Gd">Good</option>
            <option value="TA">Typical/Average</option>
            <option value="Fa">Fair</option>
            <option value="Po">Poor</option>
          </select>
        </div>

        {/* Total Rooms Above Grade */}
        <div className="form-group">
          <label>Total Rooms Above Grade</label>
          <input
            type="number"
            name="totRmsAbvGrd"
            value={formData.totRmsAbvGrd}
            onChange={handleChange}
            placeholder="Total Rooms Above Grade"
          />
        </div>

        {/* Functional */}
        <div className="form-group">
          <label>Home functionality</label>
          <select
            name="functional"
            value={formData.functional}
            onChange={handleChange}
          >
            <option value="">Select Home Functionality</option>
            <option value="Typ">Typical Functionality</option>
            <option value="Min1">Minor Deductions 1</option>
            <option value="Min2">Minor Deductions 2</option>
            <option value="Mod">Moderate Deductions</option>
            <option value="Maj1">Major Deductions 1</option>
            <option value="Maj2">Major Deductions 2</option>
            <option value="Sev">Severely Damaged</option>
            <option value="Sal">Salvage only</option>
          </select>
        </div>

        {/* Fireplaces */}
        <div className="form-group">
          <label>Fireplaces</label>
          <input
            type="number"
            name="fireplaces"
            value={formData.fireplaces}
            onChange={handleChange}
            placeholder="Number of fireplaces"
          />
        </div>

        {/* Fireplace Quality */}
        <div className="form-group">
          <label>Fireplace Quality</label>
          <select
            name="fireplaceQu"
            value={formData.fireplaceQu}
            onChange={handleChange}
          >
            <option value="">Select Fireplace Quality</option>
            <option value="Ex">Excellent</option>
            <option value="Gd">Good</option>
            <option value="TA">Typical/Average</option>
            <option value="Fa">Fair</option>
            <option value="Po">Poor</option>
            <option value="NA">No Fireplace</option>
          </select>
        </div>

        {/* Garage Type */}
        <div className="form-group">
          <label>Garage Type</label>
          <select
            name="garageType"
            value={formData.garageType}
            onChange={handleChange}
          >
            <option value="">Select Garage Type</option>
            <option value="2Types">More than one type of Garage</option>
            <option value="Attchd">Attached to home</option>
            <option value="Basment">Basement Garage</option>
            <option value="BuiltIn">
              Built-In (Garage part of house - typically has room above garage)
            </option>
            <option value="CarPort">Car Port</option>
            <option value="Detchd">Detached from home</option>
            <option value="NA">No Garage</option>
          </select>
        </div>

        {/* Garage Year Built */}
        <div className="form-group">
          <label>Year garage was built</label>
          <input
            type="number"
            name="garageYrBlt"
            value={formData.garageYrBlt}
            onChange={handleChange}
            placeholder="Year garage was built"
          />
        </div>

        {/* Garage Finish */}
        <div className="form-group">
          <label>Interior finish of the garage</label>
          <select
            name="garageFinish"
            value={formData.garageFinish}
            onChange={handleChange}
          >
            <option value="">Select Garage Finish</option>
            <option value="Fin">Finished</option>
            <option value="RFn">Rough Finished</option>
            <option value="Unf">Unfinished</option>
            <option value="NA">No Garage</option>
          </select>
        </div>

        {/* Garage Cars */}
        <div className="form-group">
          <label>Size of garage in car capacity</label>
          <input
            type="number"
            name="garageCars"
            value={formData.garageCars}
            onChange={handleChange}
            placeholder="Size of garage in car capacity"
          />
        </div>

        {/* Garage Area */}
        <div className="form-group">
          <label>Size of garage in square feet</label>
          <input
            type="number"
            name="garageArea"
            value={formData.garageArea}
            onChange={handleChange}
            placeholder="Size of garage in square feet"
          />
        </div>

        {/* Garage Quality */}
        <div className="form-group">
          <label>Garage Quality</label>
          <select
            name="garageQual"
            value={formData.garageQual}
            onChange={handleChange}
          >
            <option value="">Select Garage Quality</option>
            <option value="Ex">Excellent</option>
            <option value="Gd">Good</option>
            <option value="TA">Typical/Average</option>
            <option value="Fa">Fair</option>
            <option value="Po">Poor</option>
            <option value="NA">No Garage</option>
          </select>
        </div>

        {/* Garage Condition */}
        <div className="form-group">
          <label>Garage Condition</label>
          <select
            name="garageCond"
            value={formData.garageCond}
            onChange={handleChange}
          >
            <option value="">Select Garage Condition</option>
            <option value="Ex">Excellent</option>
            <option value="Gd">Good</option>
            <option value="TA">Typical/Average</option>
            <option value="Fa">Fair</option>
            <option value="Po">Poor</option>
            <option value="NA">No Garage</option>
          </select>
        </div>

        {/* Paved Drive */}
        <div className="form-group">
          <label>Paved Drive</label>
          <select
            name="pavedDrive"
            value={formData.pavedDrive}
            onChange={handleChange}
          >
            <option value="">Select Paved Drive</option>
            <option value="Y">Paved</option>
            <option value="P">Partial Pavement</option>
            <option value="N">Dirt/Gravel</option>
          </select>
        </div>

        {/* Wood Deck SF */}
        <div className="form-group">
          <label>Wood deck area in square feet</label>
          <input
            type="number"
            name="woodDeckSF"
            value={formData.woodDeckSF}
            onChange={handleChange}
            placeholder="Wood deck area in square feet"
          />
        </div>

        {/* Open Porch SF */}
        <div className="form-group">
          <label>Open porch area in square feet</label>
          <input
            type="number"
            name="openPorchSF"
            value={formData.openPorchSF}
            onChange={handleChange}
            placeholder="Open porch area in square feet"
          />
        </div>

        {/* Enclosed Porch SF */}
        <div className="form-group">
          <label>Enclosed porch area in square feet</label>
          <input
            type="number"
            name="enclosedPorch"
            value={formData.enclosedPorch}
            onChange={handleChange}
            placeholder="Enclosed porch area in square feet"
          />
        </div>

        {/* 3 Season Porch SF */}
        <div className="form-group">
          <label>Three season porch area in square feet</label>
          <input
            type="number"
            name="threeSsnPorch"
            value={formData.threeSsnPorch}
            onChange={handleChange}
            placeholder="Three season porch area in square feet"
          />
        </div>

        {/* Screen Porch SF */}
        <div className="form-group">
          <label>Screen porch area in square feet</label>
          <input
            type="number"
            name="screenPorch"
            value={formData.screenPorch}
            onChange={handleChange}
            placeholder="Screen porch area in square feet"
          />
        </div>

        {/* Pool Area SF */}
        <div className="form-group">
          <label>Pool area in square feet</label>
          <input
            type="number"
            name="poolArea"
            value={formData.poolArea}
            onChange={handleChange}
            placeholder="Pool area in square feet"
          />
        </div>

        {/* Pool Quality */}
        <div className="form-group">
          <label>Pool Quality</label>
          <select name="poolQC" value={formData.poolQC} onChange={handleChange}>
            <option value="">Select Pool Quality</option>
            <option value="Ex">Excellent</option>
            <option value="Gd">Good</option>
            <option value="TA">Average/Typical</option>
            <option value="Fa">Fair</option>
            <option value="NA">No Pool</option>
          </select>
        </div>

        {/* Fence Quality */}
        <div className="form-group">
          <label>Fence Quality</label>
          <select name="fence" value={formData.fence} onChange={handleChange}>
            <option value="">Select Fence Quality</option>
            <option value="GdPrv">Good Privacy</option>
            <option value="MnPrv">Minimum Privacy</option>
            <option value="GdWo">Good Wood</option>
            <option value="MnWw">Minimum Wood/Wire</option>
            <option value="NA">No Fence</option>
          </select>
        </div>

        {/* Miscellaneous Feature */}
        <div className="form-group">
          <label>Miscellaneous Feature</label>
          <select
            name="miscFeature"
            value={formData.miscFeature}
            onChange={handleChange}
          >
            <option value="">Select Miscellaneous Feature</option>
            <option value="Elev">Elevator</option>
            <option value="Gar2">
              2nd Garage (if not described in garage section)
            </option>
            <option value="Othr">Other</option>
            <option value="Shed">Shed (over 100 SF)</option>
            <option value="TenC">Tennis Court</option>
            <option value="NA">None</option>
          </select>
        </div>

        {/* Miscellaneous Value */}
        <div className="form-group">
          <label>Miscellaneous Value</label>
          <input
            type="number"
            name="miscVal"
            value={formData.miscVal}
            onChange={handleChange}
            placeholder="$Value of miscellaneous feature"
          />
        </div>

        {/* Month Sold */}
        <div className="form-group">
          <label>Month Sold (MM)</label>
          <input
            type="number"
            name="moSold"
            value={formData.moSold}
            onChange={handleChange}
            placeholder="Month Sold (MM)"
          />
        </div>

        {/* Year Sold */}
        <div className="form-group">
          <label>Year Sold (YYYY)</label>
          <input
            type="number"
            name="yrSold"
            value={formData.yrSold}
            onChange={handleChange}
            placeholder="Year Sold (YYYY)"
          />
        </div>

        {/* Sale Type */}
        <div className="form-group">
          <label>Type of sale</label>
          <select
            name="saleType"
            value={formData.saleType}
            onChange={handleChange}
          >
            <option value="">Select Sale Type</option>
            <option value="WD">Warranty Deed - Conventional</option>
            <option value="CWD">Warranty Deed - Cash</option>
            <option value="VWD">Warranty Deed - VA Loan</option>
            <option value="New">Home just constructed and sold</option>
            <option value="COD">Court Officer Deed/Estate</option>
            <option value="Con">Contract 15% Down payment regular terms</option>
            <option value="ConLw">
              Contract Low Down payment and low interest
            </option>
            <option value="ConLI">Contract Low Interest</option>
            <option value="ConLD">Contract Low Down</option>
            <option value="Oth">Other</option>
          </select>
        </div>

        {/* Sale Condition */}
        <div className="form-group">
          <label>Condition of sale</label>
          <select
            name="saleCondition"
            value={formData.saleCondition}
            onChange={handleChange}
          >
            <option value="">Select Sale Condition</option>
            <option value="Normal">Normal Sale</option>
            <option value="Abnorml">
              Abnormal Sale - trade, foreclosure, short sale
            </option>
            <option value="AdjLand">Adjoining Land Purchase</option>
            <option value="Alloca">
              Allocation - two linked properties with separate deeds
            </option>
            <option value="Family">Sale between family members</option>
            <option value="Partial">
              Home was not completed when last assessed (New Homes)
            </option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Predicting..." : "Estimate Price"}
        </button>
      </form>
      {price && (
        <div className="price-result">
          <h3>Estimated Price: ${price.toLocaleString()}</h3>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default HousePriceForm;
