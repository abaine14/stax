import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  opened: boolean;
  itm_form = new FormControl();
  itms: string[] = ['meeseeks', 'Meeseeks Box'];
  filteredItms: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredItms = this.itm_form.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    this.getItems()
  }
  ref(){window.location.reload()}
  async getItems(){
    var xhr = new XMLHttpRequest();//xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      var parse =JSON.parse(this.responseText); var itms = document.getElementById('inv')
      console.log(parse.data);
      var data_set = parse.data;var inv;
     for(let i=0;i<data_set.length;i++){
      inv = document.createElement('div'); inv.setAttribute('id', data_set[i].item);
      inv.innerHTML = '<div style="color: #151c47; border-bottom: 2px solid #151c47; cursor: pointer; width: 100%;height: 60px;font-size:20px;text-align:center;white-space: nowrap; overflow: auto;">'+
       '<div style=" margin-top:10px; min-width:150px;width:19%;vertical-align:bottom;display:inline-block;">' + data_set[i].item + '</div>' +'<div style=" min-width:150px;width:19%;display:inline-block; vertical-align:bottom;">'+ 
      '$'+ data_set[i].price + '</div>'+'<div style=" min-width:150px;;width:19%;margin-left:10px;display:inline-block; vertical-align:bottom;">' + 
      data_set[i].details +'</div>' +'<div style=" min-width:275px;width:40%;display:inline-block; vertical-align:bottom;">'+ data_set[i].id+ '</div>' +'</div>'
      itms.appendChild(inv);
     }
    (<HTMLInputElement>document.getElementById('p_inv')).value = window.sessionStorage.getItem('items');(<HTMLInputElement>document.getElementById('p_inv2')).value = window.sessionStorage.getItem('price');
    (<HTMLInputElement>document.getElementById('p_inv3')).value = window.sessionStorage.getItem('details');(<HTMLInputElement>document.getElementById('p_inv4')).value = window.sessionStorage.getItem('id');
     function v(){ 
      var pv= (<HTMLInputElement>document.getElementById('p_inv')).value;var pv2= (<HTMLInputElement>document.getElementById('p_inv2')).value
      var pv3= (<HTMLInputElement>document.getElementById('p_inv3')).value;var pv4= (<HTMLInputElement>document.getElementById('p_inv4')).value
      return{pv,pv2,pv3,pv4}
    };
    setTimeout(()=>{
      var inv2; inv2 = document.createElement('div'); var itms2 = document.getElementById('inv2')
      inv2.innerHTML = '<div style="color: #151c47; border-bottom: 2px solid #151c47; cursor: pointer; width: 100%;height: 60px;font-size:20px;text-align:center;white-space: nowrap; overflow: auto;">'+
      '<div style=" margin-top:10px; min-width:150px;width:19%;vertical-align:bottom;display:inline-block;">' + v().pv + '</div>' +'<div style=" min-width:150px;width:19%;display:inline-block; vertical-align:bottom;">'+ 
     '$'+ v().pv2 + '</div>'+'<div style=" min-width:150px;;width:19%;margin-left:10px;display:inline-block; vertical-align:bottom;">' + 
     v().pv3 +'</div>' +'<div style=" min-width:275px;width:40%;display:inline-block; vertical-align:bottom;">'+ v().pv4+ '</div>' +'</div>';
      itms2.appendChild(inv2)
    },150)
   
     //Example of Autofill Dom Manipulation logic that is fed from Array. Preferrably read from a database instead of directl calling 
     document.getElementById('auto').onkeyup=()=>{
       function aut1(){ var fill =(<HTMLInputElement>document.getElementById('auto')).value; return fill}
       var div1 =document.getElementById('meeseeks'); var div2 =document.getElementById('Meeseeks Box'); 
       if(aut1()=='meeseeks'){div2.style.display='none'}else{div2.style.display='block'; div1.style.display='block'}
       if(aut1()=='Meeseeks Box'){div2.style.display='none'}else{div2.style.display='block'; div1.style.display='block'}
       if(aut1()==''){div2.style.display='block'; div1.style.display='block'}
       
     }
    }
  });
  xhr.open("GET", "https://private-anon-a1f57ddb4f-fattmerchant.apiary-mock.com/item");
  xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYmMwMTM4NC0wZGNlLTQyOGEtYTRjMy02YmZjMDMyNzFhYzUiLCJtZXJjaGFudCI6IjJjMjA1MmFiLWQyMjQtNGFiNy1hMmYwLTQ2MDhlZTk1YzFiMyIsImdvZFVzZXIiOmZhbHNlLCJqdGkiOiJUNWZKM3hFSTFRTGFJdVcwIiwiaWF0IjoxNjEzMDUwNDAwLCJleHAiOjQ3NjY2NTA0MDAsImlzcyI6Imh0dHA6Ly9hcGkucWQuZmF0dHBheS5jb20vdGVhbS9hcGlrZXkiLCJuYmYiOjE2MTMwNTA0MDAsImFzc3VtaW5nIjpmYWxzZSwiYnJhbmQiOiJmYXR0bWVyY2hhbnQifQ.V3mS7O1afTHLspWVpLO6Xdtbcao_WdWych7-VQwHV8E");
  xhr.send();
    }
    async modal(){ 
    var modal = document.getElementById('m');modal.style.display ="block"
    window.onclick = function(e) {if(e.target == modal){modal.style.display = "none";}
    document.getElementById('m_ex').onclick =()=>{modal.style.display ='none';}}
    }
  // filtter values for autocomplete
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.itms.filter(itms => this._normalizeValue(itms).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
