import { Component } from '@angular/core';
import { OperationService } from 'src/app/Shared/operation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selectedMenu: any;
  menus: any[] = [];

  constructor(private operationService: OperationService ){

  }
  selectMenu(menu: any) {
    this.selectedMenu = menu;
  }

  ngOnInit(): void {
    // this.menus = this.operationService.getMenuItems();
    // this.selectedMenu = this.menus[0];
    // console.log(this.menus)
  }
}
