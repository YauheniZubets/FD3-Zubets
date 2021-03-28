import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent {

  private imageUrl:string="http://fe.it-academy.by/Examples/cards2.png";

  getImageData (url:string):any {
    let image = new Image;
    image.src=url;
    return image;
  }

  getWidth():number {
    return this.getImageData(this.imageUrl).width;
  }

  getHeight():number {
    return this.getImageData(this.imageUrl).height;
  }
  
  getUrl ():string {
    return this.imageUrl;
  }

  spriteWidth:number=140;
  spriteHeight:number=200;

  offsetX:number=0;
  offsetY:number=0;

  change ():void {
    
    if (Math.abs(this.offsetX)+150<this.getWidth()){
      if (Math.abs(this.offsetY)>this.getHeight()-200) {
        if (Math.abs(this.offsetX) > 280) {
          this.offsetX=0;
          this.offsetY=0;
        } else {
          this.offsetX-=288; 
        }
      } else {
        this.offsetX-=143;
      }
    } else {
      this.offsetX=0;
      this.offsetY-=194;
    }
  }
}
