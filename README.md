# House Price Prediction using Machine Learning

## Overview

This project focuses on predicting house prices using machine learning techniques. It utilizes the **Ames Housing dataset** from **Kaggle**, a popular dataset for regression tasks, to build a predictive model. The project encompasses data preprocessing, exploratory data analysis, feature engineering, model selection, hyperparameter tuning, and final prediction generation.

> ✅ **Kaggle Competition:** [Housing Prices - Advanced Regression Techniques](https://www.kaggle.com/competitions/home-data-for-ml-course)  
> 🏆 **Global Ranking:** Secured **60th position out of 8,000+ participants**!

![Kaggle Rank Screenshot](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/kaggle_screenshot.png)

---

### Links
- **Medium Article:** [Building a House Price Prediction App – From Dataset to Deployment](https://medium.com/@dhyeymodi21/building-a-house-price-prediction-app-from-dataset-to-deployment-aebf68a9ae5cc)  
  ![Medium Article Screenshot](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/medium_screenshot.png)
- **API Endpoint:** [House Price Prediction API](https://house-price-prediction-1-kmgf.onrender.com/predict)
- **Web Application:** [House Price Prediction Web App](https://house-price-prediction1.netlify.app/)
  ![Website Screenshot](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/website_screenshot.png)
- **Kaggle Dataset:** [Housing Prices Competition for Kaggle Learn Users](https://www.kaggle.com/competitions/home-data-for-ml-course)

## Table of Contents
1. Overview
2. Dataset
3. Dependencies
4. Installation
5. Usage
6. Project Structure
7. Model
8. Results
9. Dashboard
10. Future Scope
11. Conclusion
12. Contributing
13. Contact

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
git clone https://github.com/dhyeymodi2001/House-Price-Prediction.git
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
├── dashboard/
│   ├── HousingPricesPredictionDashboard.pbix
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
├── screenshots/
│   └── All screenshots here
├── README.md
```

- **data/**: Contains the raw datasets and data descriptions.
- **models/**: Stores the trained machine learning model.
- **notebooks/**: Contains Jupyter notebooks for data preprocessing, model training, and API generation.
- **api/**: Includes the Flask API for making predictions.
- **dashboard/**: Includes the Flask API for making predictions.
- **output/**: Stores the generated submission file.
- **screenshots/**: Visual representation of key results, dashboards, and rankings.
- **README.md**: Project documentation.

## Model

The project involved training multiple machine learning models:
- **Linear Regression**
- **Random Forest Regressor**
- **Gradient Boosting Regressor**
- **XGBoost Regressor**  
> ✅ The best-performing model was **XGBoost**, achieving an **R² score of 0.91** after hyperparameter tuning with **GridSearchCV**.

### Visualizations

- **Distribution of SalePrice**
![Distribution of SalePrice](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/Distribution%20of%20SalePrice.png)

- **Top 10 Important Features**
![Top 10 Important Features](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/Top%2010%20important%20features.png)

- **TotalSF vs SalesPrice**
![TotalSF vs SalesPrice](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/TotalSF%20Vs%20SalesPrice.png)

- **Residual Plots**
![Residual Plots](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/screenshots/residual%20plots.png)

## Results

- **Kaggle Leaderboard Score:** Ranked **60th out of 8,000+ participants**.
- The final predictions are saved in `submission.csv`, ready for Kaggle submission.
- The web application allows users to input house features and get predicted prices.
- The API endpoint allows programmatic predictions through JSON requests.

## Dashboard

I have created an **interactive Power BI Dashboard** showcasing insights from the dataset and model results.

- **Visuals include:** Feature importance charts, price distribution analysis, correlation matrices, and prediction comparisons.

![Dashboard Screenshot 1](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/Dashboard/HomePage.PNG)
![Dashboard Screenshot 2](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/Dashboard/ExploratoryDataAnalysis.PNG)
![Dashboard Screenshot 3](https://github.com/dhyeymodi2001/House-Price-Prediction/blob/main/Dashboard/PredictiveInsightsFilterPanel.PNG)

## Future Scope

> The current project focuses on predictive modeling and user interfacing. But there's much more planned!

### Planned Enhancements:
- **API Integrations:**
  - Zillow API
  - Realtor API
  - Walk Score API
  - Mashvisor API
  - ATTOM Data Solutions API
- **Price Comparison Tool:**
  - Compare predicted prices with real-time property prices from Zillow/Realtor.
- **Demographic Factors:**
  - Add local demographic data to enrich prediction relevance.
- **Macroeconomic Factors:**
  - Integrate factors like mortgage rates, inflation indexes, and local employment rates to make the tool more realistic and dynamic.

## Conclusion

This project was an exciting opportunity to combine data science, machine learning, web development, and data visualization. The success of ranking in the top 1% globally on Kaggle along with building a complete end-to-end solution was incredibly rewarding.  
With planned API integrations and demographic enrichments, I aim to convert this app into a powerful price prediction and comparison platform for homebuyers, sellers, and investors.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Contact

**Dhyey Modi**  
dhyeymodi21@gmail.com
