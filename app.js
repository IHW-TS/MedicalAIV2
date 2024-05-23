import { fetchSymptoms, fetchDiagnosis } from './api/priaidApi.js';

async function displaySymptoms() {
    try {
        const symptoms = await fetchSymptoms();
        const symptomsContainer = document.getElementById('symptoms-container');
        symptomsContainer.innerHTML = '';
        symptoms.forEach(symptom => {
            const element = document.createElement('div');
            element.className = 'symptom';
            element.innerHTML = `<strong>ID:</strong> ${symptom.ID} - <strong>Name:</strong> ${symptom.Name}`;
            symptomsContainer.appendChild(element);
        });
    } catch (error) {
        console.error(error.message);
    }
}

async function getDiagnosis() {
    const symptoms = document.getElementById('symptoms').value.split(',').map(id => parseInt(id.trim()));
    const gender = document.getElementById('gender').value;
    const year_of_birth = parseInt(document.getElementById('year_of_birth').value);

    try {
        const diagnosis = await fetchDiagnosis(symptoms, gender, year_of_birth);
        displayResults(diagnosis);
    } catch (error) {
        console.error(error.message);
    }
}

function displayResults(diagnosisData) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    diagnosisData.forEach(diagnosis => {
        const issue = diagnosis.Issue;
        const element = document.createElement('div');
        element.className = 'diagnosis';
        element.innerHTML = `
            <h3>${issue.Name} (${issue.ProfName})</h3>
            <p>ICD: ${issue.Icd} (${issue.IcdName})</p>
            <p>Accuracy: ${issue.Accuracy}%</p>
        `;
        resultsContainer.appendChild(element);
    });
}

function saveDiagnosis(diagnosisData) {
    const existingData = JSON.parse(localStorage.getItem('diagnosisHistory')) || [];
    const newEntry = {
        date: new Date().toLocaleString(),
        diagnosis: diagnosisData
    };
    existingData.push(newEntry);
    localStorage.setItem('diagnosisHistory', JSON.stringify(existingData));
}

function displayHistory() {
    const historyContainer = document.getElementById('history');
    const historyData = JSON.parse(localStorage.getItem('diagnosisHistory')) || [];
    historyContainer.innerHTML = '';
    historyData.forEach(entry => {
        const element = document.createElement('div');
        element.className = 'history-entry';
        element.innerHTML = `<p><strong>Date:</strong> ${entry.date}</p><pre>${JSON.stringify(entry.diagnosis, null, 2)}</pre>`;
        historyContainer.appendChild(element);
    });
}

document.getElementById('get-diagnosis').addEventListener('click', async () => {
    await getDiagnosis();
    displayHistory();
});

// Call displayHistory on page load
window.onload = () => {
    displaySymptoms();
    displayHistory();
};
