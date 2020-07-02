import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student.model';
import { Grupa } from 'src/app/model/grupa.model';
import { StudentService } from 'src/app/service/student.service';
import { MatDialog } from '@angular/material';
import { Projekat } from 'src/app/model/projekat.model';
import { StudentDialogComponent } from '../dialog/student-dialog/student-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns = ['id','ime','prezime','broj_indeksa','grupa','projekat','actions'];
  dataSource : Observable<Student[]>;
  @Input() selektovanaGrupa: Grupa;

  constructor(public httpClient:HttpClient, public studentService: StudentService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(){
    if(this.selektovanaGrupa.id){
      this.loadData();
    }
  }

  public openDialog(flag:number, id:number, ime:string, prezime:string, broj_indeksa:string, grupa:Grupa, projekat:Projekat){
    const dialogRef = this.dialog.open(StudentDialogComponent, {data:{id:id, ime:ime, prezime:prezime, brojIndeksa:broj_indeksa, 
      grupa:grupa, projekat:projekat}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result =>{
      if(result === 1){
        this.loadData();
      }
    });
  }

  public loadData(){
    this.dataSource = this.studentService.getStudent(this.selektovanaGrupa.id);
  }



}
