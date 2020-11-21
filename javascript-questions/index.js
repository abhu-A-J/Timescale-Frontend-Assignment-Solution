const superHeroes = require("./super-heroes.json");

const PUBLISHERS = {
  DC_Comics: "DC Comics",
  Marvel_Comics: "Marvel Comics",
};

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  return heroes
    .filter((hero) => hero.publisher === PUBLISHERS.DC_Comics)
    .map((dcHero) => ({ ...dcHero, publisher: "DC" }));
};

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  return heroes.map((hero) => {
    return {
      ...hero,
      characters: hero.characters.split(","),
    };
  });
};

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  return heroes.reduce((result, hero) => {
    result[hero.publisher] = [...(result[hero.publisher] || []), { ...hero }];
    return result;
  }, {});
};

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  return heroes.filter(hero=>hero.publisher===PUBLISHERS.DC_Comics && hero.characters.split(",").length>1 ).map(dcHero=>({
    ...dcHero,
    characters:dcHero.characters.split(",")
  }))
};

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
};

/* Logging the results for verification */
// console.log(getDCHeroes(superHeroes));
// console.log(convertCharactersToArray(superHeroes))
// console.log(groupByPublisher(superHeroes))
// console.log(getDCHeroesWithMoreThanOneCharacter(superHeroes))
