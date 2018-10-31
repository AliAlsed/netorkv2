import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MikrotikPage } from './mikrotik';

@NgModule({
  declarations: [
    MikrotikPage,
  ],
  imports: [
    IonicPageModule.forChild(MikrotikPage),
  ],
})
export class MikrotikPageModule {}
