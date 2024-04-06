import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ChoosePlanComponent } from './pages/choose-plan/choose-plan.component';


export const routes: Routes = [
    {'path': 'admin' , component: AdminComponent},
    {'path': 'plans' , component: PlansComponent},
    {'path': 'choose-plan' , component: ChoosePlanComponent},
];
