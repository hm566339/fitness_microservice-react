import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AuthProvider } from "react-oauth2-code-pkce";
import { authConfig } from "./redux/api/authConfige";

createRoot(document.getElementById("root")).render(
  <AuthProvider authConfig={authConfig}>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>
);
