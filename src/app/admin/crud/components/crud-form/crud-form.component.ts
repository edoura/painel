import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  public modalRef: BsModalRef;

  @ViewChild('template')
  private templateRef: TemplateRef<any>;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.modalRef = this.modalService.show(this.templateRef, { backdrop: 'static', keyboard: false });
  }

}
