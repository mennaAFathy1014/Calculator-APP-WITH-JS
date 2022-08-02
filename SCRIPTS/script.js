let arrayOfElements = document.querySelectorAll('.calc-body-cell');
let elements = document.querySelector('.calc-body');
let output = document.querySelector('.output');
 
elements.addEventListener('click', function(event) {
    let res = false;
    let number = event.target.innerHTML;
        if (event.target.classList.contains('calc-body-cell') && !event.target.classList.contains('del') && !event.target.classList.contains('res') && !event.target.classList.contains('equal') ){ 
            if(res == false){
                output.innerHTML += number;
            }
            else if(res == true){
                reset();
                output.innerHTML += number;
                res = false;
            }
        }
        if (event.target.classList.contains('del')){
            del();
        }
        if(event.target.innerHTML =='='){
            output.innerHTML = eval(output.innerHTML);
            res = true;
        }
        if(event.target.innerHTML =='Reset'){
            reset();
        }
});
function reset(){
    output.innerHTML = '';
}
function del(){
    if(output.innerHTML.length > 0){
        let del = output.innerHTML.split('+'||'-'||'×'||'/').pop();
        output.innerHTML = output.innerHTML.replace(del,'');
        output.innerHTML = output.innerHTML.replace('+'||'-'||'×'||'/','');
    }
}