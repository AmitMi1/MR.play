import { Component, OnInit } from '@angular/core';
import { faHouseChimney, faUsers, faChartPie, faRectangleList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faHouseChimney = faHouseChimney
  faUsers = faUsers
  faChartPie = faChartPie
  faRectangleList = faRectangleList

}
