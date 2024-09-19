import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Layout from "./Layout.jsx";
import Account from "./Pages/Account.jsx";

import axios from "axios";
import AddnewForm from "./Pages/AddnewForm.jsx";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="account" element={<Account />} />
        <Route path="account/new" element={<AddnewForm />} />
      </Route>
    </Routes>
  );
}

export default App;
