import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-matsidenav',
  templateUrl: './matsidenav.component.html',
  styleUrl: './matsidenav.component.css'
})
export class MatsidenavComponent implements OnInit{

  showFiller=false;
  isLoggedIn = false;


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      
    }
  }


}
