//bring input from html
let filterInput = document.getElementById('filterInput');

//Add EventListener
filterInput.addEventListener('keyup', filternames);

function filternames(){
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    //Get ul 
     let ul = document.getElementById('names');

     //Get li
     let li = ul.querySelectorAll('li.collection-item');

     //foorLoop
     for(let i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
     }
     
}