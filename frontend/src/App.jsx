import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import "./assets/global.css";

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
export default App;
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
