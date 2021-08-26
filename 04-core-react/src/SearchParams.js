import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  if (true) {
    const [animal, setAnimal] = useState("dog");
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
