import { Routes, Route } from "react-router-dom";
import { CountriesPage } from "./pages/CountriesPage/CountriesPage";
import { SingleCountryPage } from "./pages/SingleCountryPage";
import { ErrorPage } from "./pages/ErrorPage";
import { AppLayout } from "./pages/AppLayout";
import { useState } from "react";
import { useCountries } from "./hooks/useCountries";

function App() {
  const [filterBy, setFilterBy] = useState<string>("all");
  const { countries } = useCountries(filterBy);

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={
            <CountriesPage setFilterBy={setFilterBy} countries={countries} />
          }
        />
        <Route
          path="/:country"
          element={<SingleCountryPage countries={countries} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
