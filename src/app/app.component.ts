import { Component, computed, signal } from '@angular/core';
import { RouterOutlet, RouterModule  } from '@angular/router';
import { SharedModule } from './shared/shared.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export interface MenuItem {
  icon: string;
  title: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule,
    RouterOutlet,
    // BrowserAnimationsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-18';
  panelOpenState: string | null = null;
  // collapsed = signal(false);
  // sidenavWidth = computed(()=> this.collapsed()? '65px':'250px')

  menuItems: MenuItem[] = [
    { icon: 'dashboard', title: 'Dashboard', route: '/dashboard' },
    { icon: 'store', title: 'Products', route: '/products' },
    { icon: 'assignment', title: 'Enquiries', route: '/enquiries' },
    {
      icon: 'shopping_cart', title: 'Orders', children: [
        { icon: 'live_tv', title: 'Live Orders', route: '/orders/live' },
        { icon: 'cancel', title: 'Cancelled Orders', route: '/orders/cancelled' }
      ]
    },
    {
      icon: 'campaign', title: 'Marketing Tools', children: [
        { icon: '', title: 'Offers', route: '/marketing/offers' },
        { icon: '', title: 'Gift Cards', route: '/marketing/gift-cards' },
        { icon: '', title: 'Newsletter', route: '/marketing/newsletter' },
        { icon: '', title: 'Feedback', route: '/marketing/feedback' },
        { icon: '', title: 'Customers', route: '/marketing/customers' }
      ]
    },
    {
      icon: 'language', title: 'Website', children: [
        { icon: '', title: 'Pages', route: '/website/pages' },
        { icon: '', title: 'Blog', route: '/website/blog' }
      ]
    },
    {
      icon: 'apps', title: 'Store Apps', children: [
        { icon: '', title: 'App 1', route: '/apps/app1' },
        { icon: '', title: 'App 2', route: '/apps/app2' }
      ]
    },
    {
      icon: 'settings', title: 'Settings', children: [
        { icon: '', title: 'Profile', route: '/settings/profile' },
        { icon: '', title: 'Security', route: '/settings/security' }
      ]
    },
    {
      icon: 'account_circle', title: 'My Account', children: [
        { icon: '', title: 'Personal Info', route: '/account/personal-info' },
        { icon: '', title: 'Billing', route: '/account/billing' }
      ]
    },
    { icon: 'group', title: 'Vendors', route: '/vendors' }
  ];
}
