# House Price Prediction using Machine Learning

## Overview

This project focuses on predicting house prices using machine learning techniques. It utilizes the Ames Housing dataset, a popular dataset for regression tasks, to build a predictive model. The project encompasses data preprocessing, exploratory data analysis, model selection, hyperparameter tuning, and final prediction generation.

### Links
- **Medium Article**: [Medium Article](https://medium.com/@dhyeymodi21/building-a-house-price-prediction-app-from-dataset-to-deployment-aebf68a9ae5c)
- **API Endpoint**: [House Price Prediction API](https://house-price-prediction-1-kmgf.onrender.com/predict)
- **Web Application**: [House Price Prediction Web App](https://house-price-prediction1.netlify.app)
- **Kaggle Dataset**: [Housing Prices Competition for Kaggle Learn Users](https://www.kaggle.com/competitions/home-data-for-ml-course)

## Table of Contents
1. Overview
2. Dataset
3. Dependencies
4. Installation
5. Usage
6. Project Structure
7. Model
8. Results
9. Future Enhancements
10. Conclusion
11. Contributing
12. Contact

## Dataset

The dataset used in this project is the Ames Housing dataset, which contains various features related to houses and their sale prices. It is available on Kaggle.

Files used:
- **train.csv**: The training dataset used for model training.
- **test.csv**: The test dataset used for generating predictions.
- **data_description.txt**: A detailed description of each column in the dataset.
- **sample_submission.csv**: An example of the submission format.

## Dependencies

Required libraries:
```bash
pip install pandas numpy scikit-learn matplotlib seaborn joblib flask flask-cors
```

- Python (3.3+)
- Pandas
- NumPy
- Scikit-learn
- Matplotlib
- Seaborn
- Joblib
- Flask
- Flask-CORS

## Installation

1. **Clone the repository:**
```bash
git clone [repository URL]
cd house-price-prediction
```

2. **Create a virtual environment (recommended):**
```bash
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate  # On Windows
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt  # If you create a requirements file.
```

## Usage

### Data Preprocessing and Model Training:
- Run the `Final_Code.ipynb` notebook to preprocess the data and train the model.

### API Deployment (Optional):
- Navigate to the `api/` directory and run `main.py` to start the Flask API.

### Making Predictions:
- For the API, send `POST` requests to the `/predict` endpoint with the required house features in JSON format.
- Alternatively, use the generated `submission.csv` for Kaggle submissions.

## Project Structure

```
HousePricePrediction/
├── data/
│   ├── train.csv
│   ├── test.csv
│   ├── data_description.txt
│   └── sample_submission.csv
├── models/
│   └── house_price_model.pkl
├── notebooks/
│   ├── Final_Code.ipynb
│   └── CodeForAPI.ipynb
├── api/
│   ├── main.py
│   ├── Procfile
│   └── requirements.txt
├── output/
│   └── final_submission.csv
├── README.md
```
- **data/**: Contains the raw datasets and data descriptions.
- **models/**: Stores the trained machine learning model.
- **notebooks/**: Contains Jupyter notebooks for data preprocessing, model training, and API generation.
- **api/**: Includes the Flask API for making predictions.
- **output/**: Stores the generated submission file.
- **README.md**: Project documentation.

## Model

The model used in this project is a **Random Forest Regressor**. Hyperparameter tuning was performed using **GridSearchCV** to optimize the model's performance.

### Updated Graphs and Visualizations

![Distribution of SalePrice](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/Distribution%20of%20SalePrice.png)
![Top 10 Important Features](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/Top%2010%20important%20features.png)
![TotalSF Vs SalesPrice](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/TotalSF%20Vs%20SalesPrice.png)
![Residual Plots](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/residual%20plots.png)

## Results

- The final predictions are saved in `submission.csv`, which can be submitted to Kaggle for evaluation.
- The web application allows users to input house features and get an estimated price.
- The API endpoint enables automated price predictions via HTTP requests.

## Future Enhancements: Real-Time Housing Listings

While the primary focus of this app is to predict house prices based on various features, I plan to integrate real-time housing data into the app to provide users with the most up-to-date property listings. This enhancement will allow users to not only predict the price of a property but also browse available houses that match their specified features.

### Planned API Integrations:
- **Zillow API**: Fetch property details, valuations, and market trends.
- **Realtor API**: Access real estate listings and price history.
- **Walk Score API**: Provide insights into neighborhood walkability and public transit access.
- **Mashvisor API**: Offer investment-specific property data, including rental income and ROI.
- **ATTOM Data Solutions API**: Provide detailed property and real estate data.

### Key Features:
- **Real-Time Listings**: Fetch live property listings based on user preferences.
- **Investment Insights**: Get rental income and ROI data for investment properties.
- **Location Data**: Assess neighborhood livability with walkability and transit scores.
- **Dynamic Price Predictions**: Combine ML model predictions with live property data.

## Conclusion

This project was an exciting opportunity to combine data science, machine learning, and web development to build a fully functional house price prediction web app. By integrating real-time housing data, the app will evolve into a comprehensive tool for potential homebuyers, sellers, and investors. Users will not only be able to predict property prices but also explore available listings and evaluate the livability of neighborhoods, all from one platform.

I look forward to enhancing this app with the proposed features and creating an even better experience for users. Stay tuned for updates on the project’s progress, and feel free to check out the source code and live demo through the links above!

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Contact

**Dhyey Modi**  
dhyeymodi21@gmail.com

