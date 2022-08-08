import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAppRxjsOperatorComponent } from './demo-app-rxjs-operator/demo-app-rxjs-operator.component';

const routes: Routes = [
  { path: 'operator', component: DemoAppRxjsOperatorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
