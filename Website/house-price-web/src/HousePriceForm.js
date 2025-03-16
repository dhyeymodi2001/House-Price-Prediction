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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
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
        "https://house-price-prediction-1-kmgf.onrender.com/predict",
        dataToSend
      );
      setPrice(response.data.predicted_price);
    } catch (err) {
      console.error("Error predicting price:", err);
      setError("An error occurred while predicting the price.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="predict-price" className="form-container">
      <h2>Enter Property Details</h2>
      <form onSubmit={handleSubmit} className="property-form">
        <div className="form-group">
          <label>Property Type</label>
          <select
            name="MSSubClass"
            value={formData.MSSubClass}
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
        <div className="form-group">
          <label>MS Zoning</label>
          <select
            name="MSZoning"
            value={formData.MSZoning}
            onChange={handleChange}
          >
            <option value="">Select Zoning</option>
            <option value="1">Agriculture</option>
            <option value="2">Commercial</option>
            <option value="3">Floating Village Residential</option>
            <option value="4">Industrial</option>
            <option value="5">Residential High Density</option>
            <option value="6">Residential Low Density</option>
            <option value="7">Residential Low Density Park</option>
            <option value="8">Residential Medium Density</option>
          </select>
        </div>
        {/* Lot Frontage */}
        <div className="form-group">
          <label>Lot Frontage</label>
          <input
            type="number"
            name="LotFrontage"
            value={formData.LotFrontage}
            onChange={handleChange}
            placeholder="Linear feet of street connected"
          />
        </div>
        {/* Lot Area */}
        <div className="form-group">
          <label>Lot Area (sq ft)</label>
          <input
            type="number"
            name="LotArea"
            value={formData.LotArea}
            onChange={handleChange}
            placeholder="Lot size in square feet"
          />
        </div>
        {/* Utilities */}
        <div className="form-group">
          <label>Utilities</label>
          <select
            name="Utilities"
            value={formData.Utilities}
            Change={handleChange}
          >
            <option value="">Select Utilities</option>
            <option value="1">All public Utilities (E,G,W,& S)</option>
            <option value="2">All public utilities except sewer</option>
            <option value="3">All public utilities except water</option>
            <option value="4">Electricity only</option>
          </select>
        </div>
        {/* Lot Config */}
        <div className="form-group">
          <label>Lot Configuration</label>
          <select
            name="LotConfig"
            value={formData.LotConfig}
            onChange={handleChange}
          >
            <option value="">Select Lot Configuration</option>
            <option value="1">Inside lot</option>
            <option value="2">Corner lot</option>
            <option value="3">Cul-de-sac</option>
            <option value="4">Frontage on 2 sides of property</option>
            <option value="5">Frontage on 3 sides of property</option>
          </select>
        </div>
        {/* Land Slope */}
        <div className="form-group">
          <label>Land Slope</label>
          <select
            name="LandSlope"
            value={formData.LandSlope}
            onChange={handleChange}
          >
            <option value="">Select Land Slope</option>
            <option value="1">Gentle slope</option>
            <option value="2">Moderate Slope</option>
            <option value="3">Severe Slope</option>
          </select>
        </div>
        {/* Neighborhood */}
        <div className="form-group">
          <label>Neighborhood</label>
          <input
            type="text"
            name="Neighborhood"
            value={formData.Neighborhood}
            onChange={handleChange}
            placeholder="Physical locations within Ames city limits"
          />
        </div>
        {/* Condition 1 */}
        <div className="form-group">
          <label>Proximity to main road or railroad 1</label>
          <input
            type="text"
            name="Condition1"
            value={formData.Condition1}
            onChange={handleChange}
            placeholder="Proximity to main road or railroad 1"
          />
        </div>
        {/* Condition 2 */}
        <div className="form-group">
          <label>Proximity to main road or railroad 2</label>
          <input
            type="text"
            name="Condition2"
            value={formData.Condition2}
            onChange={handleChange}
            placeholder="Proximity to main road or railroad 2"
          />
        </div>
        {/* Building Type */}
        <div className="form-group">
          <label>Building Type</label>
          <select
            name="BldgType"
            value={formData.BldgType}
            onChange={handleChange}
          >
            <option value="">Select Building Type</option>
            <option value="1">Single-family Detached</option>
            <option value="2">
              Two-family Conversion; originally built as one-family dwelling
            </option>
            <option value="3">Duplex</option>
            <option value="4">Townhouse End Unit</option>
            <option value="5">Townhouse Inside Unit</option>
          </select>
        </div>
        {/* House Style */}
        <div className="form-group">
          <label>House Style</label>
          <select
            name="HouseStyle"
            value={formData.HouseStyle}
            onChange={handleChange}
          >
            <option value="">Select House Style</option>
            <option value="1">One story</option>
            <option value="1.5">
              One and one-half story: finished all floors
            </option>
            <option value="1.75">
              One and one-half story: unfinished floor
            </option>
            <option value="2">Two story</option>
            <option value="2.5">
              Two and one-half story: finished all floors
            </option>
            <option value="2.75">
              Two and one-half story: unfinished floor
            </option>
            <option value="3">Split Foyer</option>
            <option value="4">Split Level</option>
          </select>
        </div>
        {/* Overall Quality */}
        <div className="form-group">
          <label>Overall Quality</label>
          <select
            name="OverallQual"
            value={formData.OverallQual}
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
        {/* Year Built */}
        <div className="form-group">
          <label>Year Built</label>
          <input
            type="number"
            name="YearBuilt"
            value={formData.YearBuilt}
            onChange={handleChange}
            placeholder="Original construction date"
          />
        </div>
        {/* Roof Style */}
        <div className="form-group">
          <label>Roof Style</label>
          <select
            name="RoofStyle"
            value={formData.RoofStyle}
            onChange={handleChange}
          >
            <option value="">Select Roof Style</option>
            <option value="1">Gable</option>
            <option value="2">Gambrel (Dutch Gable)</option>
            <option value="3">Hip</option>
            <option value="4">Mansard</option>
            <option value="5">Shed</option>
          </select>
        </div>
        {/* Roof Material */}
        <div className="form-group">
          <label>Roof Material</label>
          <select
            name="RoofMatl"
            value={formData.RoofMatl}
            onChange={handleChange}
          >
            <option value="">Select Roof Material</option>
            <option value="1">Clay or Tile</option>
            <option value="2">Standard Composition</option>
            <option value="3">Membrane</option>
            <option value="4">Metal</option>
            <option value="5">Roll</option>
            <option value="6">Gravel & Tar</option>
            <option value="7">Wood Shakes</option>
            <option value="8">Wood Shingles</option>
          </select>
        </div>
        {/* Exterior 1st */}
        <div className="form-group">
          <label>Exterior Covering on House 1</label>
          <input
            type="text"
            name="Exterior1st"
            value={formData.Exterior1st}
            onChange={handleChange}
            placeholder="Exterior covering on house 1"
          />
        </div>
        {/* Exterior 2nd */}
        <div className="form-group">
          <label>Exterior Covering on House 2</label>
          <input
            type="text"
            name="Exterior2nd"
            value={formData.Exterior2nd}
            onChange={handleChange}
            placeholder="Exterior covering on house 2"
          />
        </div>
        {/* Masonry Veneer Type */}
        <div className="form-group">
          <label>Masonry Veneer Type</label>
          <select
            name="MasVnrType"
            value={formData.MasVnrType}
            onChange={handleChange}
          >
            <option value="">Select Masonry Veneer Type</option>
            <option value="1">Brick Common</option>
            <option value="2">Brick Face</option>
            <option value="3">Cinder Block</option>
            <option value="0">None</option>
            <option value="5">Stone</option>
          </select>
        </div>
        {/* Masonry Veneer Area */}
        <div className="form-group">
          <label>Masonry Veneer Area (sq ft)</label>
          <input
            type="number"
            name="MasVnrArea"
            value={formData.MasVnrArea}
            onChange={handleChange}
            placeholder="Masonry veneer area in square feet"
          />
        </div>
        {/* Exterior Quality */}
        <div className="form-group">
          <label>Exterior Material Quality</label>
          <select
            name="ExterQual"
            value={formData.ExterQual}
            onChange={handleChange}
          >
            <option value="">Select Exterior Material Quality</option>
            <option value="5">Excellent</option>
            <option value="4">Good</option>
            <option value="3">Average/Typical</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>
        {/* Exterior Condition */}
        <div className="form-group">
          <label>Present Condition of the Material on the Exterior</label>
          <select
            name="ExterCond"
            value={formData.ExterCond}
            onChange={handleChange}
          >
            <option value="">Select Exterior Condition</option>
            <option value="4">Excellent</option>
            <option value="3">Good</option>
            <option value="2">Average/Typical</option>
            <option value="1">Fair</option>
            <option value="0">Poor</option>
          </select>
        </div>
        {/* Foundation */}
        <div className="form-group">
          <label>Foundation Type</label>
          <select
            name="Foundation"
            value={formData.Foundation}
            onChange={handleChange}
          >
            <option value="">Select Foundation Type</option>
            <option value="6">Brick & Tile</option>
            <option value="5">Cinder Block</option>
            <option value="4">Pour Concrete</option>
            <option value="3">Slab</option>
            <option value="2">Stone</option>
            <option value="1">Wood</option>
          </select>
        </div>
        {/* Basement Quality */}
        <div className="form-group">
          <label>Height of the Basement</label>
          <select
            name="BsmtQual"
            value={formData.BsmtQual}
            onChange={handleChange}
          >
            <option value="">Select Basement Quality</option>
            <option value="110">Excellent (100+ inches)</option>
            <option value="100">Good (90-99 inches)</option>
            <option value="90">Typical (80-89 inches)</option>
            <option value="80">Fair (70-79 inches)</option>
            <option value="70">Poor (&lt;70 inches)</option>
            <option value="0">No Basement</option>
          </select>
        </div>
        {/* Basement Condition */}
        <div className="form-group">
          <label>General Basement Condition</label>
          <select
            name="BsmtCond"
            value={formData.BsmtCond}
            onChange={handleChange}
          >
            <option value="">Select Basement Condition</option>
            <option value="5">Excellent</option>
            <option value="4">Good</option>
            <option value="3">Typical - slight dampness allowed</option>
            <option value="2">Fair - dampness or some cracking</option>
            <option value="1">
              Poor - severe cracking, dampness, or leakage
            </option>
            <option value="0">No Basement</option>
          </select>
        </div>
        {/* Basement Exposure */}
        <div className="form-group">
          <label>Walkout or Garden Level Basement Walls</label>
          <select
            name="BsmtExposure"
            value={formData.BsmtExposure}
            onChange={handleChange}
          >
            <option value="">Select Basement Exposure</option>
            <option value="4">Good Exposure</option>
            <option value="3">Average Exposure</option>
            <option value="2">Minimum Exposure</option>
            <option value="1">No Exposure</option>
            <option value="0">No Basement</option>
          </select>
        </div>
        {/* Basement Finished Type 1 */}
        <div className="form-group">
          <label>Quality of Basement Finished Area</label>
          <select
            name="BsmtFinType1"
            value={formData.BsmtFinType1}
            onChange={handleChange}
          >
            <option value="">Select Basement Finished Type 1</option>
            <option value="6">Good Living Quarters</option>
            <option value="5">Average Living Quarters</option>
            <option value="4">Below Average Living Quarters</option>
            <option value="3">Average Rec Room</option>
            <option value="2">Low Quality</option>
            <option value="1">Unfinished</option>
            <option value="0">No Basement</option>
          </select>
        </div>
        {/* Basement Finished SF 1 */}
        <div className="form-group">
          <label>Type 1 finished sq feet</label>
          <input
            type="number"
            name="BsmtFinSF1"
            value={formData.BsmtFinSF1}
            onChange={handleChange}
            placeholder="Type 1 finished sq feet"
          />
        </div>
        {/* Basement Finished Type 2 */}
        <div className="form-group">
          <label>Quality of Second Finished Area</label>
          <select
            name="BsmtFinType2"
            value={formData.BsmtFinType2}
            onChange={handleChange}
          >
            <option value="">Select Basement Finished Type 2</option>
            <option value="6">Good Living Quarters</option>
            <option value="5">Average Living Quarters</option>
            <option value="4">Below Average Living Quarters</option>
            <option value="3">Average Rec Room</option>
            <option value="2">Low Quality</option>
            <option value="1">Unfinished</option>
            <option value="0">No Basement</option>
          </select>
        </div>
        {/* Basement Finished SF 2 */}
        <div className="form-group">
          <label>Type 2 finished sq feet</label>
          <input
            type="number"
            name="BsmtFinSF2"
            value={formData.BsmtFinSF2}
            onChange={handleChange}
            placeholder="Type 2 finished sq feet"
          />
        </div>
        {/* Basement Unfinished SF */}
        <div className="form-group">
          <label>Unfinished square feet of basement area</label>
          <input
            type="number"
            name="BsmtUnfSF"
            value={formData.BsmtUnfSF}
            onChange={handleChange}
            placeholder="Unfinished square feet of basement area"
          />
        </div>
        {/* Total Basement SF */}
        <div className="form-group">
          <label>Total square feet of basement area</label>
          <input
            type="number"
            name="TotalBsmtSF"
            value={formData.TotalBsmtSF}
            onChange={handleChange}
            placeholder="Total square feet of basement area"
          />
        </div>
        {/* Heating */}
        <div className="form-group">
          <label>Type of heating</label>
          <select
            name="Heating"
            value={formData.Heating}
            onChange={handleChange}
          >
            <option value="">Select Heating Type</option>
            <option value="10">Floor Furnace</option>
            <option value="20">Gas forced warm air furnace</option>
            <option value="30">Gas hot water or steam heat</option>
            <option value="40">Gravity furnace</option>
            <option value="50">Hot water or steam heat other than gas</option>
            <option value="60">Wall furnace</option>
          </select>
        </div>
        {/* Heating Quality and Condition */}
        <div className="form-group">
          <label>Heating quality and condition</label>
          <select
            name="HeatingQC"
            value={formData.HeatingQC}
            onChange={handleChange}
          >
            <option value="">Select Heating Quality and Condition</option>
            <option value="4">Excellent</option>
            <option value="3">Good</option>
            <option value="2">Average/Typical</option>
            <option value="1">Fair</option>
            <option value="0">Poor</option>
          </select>
        </div>
        {/* Central Air Conditioning */}
        <div className="form-group">
          <label>Central air conditioning</label>
          <select
            name="CentralAir"
            value={formData.CentralAir}
            onChange={handleChange}
          >
            <option value="">Select Central Air Conditioning</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        {/* Electrical System */}
        <div className="form-group">
          <label>Electrical system</label>
          <select
            name="Electrical"
            value={formData.Electrical}
            onChange={handleChange}
          >
            <option value="">Select Electrical System</option>
            <option value="10">Standard Circuit Breakers & Romex</option>
            <option value="20">
              Fuse Box over 60 AMP and all Romex wiring (Average)
            </option>
            <option value="30">
              60 AMP Fuse Box and mostly Romex wiring (Fair)
            </option>
            <option value="40">
              60 AMP Fuse Box and mostly knob & tube wiring (poor)
            </option>
            <option value="50">Mixed</option>
          </select>
        </div>
        {/* 1st Floor SF */}
        <div className="form-group">
          <label>First Floor square feet</label>
          <input
            type="number"
            name="f_1stFlrSF"
            value={formData.f_1stFlrSF}
            onChange={handleChange}
            placeholder="First Floor square feet"
          />
        </div>
        {/* 2nd Floor SF */}
        <div className="form-group">
          <label>Second floor square feet</label>
          <input
            type="number"
            name="f_2ndFlrSF"
            value={formData.f_2ndFlrSF}
            onChange={handleChange}
            placeholder="Second floor square feet"
          />
        </div>
        {/* Low Quality Finished SF */}
        <div className="form-group">
          <label>Low quality finished square feet</label>
          <input
            type="number"
            name="LowQualFinSF"
            value={formData.LowQualFinSF}
            onChange={handleChange}
            placeholder="Low quality finished square feet"
          />
        </div>
        {/* Above grade (ground) living area square feet */}
        <div className="form-group">
          <label>Above grade (ground) living area square feet</label>
          <input
            type="number"
            name="GrLivArea"
            value={formData.GrLivArea}
            onChange={handleChange}
            placeholder="Above grade (ground) living area square feet"
          />
        </div>
        {/* Basement Full Bathrooms */}
        <div className="form-group">
          <label>Basement full bathrooms</label>
          <input
            type="number"
            name="BsmtFullBath"
            value={formData.BsmtFullBath}
            onChange={handleChange}
            placeholder="Basement full bathrooms"
          />
        </div>
        {/* Basement Half Bathrooms */}
        <div className="form-group">
          <label>Basement half bathrooms</label>
          <input
            type="number"
            name="BsmtHalfBath"
            value={formData.BsmtHalfBath}
            onChange={handleChange}
            placeholder="Basement half bathrooms"
          />
        </div>
        {/* Full Bathrooms above grade */}
        <div className="form-group">
          <label>Full bathrooms above grade</label>
          <input
            type="number"
            name="FullBath"
            value={formData.FullBath}
            onChange={handleChange}
            placeholder="Full bathrooms above grade"
          />
        </div>
        {/* Half Bathrooms above grade */}
        <div className="form-group">
          <label>Half bathrooms above grade</label>
          <input
            type="number"
            name="HalfBath"
            value={formData.HalfBath}
            onChange={handleChange}
            placeholder="Half bathrooms above grade"
          />
        </div>
        {/* Bedrooms Above Grade */}
        <div className="form-group">
          <label>Bedrooms Above Grade</label>
          <input
            type="number"
            name="BedroomAbvGr"
            value={formData.BedroomAbvGr}
            onChange={handleChange}
            placeholder="Bedrooms Above Grade"
          />
        </div>
        {/* Kitchens Above Grade */}
        <div className="form-group">
          <label>Kitchens Above Grade</label>
          <input
            type="number"
            name="KitchenAbvGr"
            value={formData.KitchenAbvGr}
            onChange={handleChange}
            placeholder="Kitchens Above Grade"
          />
        </div>
        {/* Kitchen Quality */}
        <div className="form-group">
          <label>Kitchen Quality</label>
          <select
            name="KitchenQual"
            value={formData.KitchenQual}
            onChange={handleChange}
          >
            <option value="">Select Kitchen Quality</option>
            <option value="4">Excellent</option>
            <option value="3">Good</option>
            <option value="2">Typical/Average</option>
            <option value="1">Fair</option>
            <option value="0">Poor</option>
          </select>
        </div>
        {/* Total Rooms Above Grade */}
        <div className="form-group">
          <label>Total Rooms Above Grade</label>
          <input
            type="number"
            name="TotRmsAbvGrd"
            value={formData.TotRmsAbvGrd}
            onChange={handleChange}
            placeholder="Total Rooms Above Grade"
          />
        </div>
        {/* Functional */}
        <div className="form-group">
          <label>Home functionality</label>
          <select
            name="Functional"
            value={formData.Functional}
            onChange={handleChange}
          >
            <option value="">Select Home Functionality</option>
            <option value="60">Typical Functionality</option>
            <option value="50">Minor Deductions 1</option>
            <option value="40">Minor Deductions 2</option>
            <option value="30">Moderate Deductions</option>
            <option value="20">Major Deductions 1</option>
            <option value="10">Major Deductions 2</option>
            <option value="70">Severely Damaged</option>
            <option value="0">Salvage only</option>
          </select>
        </div>
        {/* Fireplaces */}
        <div className="form-group">
          <label>Fireplaces</label>
          <input
            type="number"
            name="Fireplaces"
            value={formData.Fireplaces}
            onChange={handleChange}
            placeholder="Number of fireplaces"
          />
        </div>
        {/* Fireplace Quality */}
        <div className="form-group">
          <label>Fireplace Quality</label>
          <select
            name="FireplaceQu"
            value={formData.FireplaceQu}
            onChange={handleChange}
          >
            <option value="">Select Fireplace Quality</option>
            <option value="5">Excellent</option>
            <option value="4">Good</option>
            <option value="3">Typical/Average</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
            <option value="0">No Fireplace</option>
          </select>
        </div>
        {/* Garage Type */}
        <div className="form-group">
          <label>Garage Type</label>
          <select
            name="GarageType"
            value={formData.GarageType}
            onChange={handleChange}
          >
            <option value="">Select Garage Type</option>
            <option value="60">More than one type of Garage</option>
            <option value="50">Attached to home</option>
            <option value="40">Basement Garage</option>
            <option value="30">
              Built-In (Garage part of house - typically has room above garage)
            </option>
            <option value="20">Car Port</option>
            <option value="10">Detached from home</option>
            <option value="0">No Garage</option>
          </select>
        </div>
        {/* Garage Year Built */}
        <div className="form-group">
          <label>Year garage was built</label>
          <input
            type="number"
            name="GarageYrBlt"
            value={formData.GarageYrBlt}
            onChange={handleChange}
            placeholder="Year garage was built"
          />
        </div>
        {/* Garage Finish */}
        <div className="form-group">
          <label>Interior finish of the garage</label>
          <select
            name="GarageFinish"
            value={formData.GarageFinish}
            onChange={handleChange}
          >
            <option value="">Select Garage Finish</option>
            <option value="3">Finished</option>
            <option value="2">Rough Finished</option>
            <option value="1">Unfinished</option>
            <option value="0">No Garage</option>
          </select>
        </div>
        {/* Garage Cars */}
        <div className="form-group">
          <label>Size of garage in car capacity</label>
          <input
            type="number"
            name="GarageCars"
            value={formData.GarageCars}
            onChange={handleChange}
            placeholder="Size of garage in car capacity"
          />
        </div>
        {/* Garage Area */}
        <div className="form-group">
          <label>Size of garage in square feet</label>
          <input
            type="number"
            name="GarageArea"
            value={formData.GarageArea}
            onChange={handleChange}
            placeholder="Size of garage in square feet"
          />
        </div>
        {/* Garage Quality */}
        <div className="form-group">
          <label>Garage Quality</label>
          <select
            name="GarageQual"
            value={formData.GarageQual}
            onChange={handleChange}
          >
            <option value="">Select Garage Quality</option>
            <option value="5">Excellent</option>
            <option value="4">Good</option>
            <option value="3">Typical/Average</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
            <option value="0">No Garage</option>
          </select>
        </div>
        {/* Garage Condition */}
        <div className="form-group">
          <label>Garage Condition</label>
          <select
            name="GarageCond"
            value={formData.GarageCond}
            onChange={handleChange}
          >
            <option value="">Select Garage Condition</option>
            <option value="5">Excellent</option>
            <option value="4">Good</option>
            <option value="3">Typical/Average</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
            <option value="0">No Garage</option>
          </select>
        </div>
        {/* Paved Drive */}
        <div className="form-group">
          <label>Paved Drive</label>
          <select
            name="PavedDrive"
            value={formData.PavedDrive}
            onChange={handleChange}
          >
            <option value="">Select Paved Drive</option>
            <option value="20">Paved</option>
            <option value="10">Partial Pavement</option>
            <option value="0">Dirt/Gravel</option>
          </select>
        </div>
        {/* Wood Deck SF */}
        <div className="form-group">
          <label>Wood deck area in square feet</label>
          <input
            type="number"
            name="WoodDeckSF"
            value={formData.WoodDeckSF}
            onChange={handleChange}
            placeholder="Wood deck area in square feet"
          />
        </div>
        {/* Open Porch SF */}
        <div className="form-group">
          <label>Open porch area in square feet</label>
          <input
            type="number"
            name="OpenPorchSF"
            value={formData.OpenPorchSF}
            onChange={handleChange}
            placeholder="Open porch area in square feet"
          />
        </div>
        {/* Enclosed Porch SF */}
        <div className="form-group">
          <label>Enclosed porch area in square feet</label>
          <input
            type="number"
            name="EnclosedPorch"
            value={formData.EnclosedPorch}
            onChange={handleChange}
            placeholder="Enclosed porch area in square feet"
          />
        </div>
        {/* 3 Season Porch SF */}
        <div className="form-group">
          <label>Three season porch area in square feet</label>
          <input
            type="number"
            name="f_3SsnPorch"
            value={formData.f_3SsnPorch}
            onChange={handleChange}
            placeholder="Three season porch area in square feet"
          />
        </div>
        {/* Screen Porch SF */}
        <div className="form-group">
          <label>Screen porch area in square feet</label>
          <input
            type="number"
            name="ScreenPorch"
            value={formData.ScreenPorch}
            onChange={handleChange}
            placeholder="Screen porch area in square feet"
          />
        </div>
        {/* Pool Area SF */}
        <div className="form-group">
          <label>Pool area in square feet</label>
          <input
            type="number"
            name="PoolArea"
            value={formData.PoolArea}
            onChange={handleChange}
            placeholder="Pool area in square feet"
          />
        </div>
        {/* Pool Quality */}
        <div className="form-group">
          <label>Pool Quality</label>
          <select name="PoolQC" value={formData.PoolQC} onChange={handleChange}>
            <option value="">Select Pool Quality</option>
            <option value="4">Excellent</option>
            <option value="3">Good</option>
            <option value="2">Average/Typical</option>
            <option value="1">Fair</option>
            <option value="0">No Pool</option>
          </select>
        </div>
        {/* Fence Quality */}
        <div className="form-group">
          <label>Fence Quality</label>
          <select name="Fence" value={formData.Fence} onChange={handleChange}>
            <option value="">Select Fence Quality</option>
            <option value="40">Good Privacy</option>
            <option value="30">Minimum Privacy</option>
            <option value="20">Good Wood</option>
            <option value="10">Minimum Wood/Wire</option>
            <option value="0">No Fence</option>
          </select>
        </div>
        {/* Miscellaneous Feature */}
        <div className="form-group">
          <label>Miscellaneous Feature</label>
          <select
            name="MiscFeature"
            value={formData.MiscFeature}
            onChange={handleChange}
          >
            <option value="">Select Miscellaneous Feature</option>
            <option value="50">Elevator</option>
            <option value="40">
              2nd Garage (if not described in garage section)
            </option>
            <option value="30">Other</option>
            <option value="20">Shed (over 100 SF)</option>
            <option value="10">Tennis Court</option>
            <option value="0">None</option>
          </select>
        </div>
        {/* Miscellaneous Value */}
        <div className="form-group">
          <label>Miscellaneous Value</label>
          <input
            type="number"
            name="MiscVal"
            value={formData.MiscVal}
            onChange={handleChange}
            placeholder="$Value of miscellaneous feature"
          />
        </div>
        {/* Month Sold */}
        <div className="form-group">
          <label>Month Sold (MM)</label>
          <input
            type="number"
            name="MoSold"
            value={formData.MoSold}
            onChange={handleChange}
            placeholder="Month Sold (MM)"
          />
        </div>
        {/* Year Sold */}
        <div className="form-group">
          <label>Year Sold (YYYY)</label>
          <input
            type="number"
            name="YrSold"
            value={formData.YrSold}
            onChange={handleChange}
            placeholder="Year Sold (YYYY)"
          />
        </div>
        {/* Sale Type */}
        <div className="form-group">
          <label>Type of sale</label>
          <select
            name="SaleType"
            value={formData.SaleType}
            onChange={handleChange}
          >
            <option value="">Select Sale Type</option>
            <option value="1">Warranty Deed - Conventional</option>
            <option value="2">Warranty Deed - Cash</option>
            <option value="3">Warranty Deed - VA Loan</option>
            <option value="4">Home just constructed and sold</option>
            <option value="5">Court Officer Deed/Estate</option>
            <option value="6">Contract 15% Down payment regular terms</option>
            <option value="7">
              Contract Low Down payment and low interest
            </option>
            <option value="80">Contract Low Interest</option>
            <option value="90">Contract Low Down</option>
            <option value="100">Other</option>
          </select>
        </div>
        {/* Sale Condition */}
        <div className="form-group">
          <label>Condition of sale</label>
          <select
            name="SaleCondition"
            value={formData.SaleCondition}
            onChange={handleChange}
          >
            <option value="">Select Sale Condition</option>
            <option value="6">Normal Sale</option>
            <option value="5">
              Abnormal Sale - trade, foreclosure, short sale
            </option>
            <option value="4">Adjoining Land Purchase</option>
            <option value="3">
              Allocation - two linked properties with separate deeds
            </option>
            <option value="2">Sale between family members</option>
            <option value="1">
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
