import { Routes, Route } from "react-router-dom";
import { CountriesPage } from "./pages/CountriesPage/CountriesPage";
import { SingleCountryPage } from "./pages/SingleCountryPage";
import { ErrorPage } from "./pages/ErrorPage";
import { AppLayout } from "./pages/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<CountriesPage />} />
        <Route path="/:country" element={<SingleCountryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
