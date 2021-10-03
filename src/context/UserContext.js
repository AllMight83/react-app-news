//Guardamos la información del usuario actualmente autenticado

import React from 'react';

const userContext = React.createContext({news: {}});

export { userContext };

//Este UserContext tendrá un Provider y un Consumer