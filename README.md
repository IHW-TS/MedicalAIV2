# Health Diagnostic App

This is a simple web application that uses the Priaid health API to diagnose potential health issues based on user input symptoms.

## How to Run

1. Clone this repository.
2. Open `index.html` in your web browser.

## Structure

- `index.html`: Main HTML file with the form and results display.
- `style.css`: CSS file for styling the application.
- `app.js`: JavaScript file for the main application logic.
- `env.js`: Contains the API token. I will leave the API visible even though I know it's not the proper practice.
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

## Local OUTPUT with IA integration 

```
Simulation de Diagnostic par l'IA : Analyse Approfondie et Recommandations Médicales

Entrée des Symptômes
Symptôme(s) saisi(s) : 188 (Abdominal guarding)
Genre : Masculin
Année de naissance : 1988
Résultats du Diagnostic
Inflammation de l'appendice (Appendicitis)

ICD : K35; K36; K37 (Acute appendicitis; Other appendicitis; Unspecified appendicitis)
Précision : 90%
Inflammation d'un diverticule (Diverticulitis)

ICD : K57 (Diverticular disease of intestine)
Précision : 84%
Inflammation du péritoine (Peritonitis)

ICD : K65 (Peritonitis)
Précision : 48%
Rapport Automatisé pour le Médecin
Informations du Patient
Symptômes saisis : Abdominal guarding (ID: 188)
Genre : Masculin
Année de naissance : 1988
Données de la carte Vitale : (Demander au patient de fournir des informations supplémentaires telles que les antécédents médicaux, les allergies, les médicaments actuels, etc.)
Hypothèses de Diagnostic
Inflammation de l'appendice (Appendicitis)

ICD : K35; K36; K37 (Acute appendicitis; Other appendicitis; Unspecified appendicitis)
Précision : 90%
Description : L'appendicite est une inflammation de l'appendice, souvent causée par une obstruction. Les symptômes typiques incluent une douleur abdominale aiguë, principalement localisée dans le quadrant inférieur droit, des nausées, des vomissements et une fièvre légère.
Recommandations :
Examen clinique : Palpation de l'abdomen pour détecter la douleur localisée et le signe de Blumberg.
Imagerie médicale : Scanner abdominal (CT scan) ou échographie pour confirmer l'inflammation de l'appendice.
Intervention chirurgicale : Appendicectomie en cas de confirmation de l'appendicite.
Antibiothérapie préopératoire : Administration prophylactique d'antibiotiques pour prévenir les infections post-opératoires.
Inflammation d'un diverticule (Diverticulitis)

ICD : K57 (Diverticular disease of intestine)
Précision : 84%
Description : La diverticulite survient lorsque des diverticules dans le côlon deviennent enflammés ou infectés. Les symptômes incluent des douleurs abdominales (souvent dans le quadrant inférieur gauche), fièvre, nausées, et modifications des habitudes intestinales (constipation ou diarrhée).
Recommandations :
Examen clinique : Palpation abdominale pour évaluer la douleur et la présence de masse.
Tests de laboratoire : Numération formule sanguine (NFS) pour détecter une leucocytose indicative d'infection.
Imagerie médicale : Scanner abdominal avec contraste pour visualiser l'inflammation des diverticules.
Traitement médical : Antibiotiques à large spectre pour traiter l'infection. Repos intestinal et régime liquide clair initialement.
Suivi : Surveillance et suivi des symptômes. En cas de complications (abcès, perforation), intervention chirurgicale peut être nécessaire.
Inflammation du péritoine (Peritonitis)

ICD : K65 (Peritonitis)
Précision : 48%
Description : La péritonite est une inflammation du péritoine, souvent due à une infection secondaire à une perforation abdominale (comme dans l'appendicite perforée). Les symptômes incluent une douleur abdominale sévère, rigidité abdominale, fièvre élevée, et état de choc.
Recommandations :
Examen clinique : Palpation abdominale pour détecter une rigidité et douleur généralisée.
Tests de laboratoire : NFS, CRP, et cultures sanguines pour identifier l'agent pathogène.
Imagerie médicale : Radiographie abdominale, Scanner pour détecter une perforation ou collection intra-abdominale.
Traitement d'urgence : Administration d'antibiotiques à large spectre immédiatement.
Intervention chirurgicale : Laparotomie exploratoire pour réparer la perforation et drainer les collections purulentes.
Soins intensifs : En cas de choc septique, transfert en unité de soins intensifs pour une prise en charge optimale.
Demandes de Données Supplémentaires
Pour affiner le diagnostic et personnaliser le traitement, il est crucial d'obtenir plus d'informations sur le patient. Demandez au patient de fournir :

Antécédents médicaux : Conditions chroniques, chirurgies antérieures.
Allergies : Réactions allergiques connues, en particulier aux médicaments.
Médicaments actuels : Traitements en cours, y compris les médicaments en vente libre et les suppléments.
Habitudes de vie : Alimentation, consommation d'alcool, tabagisme.
Données de la carte Vitale : Accéder aux dossiers médicaux pour un historique complet des consultations et traitements.```

![image](https://github.com/IHW-TS/MedicalAIV2/test.png
