// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import { addFriend, findFriendByName } from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const mushroomsEl = document.querySelectorAll('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom');
const addFriendButton = document.getElementById('add-friend');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 3
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 2
    },
];

function displayFriends() {
    for (let friend of friendData) {
        const friendEl = renderFriend(friendData);

        friendEl.addEventListener('click', () => {
            const friendInState = findFriendByName(friend.name, friendData);
    
            if (mushroomCount === 0) {
                alert('no mushrooms left! go forage for some more');
            }
            if (mushroomCount > 0 && friendInState.satisfaction < 3) {
                friendInState.happiness++;
                mushroomCount++;
        
                displayFriends(friendData);
                displayMushrooms();    
            }
        });

        friendsEl.append(friendEl);
    }
}


function displayMushrooms() { 
    for (let i = 0; i < mushroomCount; i++) {
        const mushroomEl = renderMushroom();

        mushroomsEl.append(mushroomEl);
    }
}


addFriendButton.addEventListener('click', () => {
    const name = friendInputEl;

    addFriend(name, friendData);

    friendInputEl.value = '';

    displayFriends(friendData);
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

displayFriends();

displayMushrooms();