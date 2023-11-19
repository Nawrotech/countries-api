export const Select = ({ setRegion }) => {
  return (
    <div className="region">
      <select
        onChange={(e) => setRegion(e.target.value)}
        className="region__select shadow borr"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
