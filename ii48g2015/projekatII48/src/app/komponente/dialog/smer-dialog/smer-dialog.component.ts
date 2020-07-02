import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Smer } from 'src/app/model/smer.model';
import { SmerService } from 'src/app/service/smer.service';

@Component({
  selector: 'app-smer-dialog',
  templateUrl: './smer-dialog.component.html',
  styleUrls: ['./smer-dialog.component.css']
})
export class SmerDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar:MatSnackBar,
              public dialogRef: MatDialogRef<SmerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Smer,
              public smerService: SmerService) { }

  ngOnInit() {
  }


  public add():void{
    this.smerService.addSmer(this.data);
    this.snackBar.open('Uspesno dodat dobavljac: ' + this.data.naziv, 'Uredu', {duration:2500,});
  }

  public update():void{
    this.smerService.updateSmer(this.data);
    this.snackBar.open('Uspesno modifikovan smer: ' + this.data.id, 'Uredu', {duration: 2000,});
  }

  public delete():void{
    this.smerService.deleteSmer(this.data.id);
    this.snackBar.open('Uspesno obrisan smer: ' + this.data.id, 'Uredu', {duration: 2000,});
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu',{duration:1000,});
  }


}
