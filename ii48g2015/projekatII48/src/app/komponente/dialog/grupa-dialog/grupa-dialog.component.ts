import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Grupa } from 'src/app/model/grupa.model';
import { GrupaService } from 'src/app/service/grupa.service';
import { Smer } from 'src/app/model/smer.model';
import { SmerService } from 'src/app/service/smer.service';

@Component({
  selector: 'app-grupa-dialog',
  templateUrl: './grupa-dialog.component.html',
  styleUrls: ['./grupa-dialog.component.css']
})
export class GrupaDialogComponent implements OnInit {
  smerovi: Smer[];
  public flag: number;

  constructor(public snackBar:MatSnackBar,
              public dialogRef: MatDialogRef<GrupaDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data:Grupa,
              public grupaService: GrupaService,
              public smerService:SmerService) { }

  ngOnInit() {
    this.smerService.getAllSmer().subscribe(smerovi => 
      this.smerovi = smerovi
      );
  }

  onChange(smer: Smer){
    this.data.smer = smer;
  }

  public add():void{
    this.grupaService.addGrupa(this.data);
    this.snackBar.open('Uspesno dodata grupa: ' + this.data.oznaka, 'Uredu' , {duration:2500,});
  }

  public update():void{
    this.grupaService.updateGrupa(this.data);
    this.snackBar.open('Uspesno modifikovana grupa: ' + this.data.id, 'Uredu', {duration:2000,});
  }

  public delete():void{
    this.grupaService.deleteGrupa(this.data.id);
    this.snackBar.open('Uspesno obrisana grupa: ' + this.data.id, 'Uredu', {duration:2000,});
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu', {duration:1000,});
  }
}
