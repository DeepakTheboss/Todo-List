// declaring and defining the variables need as per need below
const input = document.querySelector('input');
let count1 = 0,
count2 = 0;

// selecting a button element that is direct child of enterTask class element
const btn = document.querySelector('.enterTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    (e.key === 'Enter' ? addList(e) : null);
})

// here we are creating connection from javascript selectors to html elements 
function addList(e) {
    const taskPending = document.querySelector('.task-Pending');
    const taskDone = document.querySelector('.task-Done');
    const resetbtn = document.querySelector('.reset');

    const newLi = document.createElement('li');
     const checkbtn = document.createElement('button');
    const delbtn = document.createElement('button');

    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    delbtn.innerHTML = '<i class="fa fa-trash"></i>';

    // here we are appending task in the list and increment counting logic 
    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        taskPending.appendChild(newLi);
        newLi.appendChild(checkbtn);
        //newLi.appendChild(checkbtn);
        newLi.appendChild(delbtn);
        count1++;
        document.getElementById('notCompleted').innerHTML  = count1;

    };

    // here we are removing incompleted task and adding completed task to respective sections
    checkbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        taskDone.appendChild(parent);
        checkbtn.style.display = 'none';
        delbtn.style.display = 'none';
        
        count1--;
        document.getElementById('notCompleted').innerHTML = count1;
        count2++;
        document.getElementById('Completed').innerHTML = count2;
        
    });

    // this logic is for creating bucket of todo items in parant node and removing parent node directly
    checkbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        taskDone.appendChild(parent);
        
    });

    // here logic for removing not completed task from todo list
    delbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        count1--;
        document.getElementById('notCompleted').innerHTML = count1;
    });

    // this is logic for reset button by which we can reset our todo list
    resetbtn.addEventListener('click', function(){
        newLi.style.display='none';
        count1=0;
        document.getElementById('notCompleted').innerHTML = count1;
        count2=0;
        document.getElementById('Completed').innerHTML = count2;
    });

}
