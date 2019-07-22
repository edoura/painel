import { Component, OnInit } from '@angular/core';
import { CRUDService } from './crud.service';

import { AngularFireList } from '@angular/fire/database';
import { Entity } from './entity';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  entities: Entity[];

  constructor(private service: CRUDService) { }

  ngOnInit() {
    this.service.GetsList()
      .snapshotChanges()
      .subscribe(data => {
        this.entities = [];

        data.forEach(i => {

          let e = i.payload.toJSON();
          e['$key'] = i.key;

          this.entities.push(e as Entity);
        })
      });
  }

  saveObj() {
    const e = { id: 3, cod: 'aaa', desc: 'aaaaa desc' };
    this.service.Add(e as Entity);
  }



}
