import { TOKEN } from '../env.js';

const BASE_URL = 'https://healthservice.priaid.ch';

export async function fetchSymptoms() {
    const url = `${BASE_URL}/symptoms?token=${TOKEN}&language=en-gb`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch symptoms: ${response.statusText}`);
    }
    return response.json();
}

export async function fetchDiagnosis(symptoms, gender, yearOfBirth) {
    const url = `${BASE_URL}/diagnosis?token=${TOKEN}&symptoms=${JSON.stringify(symptoms)}&gender=${gender}&year_of_birth=${yearOfBirth}&language=en-gb`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch diagnosis: ${response.statusText}`);
    }
    return response.json();
}
