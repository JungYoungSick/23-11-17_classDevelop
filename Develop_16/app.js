const _pokemon = {
  pokemonName: "피카츄",
  type: "전기",
  level: 42,
  skill: ["10만볼트", "전광석화", "아이언테일", "볼트태클"]
};

const { pokemonName, type } = _pokemon

console.log(_pokemon.pokemonName);
console.log(_pokemon.type);
// 구조 분해 할당 방식
console.log(pokemonName);
console.log(type);