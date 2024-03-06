import { mockedCountries } from "../data.mock";
import { filterCountriesByAnimalName } from "./filter";

describe("filterCountriesByAnimalName", () => {
  it("filters countries, people and animals based on animal name pattern", () => {
    const pattern = "Dog";
    const filteredMockedCountries = filterCountriesByAnimalName(pattern, mockedCountries);

    const filteredAnimalsNames = filteredMockedCountries
      .flatMap((country) => country.people)
      .flatMap((person) => person.animals.map((animal) => animal.name));

    const allAnimalsNamesIncludesPattern = filteredAnimalsNames.every((name) =>
      name.toLowerCase().includes(pattern.toLowerCase())
    );

    expect(allAnimalsNamesIncludesPattern).toBe(true);
  });

  it("excludes countries where no one possesses an animal that matches the specified pattern", () => {
    const filteredMockedCountries = filterCountriesByAnimalName("Zebra", mockedCountries);

    expect(filteredMockedCountries.length).toBeLessThan(mockedCountries.length);
    expect(filteredMockedCountries.map((country) => country.name)).not.toContain("France");
  });

  it("should not be case sensitive when filtering animals by pattern", () => {
    const countriesWithLowerCasePattern = filterCountriesByAnimalName("horse", mockedCountries);
    const countriesWithUpperCasePattern = filterCountriesByAnimalName("HORSE", mockedCountries);

    expect(countriesWithLowerCasePattern).toStrictEqual(countriesWithUpperCasePattern);
  });

  it("returns empty array if no match is found", () => {
    const filteredMockedCountries = filterCountriesByAnimalName("Giraffe", mockedCountries);

    expect(filteredMockedCountries).toEqual([]);
  });

  it("returns empty array if input countries array is empty", () => {
    const filteredMockedCountries = filterCountriesByAnimalName("Dog", []);

    expect(filteredMockedCountries).toEqual([]);
  });
});
