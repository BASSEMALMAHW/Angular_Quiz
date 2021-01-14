import { Component,Input, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   /**
    * Parameers
    */
   @Input()  searchWord      = '';
   @Output() searchcriteria  = new EventEmitter();
   timeout   : any           = null;

  //------------------------------------------------------------------------------------
  constructor() { }
  //-------------------------------------------------------------------------------------

  /**
   *
   */
  ngOnInit(): void {
  }
  //-------------------------------------------------------------------------------------

  /**
   *
   * @param key
   */
  searchById(key: any){
    console.log(key);
   }
   //--------------------------------------------------------------------------------------
   executeListing() {
    this.searchcriteria.emit(this.searchWord)
  }
  //--------------------------------------------------------------------------------------

  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.executeListing();
      }
    }, 500);
  }


}
