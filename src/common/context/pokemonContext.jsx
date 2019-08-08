export const numberPadding = function(number, size) {
  var s = String(number);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

export const getNumber = function(url) {
  var number = url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");
  return number;
};

export const findTypeColorLighter = function(type) {
  switch (type) {
    case "normal":
      return "#DFDFCD";
    case "fighting":
      return "#E9B6B3";
    case "flying":
      return "#A890F0";
    case "poison":
      return "#E5CFEB";
    case "ground":
      return "#efdfb3";
    case "rock":
      return "#CFC7C2";
    case "ghost":
      return "#CAC1D9";
    case "steel":
      return "#dbdbe7";
    case "fire":
      return "#febe91";
    case "water":
      return "#BAD6E9";
    case "ice":
      return "#B4F9FA";
    case "grass":
    case "bug":
      return "#CADBB7";
    case "electric":
      return "#FDEEB2";
    case "psychic":
      return "#FDC1D3";
    case "dragon":
      return "#dbcf9b";
    case "dark":
      return "#B5B5B5";
    case "fairy":
      return "#F9D9E0";
    default:
  }
};

export const findTypeColor = function(type) {
  switch (type) {
    case "normal":
      return "#A8A878";
    case "fighting":
      return "#C03028";
    case "flying":
      return "#A890F0";
    case "poison":
      return "#b97fc9";
    case "ground":
      return "#E0C068";
    case "rock":
      return "#705848";
    case "ghost":
      return "#705898";
    case "steel":
      return "#B8B8D0";
    case "fire":
      return "#fd7d24";
    case "water":
      return "#4592c4";
    case "grass":
    case "bug":
      return "#729f3f";
    case "electric":
      return "#F8D030";
    case "psychic":
      return "#F85888";
    case "ice":
      return "#37EDF1";
    case "dragon":
      return "#B8A038";
    case "dark":
      return "#3a3a3a";
    case "fairy":
      return "#EE99AC";
    default:
  }
};

export const Types = [
  "fire",
  "water",
  "grass",
  "electric",
  "fighting",
  "psychic",
  "normal",
  "steel",
  "dark",
  "dragon",
  "fairy",
  "poison",
  "ghost",
  "ice",
  "rock",
  "ground",
  "reset"
];
