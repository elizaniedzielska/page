const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav_bar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('menu_active');
});

const add_todo_btn = document.getElementById('add_btn');
const todo_input = document.getElementById('todo_input');
const list = document.getElementById('list');

add_todo_btn.addEventListener('click', function(){
    const todo = todo_input.value;
    
    const item = document.createElement('div');
    item.classList.add('item');

    const item_text = document.createElement('div');
    item_text.classList.add('item_text');
    item_text.textContent = todo;

    const edit_input = document.createElement('input');
    edit_input.classList.add('edit_input');
    edit_input.classList.add('hide');
    edit_input.name = 'edit_input';
    edit_input.type = 'text';
    edit_input.value = todo;

    const edit_input_btn = document.createElement('button');
    edit_input_btn.textContent = 'UPDATE';
    edit_input_btn.classList.add('action_btn');
    edit_input_btn.classList.add('update_btn');
    edit_input_btn.classList.add('hide');
    edit_input_btn.type = 'button';

    const action_btns = document.createElement('div');
    action_btns.classList.add('action_btns');

    const edit_btn = document.createElement('button');
    edit_btn.classList.add('action_btn');
    edit_btn.classList.add('edit_btn');
    edit_btn.textContent = 'EDIT';

    edit_btn.addEventListener('click', function(){
        edit_input.classList.remove('hide');
        item_text.classList.add('hide');
        edit_input_btn.classList.remove('hide');
        
        edit_input_btn.addEventListener('click', function(){
            item_text.textContent = edit_input.value;
            edit_input.classList.add('hide');
            item_text.classList.remove('hide');
            edit_input_btn.classList.add('hide');
        });
    });

    const remove_btn = document.createElement('button');
    remove_btn.classList.add('action_btn');
    remove_btn.classList.add('remove_btn');
    remove_btn.textContent = 'REMOVE';

    remove_btn.addEventListener('click', function(){
        item.parentNode.removeChild(item);
    });

    action_btns.append(edit_input_btn);
    action_btns.append(edit_btn);
    action_btns.append(remove_btn);
    item.append(item_text);
    item.append(edit_input);
    item.append(action_btns);
    list.append(item);

    todo_input.value = '';
});
