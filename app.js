import { data } from "./src/data.js";
import { filterCountriesByAnimalName } from "./src/filter/filter.js";
import { NoArgumentError, TooManyArgumentsError, UnknownArgumentError } from "./src/utils/errors.js";
import { countPeopleAndAnimals } from "./src/count/count.js";
import { expandFullObject } from "./src/utils/tools.js";

function main() {
  try {
    const formatedArguments = getFormatedArguments(process.argv);
    if (!formatedArguments.length) throw new NoArgumentError();
    if (formatedArguments.length > 1) throw new TooManyArgumentsError();
    filterOrCount(formatedArguments.at(0));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("An unexpected error occurred.");
    }
  }
}

/**
 * @typedef {Object} FormatedArgument
 * @property {string} key
 * @property {string} value
 */

/**
 * @param {string[]} argumentVectors
 * @return {FormatedArgument[]}
 */
function getFormatedArguments(argumentVectors) {
  const formatedArguments = [];
  argumentVectors.forEach((argumentVector) => {
    if (argumentVector.startsWith("--")) {
      const argWithoutPrefix = argumentVector.slice(2);
      const [key, value] = argWithoutPrefix.split("=");
      formatedArguments.push({ key, value });
    }
  });
  return formatedArguments;
}

/**
 * Proceed to filter or Count, depending of formatedArgument's key
 * @param {FormatedArgument} formatedArgument
 * @return {Country[]}
 */
function filterOrCount(formatedArgument) {
  switch (formatedArgument.key) {
    case "filter":
      const filteredCountries = filterCountriesByAnimalName(formatedArgument.value, data);
      console.log(
        filteredCountries.length ? expandFullObject(filteredCountries) : "No animal corresponding to research"
      );
      break;
    case "count":
      const countedPeopleAndAnimals = countPeopleAndAnimals(data);
      console.log(expandFullObject(countedPeopleAndAnimals));
      break;
    default:
      throw new UnknownArgumentError();
  }
}

main();
