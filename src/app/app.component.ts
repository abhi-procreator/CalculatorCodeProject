import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  inputText: string='';

  ngOnInit() {
    
  }
 

 calculate(number:any){
  this.inputText=this.inputText+number;
   console.log(this.inputText);  
  }

  Result(){
    
    this.inputText = eval(this.inputText);
  }
  clearText(){
    this.inputText = '';
  }

}
