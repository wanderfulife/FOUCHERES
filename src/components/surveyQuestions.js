// 🚚 ENQUÊTE TRANSPORT DE MARCHANDISES
// Based on the French freight transport questionnaire

export const templateSurveyQuestions = [
    // 📍 Poste de travail
    {
        id: "Q4",
        text: "Type de véhicule",
        type: 'singleChoice',
        options: [
            { id: 1, text: "PL Porteur", next: "Q5" },
            { id: 2, text: "PL Articulé, semi-remorque", next: "Q5" },
            { id: 3, text: "PL Train Routier (porteur + remorque)", next: "Q5" },
        ]
    },

    // 🚛 Type de véhicule
    {
        id: "Q5",
        text: "D’où venez vous? Dernier lieu de chargement, déchargement ou entrepôt pour le PL. Commune et département si France et pays limitrophes, pays si autres",
        type: 'commune',
       next: "Q6"
    },

    // 📍 Origine
    {
        id: "Q6",
        text: "Où allez vous? Dernier lieu de chargement, déchargement ou entrepôt pour le PL. Commune et département si France et pays limitrophes, pays si autre",
        type: 'commune',
       next: "Q7"
    },


    // 🗺️ Origine - Commune
    {
        id: "Q7",
        text: "A quelle fréquence faites vous ce trajet?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours ou presque", next: "Q8" },
            { id: 2, text: "2 à 3 fois par semaine", next: "Q8" },
            { id: 3, text: "1 fois par semaine", next: "Q8" },
            { id: 4, text: "1 à 2 fois par mois", next: "Q8" },
            { id: 5, text: "Quelques fois par an", next: "Q8" },
            { id: 6, text: "Exceptionnellement", next: "Q8" }
        ]
    },
    // 📍 Destination
    {
        id: "Q8",
        text: "Avez-vous fait le même trajet à l'aller ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui", next: "end" },
            { id: 2, text: "Non", next: "end" }
        ]
    },
];