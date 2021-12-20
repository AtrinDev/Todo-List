document.addEventListener('DOMContentLoaded', () => {


    const addBtn = document.querySelector('#add');
    const addInput = document.querySelector('#item');

    addBtn.addEventListener('click', () => {
        const newItem = document.getElementById('item').value;

        if (newItem) {
            addItemTodo(newItem);
            document.getElementById('item').value = '';
        }

    });

    addInput.addEventListener('keypress', (event) => {

        if (event.keyCode == 13) {

            const newItem = document.getElementById('item').value;

            if (newItem) {
                addItemTodo(newItem);
                document.getElementById('item').value = '';
            }
        }

    });

    let counter = 1;

    function addItemTodo(text) {
        const list = document.getElementById('todo');
        var str = `<li class="d-flex border-bottom p-3">${counter}<div class="form-check"><label class="form-check-label">${text}<i class="input-helper"></i></label></div><i class="complete fa fa-check ml-auto text-success" id="complete-${counter}"></i><i style="margin-left:10px!important;" class="remove fa fa-trash ml-auto text-danger" id="remove-${counter}"></i></li>`;
        list.insertAdjacentHTML('beforeend', str);

        const complete = document.getElementById(`complete-${counter}`);
        complete.addEventListener('click', completeTask);


        const remove = document.getElementById(`remove-${counter}`);
        remove.addEventListener('click', removeTask);


        counter++;
    }

    function completeTask() {
        const item = this.parentNode;
        const parent = item.parentNode;
        const id = parent.id;


        if (id === 'todo') {
            var target = document.getElementById('completed');
            this.className = 'remove fa fa-undo ml-auto text-info';
        } else {
            var target = document.getElementById('todo');
            this.className = 'remove fa fa-check ml-auto text-success';
        }

        target.insertBefore(item, target.childNodes[0]);

    }

    function removeTask() {
        const item = this.parentNode;
        // const parent = item.parentNode;
        // parent.removeChild(item);
        item.remove();
    }

});