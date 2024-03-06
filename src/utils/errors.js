export class NoArgumentError extends Error {
  constructor() {
    super(
      `No argument has correctfully been specified. Depending on your expectations, you should specify a --filter or --count argument. ${getDocumentationMessage()}`
    );
  }
}

export class TooManyArgumentsError extends Error {
  constructor() {
    super(
      `Too many arguments have been specified. Select once between --filter or --count. ${getDocumentationMessage()}`
    );
  }
}

export class UnknownArgumentError extends Error {
  constructor() {
    super(
      `Unknown argument. Depending on your expectations, use --filter or --count. ${getDocumentationMessage()}`
    );
  }
}

function getDocumentationMessage() {
  return "You should also take a look at README.md.";
}
