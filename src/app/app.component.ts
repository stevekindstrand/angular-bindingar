import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bindingar';

  imageUrl: string = 'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg';
  imageUrlClass: string = 'imageUrlClass';

  divClass: string = 'divClass';

  boolTest: boolean = true;

  button = () => {
    document.body.style.background = 'black';
  }
}