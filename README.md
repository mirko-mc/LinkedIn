# LINKEDIN CLONE

L'applicazione permette di visualizzare la pagina profilo di LinkedIn.

L'applicazione utilizza React, React-Bootstrap e React-Router-Dom e si interfaccia con l'API di Strive School per recuperare le informazioni di profilo ed esperienze lavorative.

## Funzionalità

- Visualizza i dati del profilo
- Visualizza le esperienze lavorative
- Navigazione tra le pagine dell'applicazione
- Alert per operazioni CRUD e carrello

## Se si è il proprietario del profilo...
- Aggiunge, modifica o elimina le informazioni del profilo
- Aggiunge, modifica o elimina le esperienze lavorative

## Creazione API Strive School

## Informazioni per l'utente

Per utilizzare l'applicazione, bisogna prima registrarsi sul sito [Strive School LinkedIn](https://strive.school/linkedin-registration) e ottenere il token della API.
Successivamente bisogna inserire il token nella variabile d'ambiente `REACT_APP_TOKEN="Bearer token"` nel file `.env`.
