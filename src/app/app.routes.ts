import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProductsComponent } from './views/products/products.component';
import { EnquiriesComponent } from './views/enquiries/enquiries.component';
import { LiveComponent } from './views/orders/live/live.component';
import { CancelledComponent } from './views/orders/cancelled/cancelled.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'enquiries', component: EnquiriesComponent },
    { path: 'orders/live', component: LiveComponent },
    { path: 'orders/cancelled', component: CancelledComponent }
  ];
