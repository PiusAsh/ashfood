import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from 'src/app/Shared/operation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedMenu: any;
  menus: any[] = [];
  searchTerm = "";
  loginForm: FormGroup;
  constructor(private operationService: OperationService , private activatedRoute: ActivatedRoute, private route: Router, private formBuilder: FormBuilder,){

    this.loginForm = this.formBuilder.group({
      emailOrPhone: ['', Validators.required],
      password: ['', Validators.required]
    });

    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    })
  }
  selectMenu(menu: any) {
    this.selectedMenu = menu;
  }

  ngOnInit(): void {
    this.menus = this.operationService.getAllProducts();
    this.selectedMenu = this.menus[0];
    console.log(this.menus)
  }

  search(term: string){
    if(term){
this.route.navigateByUrl('/search/'+ term)
    }
  }


  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const emailOrPhone = this.loginForm.value.emailOrPhone;
    const password = this.loginForm.value.password;

    const loginResult = this.operationService.loginUser(emailOrPhone, password);
console.log(loginResult, 'loginResult')
    // Handle the login result
    // switch (loginResult) {
    //   case 'success':
    //     // Redirect to the home page or navigate to a different component
    //     break;
    //   case 'Please check your internet connection.':
    //     // Display error message for internet connection
    //     break;
    //   case 'Invalid email/phone or password. Please try again.':
    //     // Display error message for invalid credentials
    //     break;
    //   default:
    //     // Display a generic error message
    //     break;
    // }
  }
}
