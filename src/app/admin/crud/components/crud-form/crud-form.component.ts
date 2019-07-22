import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  @ViewChild('template')
  private templateRef: TemplateRef<any>;

  needTypeSelected = '';
  public modalRef: BsModalRef;

  selectChangeHandler(event: any) {
    this.needTypeSelected = event.target.value;
  }

  constructor(private modalService: BsModalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.modalRef = this.modalService.show(this.templateRef, { backdrop: 'static', keyboard: false });
  }

}
