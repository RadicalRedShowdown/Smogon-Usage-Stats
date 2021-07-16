const Dex = require('../pokemon-showdown/.sim-dist/dex').Dex.mod('radred');

keyLookup = {}
baseStats = {}
types = {}

for (const item in Dex.data.Items) {
    keyLookup[item] = Dex.data.Items[item].name;
}

for (const move in Dex.data.Moves) {
    keyLookup[move] = Dex.data.Moves[move].name;
}

for (const ability in Dex.data.Abilities) {
    keyLookup[ability] = Dex.data.Abilities[ability].name;
}

for (const pokemon in Dex.data.Pokedex) {
    const species = Dex.data.Pokedex[pokemon];
    baseStats[pokemon] = species.baseStats;
    keyLookup[pokemon] = species.name;
    types[pokemon] = species.types;
}

for (const nature in Dex.data.Natures) {
    keyLookup[nature] = Dex.data.Natures[nature].name;
}

const FS = require("fs");
FS.writeFile('baseStats.json', JSON.stringify(baseStats), (err) => {
    if (err) throw err;
});
FS.writeFile('types.json', JSON.stringify(types), (err) => {
    if (err) throw err;
});
FS.writeFile('keylookup.json', JSON.stringify(keyLookup), (err) => {
    if (err) throw err;
});