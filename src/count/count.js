/**
 * Modifies the names of countries and people in the given list to include the number of people and animals.
 * @param {Country[]} countries - The list of countries to be modified.
 * @returns {Country[]} - A new list of countries with updated names, reflecting the count of people and animals.
 */
export function countPeopleAndAnimals(countries) {
  return countries.map((country) => ({
    ...country,
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map((person) => ({
      ...person,
      name: `${person.name} [${person.animals.length}]`,
    })),
  }));
}
