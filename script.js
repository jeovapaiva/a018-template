
const listasDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function funcaoA(array){
  const triplos = []
  for(let valor of array){
    triplos.push(valor * 3)
  }
  return triplos
}
console.log(funcaoA(listasDeNumeros));

function funcaoB(array){
  const somentePares = []
  for(let valor of array){
    if(valor % 2 === 0){
      somentePares.push(valor)
    }
  }
  return somentePares
}
console.log(funcaoB(listasDeNumeros));

function funcaoC(array, funcao){
  const result = funcao(array)
  console.log(result);
}
funcaoC(listasDeNumeros, funcaoB)

//pratica guiada II - map

const resultMap = listasDeNumeros.map(valor=>valor * 3)
console.log(resultMap);

//pratica guada III - filter

const resultFilter = listasDeNumeros.filter(item=>item % 2 === 0)
console.log(resultFilter);





// const pokemons = [
//   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
//   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
//   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
//   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
//   { nome: 'Squirtle', tipo: 'água', vida: 45 },
//   { nome: 'Psyduck', tipo: 'água', vida: 25 },
// ]
