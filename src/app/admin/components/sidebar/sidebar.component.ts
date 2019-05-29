import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  collapsed: boolean;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { 
    this.collapsed = false;
  }

  ngOnInit() {
  }

  toggleCollapsed(){
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  clickLogout() {
    this.authService.signOut();
  }
}
