import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import Typewriter from 't-writer.js';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit//, AfterViewInit 
{

  //@ViewChild('asTitle') asTitle!: ElementRef;
  links: Array<LinkModel> = [
    {
      link: 'https://github.com/Douglashc',
      icon: '<i class="uil uil-github-alt"></i>'
    },
    {
      link: '',
      icon: '<i class="uil uil-envelope"></i>'
    },
    {
      link: 'https://www.youtube.com/channel/UClk8T9AbIA70ZhpBBYaJ1Lw',
      icon: '<i class="uil uil-youtube"></i>'
    }
  ];

  avatar = '../../../assets/foto2.jpg';

  constructor() {
      
  }

  ngOnInit(): void {
  }

  /*ngAfterViewInit(): void {
      //this.initEffect();
  }

  initEffect = () => {

    const target = this.asTitle.nativeElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    });
    
    writer
      .changeCursorColor('white')
      .type('Douglas Chavarria')
      .rest(50000)
      .start()
  }*/

}

class LinkModel
{
  link!: string;
  icon!: string;
}
