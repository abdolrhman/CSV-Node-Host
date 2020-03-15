import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  computers = [];
  company = [];

  constructor(private httpClient: HttpClient){
    this.httpClient.get("http://localhost:8001/freeTxt?RAM=8").subscribe( response => {
      console.log(response);
      this.computers = response['data'];    
    })
  }

  searchByMenu(searchValue, searchItem){
    this.httpClient.get(`http://localhost:8001/freeTxt?${searchItem.value}=${searchValue.value}`).subscribe( response => {
      console.log(response);
      this.computers = response['data'];    
    })
  }

  SearchByProduct(searchValue){
    this.computers = [];
    this.httpClient.get(`http://localhost:8001/freeTxt?Product=${searchValue.value}`).subscribe( response => {
      this.computers = response['data'];    
    });
    this.httpClient.get(`http://localhost:8001/freeTxt?Company=${searchValue.value}`).subscribe( response => {
      this.company = response['data'];    
    });
  }
}
