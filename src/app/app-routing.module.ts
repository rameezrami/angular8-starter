import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppLayoutComponent } from './shared/components/layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./modules/sample/sample.module').then(m => m.SampleModule)
      },
    ]
  },
  { 
    path: '', 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
