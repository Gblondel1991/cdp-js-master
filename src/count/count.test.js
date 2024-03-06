import { mockedCountries } from "../data.mock";
import { hasCount } from "../utils/tools";
import { countPeopleAndAnimals } from "./count";

describe("countPeopleAndAnimals", () => {
  const countedMockedCountries = countPeopleAndAnimals(mockedCountries);

  test("should add counts to each country and each people", () => {
    const countedCountriesNames = countedMockedCountries.map((country) => country.name);
    const countedPeopleNames = countedMockedCountries.flatMap((country) =>
      country.people.map((person) => person.name)
    );

    const allCountriesNamesHaveNumber = countedCountriesNames.every((name) => hasCount(name));
    const allPeopleNamesHaveNumber = countedPeopleNames.every((name) => hasCount(name));

    expect(allCountriesNamesHaveNumber).toBe(true);
    expect(allPeopleNamesHaveNumber).toBe(true);
  });

  test("should not modify animal names", () => {
    const countedAnimalsNames = countedMockedCountries
      .flatMap((country) => country.people)
      .flatMap((person) => person.animals.map((animal) => animal.name));

    const mockedAnimalsNames = mockedCountries
      .flatMap((country) => country.people)
      .flatMap((person) => person.animals.map((animal) => animal.name));

    expect(countedAnimalsNames).toEqual(mockedAnimalsNames);
  });

  test("should not modify array strucure", () => {
    expect(countedMockedCountries.length).toBe(mockedCountries.length);
  });

  test("should handle empty arrays", () => {
    const emptyArray = [];
    const countedEmptyArray = countPeopleAndAnimals(emptyArray);

    expect(countedEmptyArray).toEqual([]);
  });
});
