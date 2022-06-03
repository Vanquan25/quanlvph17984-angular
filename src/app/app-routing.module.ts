import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent, // render thằng cha trước sau đó render tiếp thằng con
    children: [
      {
        path: '',
        component: HomeComponent // thằng con
      },
      {
        path: 'user',
        component: UserComponent // thằng con
      }
    ]
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'users',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'users',
      //   component: UserComponent
      // }
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent
          },
          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFormComponent
          },
          {
            path: ':id',
            component: AdminProductDetailComponent
          },   // Đẩy /admin/products/id xuống dưới cùng tránh việc nhầm id = 'create'
        ]
      }
    ]
  }

  // {
  //   path: 'user',
  //   component: UserComponent,
  //   // 1. Nếu có children thì không dùng component để render nữa
  //   // 2. Nếu vẫn muốn sử dụng component (khung layout) thì trong component sẽ phải có routes-outlet
  //   children: [
  //     // {
  //     //   path: '',
  //     //   component: UserComponent
  //     // },
  //     {
  //       path: 'create',
  //       component: UserFormComponent
  //     },
  //     {
  //       path: 'edit',
  //       component: UserListComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
