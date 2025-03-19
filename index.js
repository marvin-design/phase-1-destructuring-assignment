const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// Animal sounds
// Animal sounds
const moo = "cow";
const neigh = "horse";
const baa = "sheep";
const oink = "pig";
const cluck = "chicken";

// Animal names
const bessie = "cow";
const dolly = "sheep";
const babe = "pig";
const little = "chicken";

// Animal colors
const blackAndWhite = "cow";
const black = "sheep";
const pink = "pig";

// Rainbow colors
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Rainbow colors using initials
const [r, o, y, g, b, ,v] = colors;

// Indigo using indg
const [, , , , ,indg, ,] = rainbowColors;

// Muppet character
const Muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

const { muppetName, color, song, job, partner } = muppet;

// Nested destructuring for songs and Kermit's job and partner
const muppetSongs = [
  "The Muppet Show Theme",
  "Moving Right Along",
  "Rainbow Connection",
  "I Hope That Something Better Comes Along"
];

const [song1, song2, song3, song4] = muppetSongs;

const kermit = {
  job: "Host of The Muppet Show",
  partner: "Miss Piggy"
};

const { job: nestedJob, partner: nestedPartner } = kermit;