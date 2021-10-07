const layersOrder = [
    { name: '1.background', number: 3 },
    // { name: '3.hair', number: 2 },
    // { name: '4.face', number: 1 },
    { name: '6.expression', number: 2 },
    // { name: '8.accessories (general)', number: 3 },
    { name: '9.hat (general)', number: 14 },

];

const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };