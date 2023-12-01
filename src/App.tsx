import { Routes, Route } from "react-router-dom";
import { CountriesPage } from "./pages/CountriesPage/CountriesPage";
import { CountryDeatailsPage } from "./pages/CountryDetails/CountryDetailsPage";
import { ErrorPage } from "./pages/ErrorPage";
import { AppLayout } from "./pages/AppLayout";
import { useState, useEffect } from "react";
import { useCountries } from "./hooks/useCountries";

function App() {
  const [filterBy, setFilterBy] = useState<string>("all");
  const { countries } = useCountries(filterBy);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("darkMode")
      : document.body.classList.remove("darkMode");
  }, [darkMode]);

  return (
    <Routes>
      <Route
        path="/"
        element={<AppLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
      >
        <Route
          index
          element={
            <CountriesPage
              darkMode={darkMode}
              setFilterBy={setFilterBy}
              countries={countries}
            />
          }
        />
        <Route
          path="/:country"
          element={
            <CountryDeatailsPage darkMode={darkMode} countries={countries} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
