import { Component, OnInit } from '@angular/core';
import { FloatingActionButton } from 'materialize-css';

@Component({
  selector: 'db-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let elems = document.querySelectorAll('.fixed-action-btn');
    let instance = FloatingActionButton.init(elems, {
      toolbarEnabled: true,
      direction: 'top',
    });
  }

}
