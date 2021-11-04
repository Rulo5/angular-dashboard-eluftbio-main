import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTableComponent } from './view-table/view-table.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    ViewTableComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    
  ]
})
export class UsersModule { }
