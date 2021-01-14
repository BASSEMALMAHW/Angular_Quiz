import { Component, OnInit, Input  } from '@angular/core';
import {UserManagmentService} from '../../services/user-managment.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit {
  /**
   * Paramaeters
   */
    selectedUserId: any;
    user                 :any;
    filteredUser         : any;
    cachedusers          : any;
    searchWord           = '';
  //--------------------------------------------------------------------

  /**
   *
   */
  constructor(private userManagmentService : UserManagmentService,
              private acticeRouter: ActivatedRoute,
              private route: Router,
              private spinner: NgxSpinnerService) { }
  //--------------------------------------------------------------------

  /**
   *
   */
  ngOnInit(): void {
    this.spinner.show();
    this.selectedUserId = this.acticeRouter.snapshot.params.id;
    this.fetchUserById(this.selectedUserId);
  }

  //--------------------------------------------------------------------------------------------

    /**
     *
     * @param id
     */
    fetchUserById(id:any): void {
      this.userManagmentService.fetchUserById(id)
        .subscribe(
          response => {
            this.user = response.data;
            this.cachedusers = this.user;
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
   */
  goBackHome(){
      this.route.navigateByUrl('');
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
    this.user = this.user.id != data ? this.filteredUser : this.user ;
      console.log(this.user);
      console.log(this.filteredUser);
    } else {
      this.user = this.cachedusers;
      console.log(this.user);
      console.log(this.filteredUser);
    }
    this.finalize();

  }

}
