import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatButtonModule,  MatIconModule, MatSidenavModule,
         MatListModule, MatGridListModule, MatExpansionModule, MatTableModule, 
         MatToolbarModule, MatSelectModule, MatOptionModule, MatInputModule, MatDialogModule, 
         MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatPaginatorModule, MatSortModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GrupaComponent } from './komponente/grupa/grupa.component';
import { ProjekatComponent } from './komponente/projekat/projekat.component';
import { SmerComponent } from './komponente/smer/smer.component';
import { StudentComponent } from './komponente/student/student.component';
import { GrupaService } from './service/grupa.service';
import { SmerService } from './service/smer.service';
import { ProjekatService } from './service/projekat.service';
import { SmerDialogComponent } from './komponente/dialog/smer-dialog/smer-dialog.component';
import { ProjekatDialogComponent } from './komponente/dialog/projekat-dialog/projekat-dialog.component';
import { GrupaDialogComponent } from './komponente/dialog/grupa-dialog/grupa-dialog.component';
import { StudentDialogComponent } from './komponente/dialog/student-dialog/student-dialog.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from './service/student.service';
import { AboutComponent } from './komponente/about/about.component';
import { AboutService } from './service/about.service';


const Routes = [{path: 'grupa', component: GrupaComponent},
                {path: 'projekat', component: ProjekatComponent},
                {path: 'smer', component: SmerComponent},
                {path: 'student', component: StudentComponent},
                {path: 'about', component: AboutComponent},
                {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent,
    SmerComponent,
    ProjekatComponent,
    GrupaComponent,
    StudentComponent,
    SmerDialogComponent,
    ProjekatDialogComponent,
    GrupaDialogComponent,
    StudentDialogComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents:[
    SmerDialogComponent, StudentDialogComponent, GrupaDialogComponent, ProjekatDialogComponent
  ],

  providers: [GrupaService, SmerService, ProjekatService, StudentService, AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
