import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchValue:string='IPhone';

changeSearchValue(inputdata:any){
  this.searchValue=inputdata.target.value;
  // alert(this.searchValue);
}
}
