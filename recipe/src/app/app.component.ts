import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe';
  loadedFeature="recipe"


  onNavigate(feature:string){
    console.log(feature)
    this.loadedFeature=feature
  }
}
