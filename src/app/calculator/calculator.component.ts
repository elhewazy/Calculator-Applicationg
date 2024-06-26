import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  calc:String = '';

  result = '0';

  expr:string = '';

setEq(values:String){
this.expr =this.expr+ values;
 this.calc = this.expr;
}
getResult(){
  try{
    this.result =eval(this.expr).toString();
  }catch(error){
    this.result = "invalid expression"
  }
  
  
}
reset(){
    this.calc = "";
    this.expr = "";
}
}
