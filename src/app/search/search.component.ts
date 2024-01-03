import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchValue!: string;
  
  constructor(){}

  ngOnInit(): void {
    
  }


 enteredSearchValue: string = '';

  @Output()
   searchTextChanged : EventEmitter<string> = new EventEmitter<string>();
  

  onSearchTextChanged(searchValue:string) {
    this.searchTextChanged.emit(this.enteredSearchValue);
    console.log('2se',searchValue)
  }
}
