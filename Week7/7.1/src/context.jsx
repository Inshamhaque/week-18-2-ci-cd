// // context.js

// import React from 'react';

// const CountContext = React.createContext(0);

// export { CountContext };
import { createContext, useContext } from "react";
export const CountContext = createContext(0);
