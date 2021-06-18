// Initial value of the array to populate the cards. This array can be edited to increase/decrease the number of cards on the initial dashboard
const initialCardsArr = [1,2,3,4,5,6,7,8,9];
const cardsElement = document.getElementById('cards-container');

// Function to render the cards inside the container
const populateCards = (cardsArr) => {
    cardsElement.innerHTML = null;
    cardsArr.map(item => {
        cardsElement.innerHTML += `<div class='card card-${item%4}'>${item}</div>`;
    })
};

// Initially populating the cards
populateCards(initialCardsArr);

// Click event handler for shuffling the cards
document.getElementById('shuffle').addEventListener('click', () => {
    const randomArr = shuffleCards(initialCardsArr);
    populateCards(randomArr);
});

// Click event handler for sorting the cards
document.getElementById('sort').addEventListener('click', () => {
    const sortedArr = sortCards(initialCardsArr);
    populateCards(sortedArr);
});

// Function to shuffle the cards in random manner
const shuffleCards = (arr) => {
    // Storing a copy of the original array so that the original array is immutable
    const tempArr = [...arr];
    let len = tempArr.length, temp, index;
    while(len) {
        // The index is updated with a random number and the length is decreased
        index = Math.floor(Math.random()*len--);
        // Swapping the element at the randomly generated index with the current element
        temp = tempArr[len];
        tempArr[len] = tempArr[index];
        tempArr[index] = temp;
    }
    return tempArr;
};

// Function to sort the cards in ascending order
const sortCards = (arr) => {
    const tempArr = [...arr];
    // Passing a function inside the sort function to compare the adjacent elements and rearrange them in ascending order
    return tempArr.sort((a,b) => a-b);
};