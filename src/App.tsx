import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./module/login/ProtectedRoute";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute element={<HomePage />} redirectTo="/login" />
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
