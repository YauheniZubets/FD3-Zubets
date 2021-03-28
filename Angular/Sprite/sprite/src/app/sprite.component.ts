import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

    @Input("image-url")
    imageSprite:string;

    @Input()
    width:number;

    @Input()
    height:number;

    @Input("offsetX")
    offsetX:number;

    @Input("offsetY")
    offsetY:number;

    @Output("change")
    change:EventEmitter<any>=new EventEmitter<any>();

    changeSprite():void{
      this.change.emit();
    }
    
}
