import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { ViewTableComponent } from "./view-table/view-table.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ViewTableComponent
            },
            {
              path: 'create',
              component: CreateComponent
           },
           {
            path: 'edit/:id',
            component: EditComponent
         },

        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }
