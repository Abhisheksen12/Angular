import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal<any>(0);
  color = "red"
  title_name = 'CounterApp';

  updateColor() {
  if (this.count() < 5) {
    this.color = 'green';
  } 
  else if (this.count() > 5 && this.count()<10) {
    this.color = 'blue';
  } 
  else {
    this.color = 'red';
  }
}
    decreament(){
   if(this.count()>0)
    this.count.set(this.count()-1);
  this.updateColor();
  }
  increament(){
    this.count.set(this.count()+1)

    this.updateColor();
  }
 
   reset(){

    this.count.set(0);
    this.color = 'red';
  }
}
