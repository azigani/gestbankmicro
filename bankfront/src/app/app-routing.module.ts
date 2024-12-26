import { RouterModule,ExtraOptions,Routes } from '@angular/router';
import { Router } from './../../node_modules/@types/express-serve-static-core/index.d';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
        ]
    },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
