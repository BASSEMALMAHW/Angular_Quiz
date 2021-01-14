import { Component, OnInit, ViewChild } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import {UserManagmentService} from '../../services/user-managment.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  /**
   * Parameters
   */
    users            : any;
    cachedusers      : any;
    filteredUser     : any;
    user             : any;
    page             = 1;
    count            = 0;
    tableSize        = 0;
    tableSizes       = [6, 12];
    selectedUserId   = '0';
    searchWord       = '';
    @ViewChild(HeaderComponent) headerComponent : any;
    //-----------------------------------------------------------------------------------------

    /**
     *
     * @param userManagmentService
     */
    constructor(private userManagmentService : UserManagmentService,
                private router: Router,
                private spinner: NgxSpinnerService) { }
    //--------------------------------------------------------------------------------------------


    ngOnInit(): void {
      this.spinner.show('Dspinner');
      this.fetchUsers();}
    //--------------------------------------------------------------------------------------------

    /**
     *
     */
    fetchUsers(): void {
      this.userManagmentService.fetchAllUsers(this.page)
        .subscribe(
          response => {
            this.tableSize = response.total;
            this.users = response.data;
            this.cachedusers = this.users;
            this.finalize();
            console.log(response);
          },
          error => {
            console.log(error);
          });
    }
    //--------------------------------------------------------------------------------------------

    /**
     *
     * @param id
     */
    fetchUserById(id:any): void {
      this.selectedUserId = id;
      this.router.navigateByUrl('/user/'+ id);
      // this.userManagmentService.fetchUserById(id)
      //   .subscribe(
      //     response => {
      //       this.tableSize = response.total;
      //       this.user = response;
      //       console.log(response);
      //     },
      //     error => {
      //       console.log(error);
      //     });
    }
    //--------------------------------------------------------------------------------------------


    /**
     *
     * @param event
     */
    onTableDataChange(event: any){
      this.page = event.page;
      this.searchWord ='';
      this.headerComponent.searchWord = '';
      this.fetchUsers();
    }
    //--------------------------------------------------------------------------------------------

    /**
     *
     * @param event
     */
    onTableSizeChange(event : any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.searchWord ='';
      this.headerComponent.searchWord = '';
      this.fetchUsers();
    }
   //-----------------------------------------------------------------------------------------------

    finalize(){
    this.spinner.hide('Dspinner');
    }
  //-------------------------------------------------------------------------------------------------

  /**
   *
   * @param data
   */
  searchThis(data:any) {
    console.log(data)
  if (data) {
      this.filteredUser = this.users.filter( (element:any) => {
        return element.id == data;
      })
      this.users = this.filteredUser;
      console.log(this.users);
      console.log(this.filteredUser);
    } else {
      this.users = this.cachedusers;
      console.log(this.users);
      console.log(this.filteredUser);
    }
    this.finalize();

  }

}
