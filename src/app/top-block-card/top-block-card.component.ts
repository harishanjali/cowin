import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-top-block-card',
  templateUrl: './top-block-card.component.html',
  styleUrls: ['./top-block-card.component.css']
})
export class TopBlockCardComponent implements OnInit {

  constructor() { }
  @Input() topCardDetails:any
  ngOnInit(): void {
  }

}
