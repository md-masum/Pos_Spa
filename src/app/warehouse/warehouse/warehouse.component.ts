import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { navItems } from 'src/app/_nav';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit, OnDestroy {
  model: any = {};
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router,
              @Inject(DOCUMENT) document?: any) {

                this.changes = new MutationObserver((mutations) => {
                  this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
                });
                this.element = document.body;
                this.changes.observe( this.element as Element, {
                  attributes: true,
                  attributeFilter: ['class']
                });

               }

  ngOnInit() {
    this.model = JSON.parse(localStorage.getItem('user'));
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
