const Savebtn = document.getElementById('saveBtn');
const listsContainer = document.getElementById('lists-container');

function addToDo() {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');

    const title = document.createElement('li');
    const description = document.createElement('li');
    const ul = document.createElement('ul');
    ul.className = 'lists';

    title.innerText = titleInput.value;
    description.innerText = descriptionInput.value;

    

    const delIcon = document.createElement('li');
    delIcon.className = 'del';
    

    delIcon.addEventListener('click', function () {
        listsContainer.removeChild(ul);
        saveRender();
    });
    
    ul.appendChild(title);
    ul.appendChild(description);
    ul.appendChild(delIcon);
    listsContainer.appendChild(ul);

    titleInput.value = '';
    descriptionInput.value = '';

    saveRender();
}

Savebtn.addEventListener('click', addToDo);

function saveRender() {
    const lists = listsContainer.querySelectorAll('.lists');
    const data = [];

    lists.forEach((list) => {
        const title = list.querySelector('li:first-child').innerText;
        const description = list.querySelector('li:nth-child(2)').innerText;
        data.push({ title, description });
    });

    localStorage.setItem('todoData', JSON.stringify(data));
}

function display() {
    const storedData = localStorage.getItem('todoData');
    if (storedData) {
        const data = JSON.parse(storedData);
        data.forEach((item) => {
            const { title, description } = item;

            const ul = document.createElement('ul');
            ul.className = 'lists';

            const titleLi = document.createElement('li');
            titleLi.innerText = title;

            const descriptionLi = document.createElement('li');
            descriptionLi.innerText = description;

            const delIcon = document.createElement('li');
            delIcon.className = 'del';

            delIcon.addEventListener('click', function () {
                listsContainer.removeChild(ul);
                saveRender();
            });

            ul.appendChild(titleLi);
            ul.appendChild(descriptionLi);
            ul.appendChild(delIcon);
            listsContainer.appendChild(ul);
        });
    }
}

display();
