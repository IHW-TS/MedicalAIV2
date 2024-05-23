# Health Diagnostic App

This is a simple web application that uses the Priaid health API to diagnose potential health issues based on user input symptoms.

## How to Run

1. Clone this repository.
2. Open `index.html` in your web browser.

## Structure

- `index.html`: Main HTML file with the form and results display.
- `style.css`: CSS file for styling the application.
- `app.js`: JavaScript file for the main application logic.
- `env.js`: Contains the API token.
- `api/priaidApi.js`: Contains functions for interacting with the Priaid API.

## Features

- Display a list of symptoms with their IDs.
- Allow users to input symptoms, gender, and year of birth.
- Fetch and display potential diagnoses based on the input.

## Note on AI Functionality

The AI functionality of this application, which interacts with the Priaid API to provide potential diagnoses, is currently set up to run locally. This means that the application must be run from your local machine, as there is no server-side hosting for this AI component. This setup is ideal for testing and development purposes but may require adjustments for deployment on a public server or cloud platform.

## Usage Instructions

1. **Clone the Repository**: Use `git clone <repository_url>` to clone the repository to your local machine.
2. **Open the Application**: Navigate to the directory where the repository was cloned and open the `index.html` file in your web browser.
3. **Input Symptoms**: Enter symptoms as comma-separated IDs in the provided input field.
4. **Specify Gender and Year of Birth**: Select the appropriate options for gender and year of birth.
5. **Get Diagnosis**: Click the "Get Diagnosis" button to fetch and display potential diagnoses based on the input symptoms.

## Example Workflow

1. Open `index.html` in your browser.
2. Enter `188` in the symptoms input field, select `Male` for gender, and enter `1988` for the year of birth.
3. Click "Get Diagnosis" to view the potential diagnoses for the entered symptoms.
