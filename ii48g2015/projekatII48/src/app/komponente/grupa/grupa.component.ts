import { Component, OnInit, ViewChild } from '@angular/core';
import { GrupaService } from 'src/app/service/grupa.service';
import { Grupa } from 'src/app/model/grupa.model';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { GrupaDialogComponent } from '../dialog/grupa-dialog/grupa-dialog.component';
import { Smer } from 'src/app/model/smer.model';

@Component({
  selector: 'app-grupa',
  templateUrl: './grupa.component.html',
  styleUrls: ['./grupa.component.css']
})
export class GrupaComponent implements OnInit {
  
  displayedColumns = ['id','oznaka','smer','actions'];
  selektovanaGrupa: Grupa;
  dataSource :MatTableDataSource<Grupa>;

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  
  constructor( public grupaService: GrupaService,public dialog:MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public selectRow(row){
    this.selektovanaGrupa = row;
  }

  public openDialog(flag:number, id:number, oznaka:string, smer:Smer){
    const dialogRef = this.dialog.open(GrupaDialogComponent, {data: {id:id, oznaka:oznaka, smer:smer}});
    dialogRef.componentInstance.flag = flag;
    console.log('objekat?' + smer);
    
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1){
        this.loadData();
      }
    });
  }


  public loadData(){
    this.grupaService.getAllGrupa().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data,property) =>{
        switch (property){
          case 'id' :return data [property];
          default :return data [property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  

  applyFilter(filterValue:string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


}
