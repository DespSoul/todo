export default class Counter {
  constructor(Elements, Number){
    this._elements = document.querySelector(Elements);
    this._number = document.querySelector(Number);
  }
  
  counterElement(){
    this._number.textContent = this._elements.childElementCount; 
  }
}