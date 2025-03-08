# House Price Prediction using Machine Learning

## Overview

This project focuses on predicting house prices using machine learning techniques. It utilizes the Ames Housing dataset, a popular dataset for regression tasks, to build a predictive model. The project encompasses data preprocessing, exploratory data analysis, model selection, hyperparameter tuning, and final prediction generation.

## Table of Contents

- [Overview](#overview)
- [Dataset](#dataset)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Model](#model)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Dataset

The dataset used in this project is the Ames Housing dataset, which contains various features related to houses and their sale prices. It is available on Kaggle.

- `train.csv`: The training dataset used for model training.
- `test.csv`: The test dataset used for generating predictions.
- `data_description.txt`: A detailed description of each column in the dataset.
- `sample_submission.csv`: An example of the submission format.

## Dependencies

- Python (3.3+)
- Pandas
- NumPy
- Scikit-learn
- Matplotlib
- Seaborn
- Joblib
- Flask
- Flask-CORS

Install the required dependencies using:

```bash
pip install pandas numpy scikit-learn matplotlib seaborn joblib flask flask-cors
```

## Installation

1. Clone the repository:

```bash
git clone [repository URL]
cd house-price-prediction
```

2. Create a virtual environment (recommended):

```bash
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate  # On Windows
```

3. Install dependencies:

```bash
pip install -r requirements.txt # If you create a requirements file.
```

## Usage

### Data Preprocessing and Model Training:

- Run the `Final_Code.ipynb` notebook to preprocess the data and train the model.

### API Deployment (Optional):

- Navigate to the `api/` directory and run `app.py` to start the Flask API.

### Making Predictions:

- For the API, send POST requests to the `/predict` endpoint with the required house features in JSON format.
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
│   ├── app.py
│   └── requirements.txt
├── output/
│   └── final_submission.csv
├── README.md
```

- `data/`: Contains the raw datasets and data descriptions.
- `models/`: Stores the trained machine learning model.
- `notebooks/`: Contains Jupyter notebooks for data preprocessing, model training, and API generation.
- `api/`: Includes the Flask API for making predictions.
- `output/`: Stores the generated submission file.
- `README.md`: Project documentation.

## Model

The model used in this project is a Random Forest Regressor. Hyperparameter tuning was performed using GridSearchCV to optimize the model's performance.

## Results

The final predictions are saved in `submission.csv`, which can be submitted to Kaggle for evaluation.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

