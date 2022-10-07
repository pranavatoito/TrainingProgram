import "./App.css";
import Login from "./pages/Login";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Authorized from "./Components/Authorized";
import HeaderNameContext from "./context/HeaderName";

const Redirect = () => <Navigate to="/users" replace />;

function App() {
  return (
    <HeaderNameContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/users"
            element={
              <Authorized>
                <Home />
              </Authorized>
            }
          >
            <Route index element={<Users />} />
            <Route path="add" element={<AddUser />} />
            <Route path="edit/:id" element={<EditUser />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </HeaderNameContext>
  );
}

export default App;
