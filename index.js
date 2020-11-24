
let dataresponsecharactersArray = []

let moreUrl = ''

const character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: {
        name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

const secondCharacter = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: {
        name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};

const thirdCharacter = {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Female',
    location: {
        name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
};

let allCharacters = [{ ...character }, { ...secondCharacter }, { ...thirdCharacter }]

const paintCharacter = (data) => {

    const characterContainer = document.querySelector('#characters');
    console.log(characterContainer)

    data.forEach(dataItem => {
        const characterCard = document.createElement('div');
        characterCard.className = 'card';

        characterCard.innerHTML = `
        <div id="nameStatusDiv" class="nameStatusDiv">
                <h2 id="name" class="name">${dataItem.name}</h2>
                <h3 id="status" class="status">${dataItem.status}</h3>
            </div>
            <div class=imageContainer>
                <img id="image" class="image" src="${dataItem.image}" alt="${dataItem.name}">
            </div>
            <div id=speciesGenderDiv class=speciesGenderDiv>
                <h3 id="species" class="species">${dataItem.species}</h3>
                <h3 id="gender" class="gender">${dataItem.gender}</h3>
            </div>
            <h4 id="location" class="location">${dataItem.location.name}</h4>
            <div id="pageCharacter" class="buttonCharacter"><a href="character.html?id=${dataItem.id}">More!</a><div class="plus"></div></div>
        `
        characterContainer.append(characterCard)
    });

}

//paintCharacter(allCharacters);


const charactersUrl = 'https://rickandmortyapi.com/api/character/'

//funcion get Characters
const getCharacters = () => {
    fetch(charactersUrl)
        .then((response) => response.json())
        .then((dataresponse) => {
            console.log(dataresponse)
            paintCharacter(dataresponse.results)

            moreUrl = dataresponse.info.next
        })
}


getCharacters()


const showButton = document.querySelector('#showMore')

const showMoreFn = () => {
    fetch(moreUrl)
    .then((res) => res.json())
    .then((dataShowMore) =>{
        console.log(dataShowMore)
        paintCharacter(dataShowMore.results)

        moreUrl = dataShowMore.info.next
    })
}

showButton.addEventListener('click',showMoreFn)

