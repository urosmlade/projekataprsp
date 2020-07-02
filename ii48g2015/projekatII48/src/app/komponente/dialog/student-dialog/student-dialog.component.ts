import { Component, OnInit, Inject } from '@angular/core';
import { Grupa } from 'src/app/model/grupa.model';
import { Projekat } from 'src/app/model/projekat.model';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';
import { GrupaService } from 'src/app/service/grupa.service';
import { ProjekatService } from 'src/app/service/projekat.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  grupe: Grupa[];
  projekti: Projekat[];
  public flag:number;

  constructor(public snackBar:MatSnackBar,
              public dialogRef: MatDialogRef<StudentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Student,
              public studentService: StudentService,
              public grupaService: GrupaService,
              public projekatService: ProjekatService) { }

  ngOnInit() {
    this.grupaService.getAllGrupa().subscribe(grupe =>
      this.grupe = grupe
    );
    this.projekatService.getAllProjekat().subscribe(projekti =>
      this.projekti = projekti
    );
  }

 
  public add():void{
    this.studentService.addStudent(this.data);
    this.snackBar.open('Uspešno dodat student: ' + this.data.id, 'U redu', {
      duration: 2500,
    });
  }

  public update():void{
    this.studentService.updateStudent(this.data);
    this.snackBar.open('Uspesno modifikovan student:' + this.data.id, 'U redu', {duration:2000,});
  }

  public delete():void{
    this.studentService.deleteStudent(this.data.id);
    this.snackBar.open('Uspesno obrisan student:' + this.data.id, 'U redu', {duration:2000,});

  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', {
      duration: 1000,
    });
  }
}

