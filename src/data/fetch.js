const apiToken = `${process.env.REACT_APP_TOKEN}`;
const fetchUrl = "https://striveschool-api.herokuapp.com/api/profile/";

// GET => RITORNA LA LISTA DEI PROFILI UTENTE https://striveschool-api.herokuapp.com/api/profile/
export const listaProfili = async () => {
  const response = await fetch(fetchUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiToken,
    },
  });
  if (!response.ok)
    throw new Error(`${response.status} - ${response.statusText}`);
  const dataProfili = await response.json();
  return dataProfili;
};

// GET => RITORNA IL TUO PROFILO https://striveschool-api.herokuapp.com/api/profile/me
export const ilTuoProfilo = async () => {
  const response = await fetch(fetchUrl + "me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiToken,
    },
  });
  if (!response.ok)
    throw new Error(`${response.status} - ${response.statusText}`);
  const dataProfilo = await response.json();
  return dataProfilo;
};

// GET => RITORNA UN PROFILO SPECIFICO https://striveschool-api.herokuapp.com/api/profile/{userId}
export const cercaProfilo = async (userId) => {
  const response = await fetch(fetchUrl + userId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiToken,
    },
  });
  if (!response.ok) throw new Error(response.status, response.statusText);
  const dataRicerca = await response.json();
  return dataRicerca;
};

// GET => RITORNA UNA LISTA DI ESPERIENZE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
export const listaEsperienze = async (userId) => {
  const response = await fetch(fetchUrl + userId + "/experiences", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiToken,
    },
  });
  if (!response.ok)
    throw new Error(`${response.status} - ${response.statusText}`);
  const dataEsperienze = await response.json();
  return dataEsperienze;
};

// POST => CREA UNA NUOVA ESPERIENZA https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
export const creaEsperienza = async (userId, formData) => {
  const response = await fetch(fetchUrl + `${userId}/experiences`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${apiToken}`,
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  if (!response.ok)
    throw new Error(`${response.status} - ${response.statusText}`);
  // if (response.ok) {
  //   alert("Esperienza aggiunta");
  // } else {
  //   console.log(response);
  //   alert("Errore!! Esperienza non aggiunta");
  // }
};

// GET => RITORNA UNA SPECIFICA ESPERIENZA (EXTRA) LEGATA AL PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
export const getExperience = async (userId, expId) => {
  const response = await fetch(fetchUrl + `${userId}/experiences/${expId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${apiToken}`,
    },
    method: "GET",
  });
  if (!response.ok)
    throw new Error(`${response.status} - ${response.statusText}`);
  const data = await response.json();
  return data;
};
// PUT => MODIFICA UNA SPECIFICA ESPERIENZA (EXTRA) https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
export const putExperience = async (userId, expId, formData) => {
  const response = await fetch(fetchUrl + `${userId}/experiences/${expId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${apiToken}`,
    },
    method: "PUT",
    body: JSON.stringify(formData),
  });
  if (!response.ok)
    throw new Error(`${response.status} - ${response.statusText}`);
  // if (response.ok) {
  //   console.log(response);
  //   alert("Esperienza aggiornata");
  // } else {
  //   console.log(response);
  //   alert("Errore!! Esperienza non aggiornata");
  // }
};

// DELETE => ELIMINA UNA SPECIFICA ESPERIENZA (EXTRA) https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
export const deleteExperience = async (userId, expId) => {
  const response = await fetch(fetchUrl + `${userId}/experiences/${expId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${apiToken}`,
    },
    method: "DELETE",
  });
  if (!response.ok)
    throw new Error(`${response.status} - ${response.statusText}`);
  // if (response.ok) {
  //   console.log(response);
  //   alert("Esperienza eliminata");
  // } else {
  //   console.log(response);
  //   alert("Errore!! Esperienza non eliminata");
  // }
};

// PUT => AGGIORNA IL PROFILO UTENTE (EXTRA) https://striveschool-api.herokuapp.com/api/profile/
export const putProfile = async (formData) => {
  const response = await fetch(fetchUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${apiToken}`,
    },
    method: "PUT",
    body: JSON.stringify(formData),
  });
  if (!response.ok)
    throw new Error(`${response.status} - ${response.statusText}`);
  // if (response.ok) {
  //   console.log(response);
  //   alert("Profilo aggiornato");
  // } else {
  //   console.log(response);
  //   alert(`${response.status} - ${response.statusText}`);
  // }
};

// ESEMPI DI CODICE PER UPLOAD DEI FILE:
// https://gist.github.com/LidiaKovac/357cfaeeb6e0f71d7a3ddd8c3014e34d
// POST => CARICA IMMAGINE PROFILO https://striveschool-api.herokuapp.com/api/profile/{userId}/picture
// nome proprietà nel form-data: profile
// POST => CARICA IMMAGINE ESPERIENZA https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId/picture
// nome proprietà nel form-data: experience
export const postPicture = async (userId, formData) => {
  const response = await fetch(fetchUrl + `${userId}/picture`, {
    headers: {
      // "Content-Type": "multipart/form-data", inserirendo questo content-type
      Authorization: `${apiToken}`,
    },
    method: "POST",
    body: formData,
  });
  if (!response.ok)
    throw new Error(`${response.status} - ${response.statusText}`);
  // console.log(response);
  // if (response.ok) {
  //   console.log(response);
  //   alert("Foto aggiornata");
  // } else {
  //   console.log(response);
  //   alert("Errore!! Foto non aggiornata");
  // }
};
