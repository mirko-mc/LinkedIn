const apiToken = `${process.env.REACT_APP_TOKEN}`;
const fetchUrl = "https://striveschool-api.herokuapp.com/api/profile/";
// GET => RITORNA LA LISTA DEI PROFILI UTENTE https://striveschool-api.herokuapp.com/api/profile/
// GET => RITORNA IL TUO PROFILO https://striveschool-api.herokuapp.com/api/profile/me
// GET => RITORNA UN PROFILO SPECIFICO https://striveschool-api.herokuapp.com/api/profile/{userId}
// GET => RITORNA UNA LISTA DI ESPERIENZE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
// POST => CREA UNA NUOVA ESPERIENZA https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
// GET => RITORNA UNA SPECIFICA ESPERIENZA (EXTRA) LEGATA AL PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
// PUT => MODIFICA UNA SPECIFICA ESPERIENZA (EXTRA) https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
// DELETE => ELIMINA UNA SPECIFICA ESPERIENZA (EXTRA) https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
// PUT => AGGIORNA IL PROFILO UTENTE (EXTRA) https://striveschool-api.herokuapp.com/api/profile/
/*
 * "role":"CTO",
 * "company":"Strive",
 * "startDate":"2019-06-16",
 * "endDate":"2019-06-16", null se ancora in corso
 * "description":"Doing stuff",
 * "area":"Berlin",
 */


export const listaProfili = async () => {
  const response = await fetch(`${fetchUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${apiToken}`
    },
  });
  const dataProfili = await response.json();
};

export const ilTuoProfilo = async () => {
  const response = await fetch(`${fetchUrl + "me"}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${apiToken}`
    }
  });
  const dataProfilo = await response.json()
};

export const cercaProfilo = async (userId) => {
    const response = await fetch(`${fetchUrl + '669ed515bf506e0015482e43'}`,{
        method: 'GET',
        headers:  {
            'Content-Type': 'application/json',
            Authorization: `${apiToken}`
        }
    })
    const dataRicerca = await response.json()
}

export const listaEsperienze = async () => {   
    const response = await fetch(`${fetchUrl + '669ed515bf506e0015482e43/experiences'}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${apiToken}`
        }
    })
    const dataEsperienze = await response.json()
  }

