import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  @ViewChild('mural', {static: true})
  modal: ElementRef<HTMLParagraphElement>;

  tags: string[] = [];
  linkImage: string;
  statusCode: string;
  verify
  verify2
  verify3
  img_amazonia
  
  ngOnInit(): void {
    this.verify = false;
    this.verify2 = false;
    this.verify3 = false;
    this.img_amazonia = false;
  }

  contructor( appService: ServiceService){
    appService.getTags().subscribe((image) => {
      console.log(image);
    })
  }

  consultar(valor) {
    this.linkImage = 'https://random-d.uk/api/' + valor + '.jpg';
  }

}
