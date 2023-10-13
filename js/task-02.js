const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');

const listItemArray = ingredients.map(
    item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('item');
        return li;
    }
);
list.append(...listItemArray)