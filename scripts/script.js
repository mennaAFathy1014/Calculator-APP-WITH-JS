class Calc{
    constructor(preval, currval){
        this.preval = preval;
        this.currval = currval;
        this.reset();
        
    }
  reset(){
    this.currentOp = '';
    this.previousOp = '';
    this.operator = undefined;
  }
  delete(){
    this.currentOp = this.currentOp.toString().slice(0, -1);

  }
  addNumber(number){
      if(number === '.' && this.currentOp.includes('.')) return
      this.currentOp = this.currentOp.toString() + number.toString();
}
  chooseOperator(operator){
    if(this.currentOp === '')return
    if(this.currentOp !== ''){
      this.equals();
    }
    this.operator = operator;
    this.previousOp = this.currentOp ;
    this.currentOp = '';
    

  }
  equals(){
    let result;
    const prev = parseFloat(this.previousOp); 
    const curr = parseFloat(this.currentOp);
    if(isNaN(prev) || isNaN(curr)) return
    switch(this.operator){
      case '+':
        result = prev+curr;
        break;
      case '-':
        result = prev-curr;
        break;
      case '×':
        result = prev*curr;
        break;
      case '/':
        result = prev/curr;
        break;
      default:
        return
    }
    this.currentOp= result;
    this.operator = undefined;
    this.previousOp = '';
    

  }
  update(){
    this.currval.innerHTML = this.currentOp;
    if(this.operator !== undefined){
      this.preval.innerHTML = `${this.previousOp}  ${this.operator}`;
    }else{
      this.preval.innerHTML = '';
    }

  }
}



const buttons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.oper');
const equals = document.querySelector('.equal');
const reset = document.querySelector('.res');
const delet = document.querySelector('.del');
const currval = document.querySelector('.current');
const preval = document.querySelector('.previuos');



const calc = new Calc(preval, currval);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        calc.addNumber(button.innerHTML);
        calc.update();
    } )
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        calc.chooseOperator(operator.innerHTML);
        calc.update();
    } )
})

equals.addEventListener('click', () => {
    calc.equals();
    calc.update();
})

reset.addEventListener('click', () => {
  calc.reset();
  calc.update();
})

delet.addEventListener('click', () => {
  calc.delete();
  calc.update();
})