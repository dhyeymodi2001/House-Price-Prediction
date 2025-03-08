import joblib
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import logging
import os

# Get the absolute path of the model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "../models/house_price_model.pkl")

# Load the trained model
try:
    model = joblib.load(MODEL_PATH)
    logging.info("Model loaded successfully.")
except FileNotFoundError:
    model = None
    logging.error("Model file not found. Please train and save the model.")

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

# --- Prediction Endpoint ---
@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({"error": "Model not found. Please train and save the model."}), 500

    try:
        data = request.get_json()
        if not data or not isinstance(data, dict):
            return jsonify({"error": "Invalid or missing JSON input"}), 400

        expected_features = [
            "MSSubClass", "MSZoning", "LotFrontage", "LotArea", "Street", "LotShape", "LandContour",
            "Utilities", "LotConfig", "LandSlope", "Neighborhood", "Condition1", "Condition2",
            "BldgType", "HouseStyle", "OverallQual", "OverallCond", "YearBuilt", "YearRemodAdd",
            "RoofStyle", "RoofMatl", "Exterior1st", "Exterior2nd", "MasVnrType", "MasVnrArea",
            "ExterQual", "ExterCond", "Foundation", "BsmtQual", "BsmtCond", "BsmtExposure",
            "BsmtFinType1", "BsmtFinSF1", "BsmtFinType2", "BsmtFinSF2", "BsmtUnfSF", "TotalBsmtSF",
            "Heating", "HeatingQC", "CentralAir", "Electrical", "1stFlrSF", "2ndFlrSF", "LowQualFinSF",
            "GrLivArea", "BsmtFullBath", "BsmtHalfBath", "FullBath", "HalfBath", "BedroomAbvGr",
            "KitchenAbvGr", "KitchenQual", "TotRmsAbvGrd", "Functional", "Fireplaces", "FireplaceQu",
            "GarageType", "GarageYrBlt", "GarageFinish", "GarageCars", "GarageArea", "GarageQual",
            "GarageCond", "PavedDrive", "WoodDeckSF", "OpenPorchSF", "EnclosedPorch", "3SsnPorch",
            "ScreenPorch", "PoolArea", "MiscVal", "MoSold", "YrSold", "SaleType", "SaleCondition",
            "TotalSF"
        ]

        missing_features = [feat for feat in expected_features if feat not in data]
        if missing_features:
            return jsonify({"error": f"Missing features: {missing_features}"}), 400

        input_data = pd.DataFrame([data], columns=expected_features)
        prediction = model.predict(input_data)

        return jsonify({"predicted_price": round(prediction[0], 2)})

    except Exception as e:
        logging.error(f"An error occurred: {str(e)}")
        return jsonify({"error": str(e)}), 500

# Run the app with gunicorn in production
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
