import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { PatientModule } from '../patient/patient.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent, SidebarComponent, AppLayoutComponent],
    imports: [CommonModule, PatientModule, RouterLink, RouterOutlet],
    exports: [HeaderComponent, SidebarComponent, AppLayoutComponent],
})
export class LayoutModule {}
