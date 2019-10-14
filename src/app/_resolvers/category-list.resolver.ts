import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../_model/category';
import { SetupService } from '../_services/setup.service';

@Injectable()
export class CategorysListResolver implements Resolve<Category[]> {
    pageNumber = 1;
    pageSize = 5;

    constructor(private setupService: SetupService, private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Category[]> {
        return this.setupService.getCategorys(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertify.error('Problem retriving the data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
