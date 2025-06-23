import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Product } from './page/product/product';
import { Product1 } from './product1/product1';
export const routes: Routes = [{path: '',component:Product},{path: 'PRODUCT',component:Product},{path: 'about',component:About},{path: 'contact',component:Contact} ];
