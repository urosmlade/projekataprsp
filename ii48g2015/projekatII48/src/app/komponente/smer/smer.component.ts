import { Component, OnInit, ViewChild } from '@angular/core';
import { SmerService } from 'src/app/service/smer.service';
import { Smer } from 'src/app/model/smer.model';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SmerDialogComponent } from '../dialog/smer-dialog/smer-dialog.component';

@Component({
  selector: 'app-smer',
  templateUrl: './smer.component.html',
  styleUrls: ['./smer.component.css']
})
export class SmerComponent implements OnInit {
  
  displayedColumns = ['id','naziv','oznaka','actions'];
  dataSource :MatTableDataSource<Smer>;
  
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(public httpClient : HttpClient, public smerService: SmerService, public dialog:MatDialog) { 

  }

  ngOnInit() {
    this.loadData();
  }


  public openDialog(flag:number, id:number, naziv:string, oznaka:string){
    const dialogRef = this.dialog.open(SmerDialogComponent, {data: {id:id, naziv:naziv, oznaka:oznaka}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result ===1){
        this.loadData();
      }
    });
  }

  public loadData(){
    this.smerService.getAllSmer().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data,property) =>{
        switch(property){
          case 'id' :return data[property];
          default:return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
   }



   applyFilter(filterValue:string){
     filterValue = filterValue.trim();
     filterValue = filterValue.toLowerCase();
     this.dataSource.filter = filterValue;
   }
  
}
