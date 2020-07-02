import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public aboutService:AboutService) { }

  ngOnInit() {
  }

}
