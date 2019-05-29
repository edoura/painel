import { Component, OnInit, Input } from '@angular/core';
import { Entity } from '../../entity';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

  @Input() entities: Entity[];

  constructor() { }

  ngOnInit() {
  }

}
