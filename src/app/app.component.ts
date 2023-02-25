import { Component } from '@angular/core';
import { DalleService } from './dalle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Image Banane wala';
  imageUrl!: any[];;
  userImageURL!: string;
  myInputText!: string;
  mySearch!: string;
  constructor(private dalleService: DalleService) {}

  generateImage(title:string) {
    this.mySearch=title;
    this.dalleService.searchImages(this.mySearch).subscribe((data: any) => {
     this.imageUrl=data.results.map((e: { images: any; })=>e.images);
     console.log(this.imageUrl);
    });


  }


}
