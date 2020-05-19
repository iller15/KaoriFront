import { Component, OnInit } from '@angular/core';
import { KaoriService } from '../kaori.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
  

@Component({
  selector: 'app-manejo-admin',
  templateUrl: './manejo-admin.component.html',
  styleUrls: ['./manejo-admin.component.css']
})
export class ManejoAdminComponent implements OnInit {

  constructor(private kaoriService: KaoriService, private router: Router) { }

  ngOnInit(): void {
  }

}
