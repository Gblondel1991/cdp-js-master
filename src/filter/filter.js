/**
 * Filters countries in a list based on a pattern and filters the associated people.
 * @param {string} pattern - Filtering pattern.
 * @param {Country[]} countries - List of countries to filter.
 * @returns {Country[]} - Filtered list of countries with filtered people.
 */
export function filterCountriesByAnimalName(pattern, countries) {
  return countries
    .map((country) => {
      const filteredPeople = filterPeopleByPattern(pattern, country.people);
      return filteredPeople.length > 0 ? { ...country, people: filteredPeople } : null;
    })
    .filter((country) => country); // Remove countries with empty people
}

/**
 * Filters people in a list based on a pattern and filters their associated animals.
 * @param {string} pattern - Filtering pattern.
 * @param {Person[]} people - List of people to filter.
 * @returns {Person[]} - Filtered list of people with filtered animals.
 */
function filterPeopleByPattern(pattern, people) {
  return people
    .map((person) => {
      const filteredAnimals = filterAnimalsByPattern(pattern, person.animals);
      return filteredAnimals.length > 0 ? { ...person, animals: filteredAnimals } : null;
    })
    .filter((person) => person); // Remove people with empty animals
}

/**
 * Filters animals in a list based on a pattern.
 * @param {string} pattern - Filtering pattern.
 * @param {Animal[]} animals - List of animals to filter.
 * @returns {Animal[]} - Filtered list of animals.
 */
function filterAnimalsByPattern(pattern, animals) {
  return animals.filter((animal) => animal.name.toLowerCase().includes(pattern.toLowerCase()));
}
