import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'std-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  @Output() sidenavToggle = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
