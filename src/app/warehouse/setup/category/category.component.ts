import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Category } from 'src/app/_model/category';
import { Pagination, PaginatedResult } from 'src/app/_model/pagination';
import { SetupService } from 'src/app/_services/setup.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, AfterViewInit {
  isCollapsed = false;
  categorys: Category[];
  pagination: Pagination;

  constructor(private setupService: SetupService, private authService: AuthService,
              private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.categorys = data.category.result;
      this.pagination = data.category.pagination;
    });
  }

  ngAfterViewInit() {
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadCategorys();
  }

  loadCategorys() {
    this.setupService.getCategorys(this.pagination.currentPage, this.pagination.itemsPerPage)
    .subscribe((res: PaginatedResult<Category[]>) => {
     this.categorys = res.result;
     this.pagination = res.pagination;
     console.log(res);
   }, error => {
     this.alertify.error(error);
   });
 }

 deleteCategory(id: number) {
  this.alertify.confirm('Are you sure you want to delete this category?', () => {
    this.setupService.deleteCategorys(id).subscribe(() => {
      this.categorys.splice(this.categorys.findIndex(p => p.id === id), 1);
      this.alertify.success('Category has been deleted');
    }, error => {
      this.alertify.error('failed to delete this category');
    });
  });
 }

 getCategory(id: number) {
   this.setupService.getCategory(id).subscribe();
 }
}
