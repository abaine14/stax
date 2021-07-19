import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }
  inv_t(){
    var a = document.getElementById('t'); setTimeout(()=>{a.innerText = '$' + d.toLocaleString(); (<HTMLInputElement>document.getElementById('tot')).value= String(d)},50)
    var b = Number(this.inv_v().e);var c = Number(this.inv_v().c);var d = b * c; console.log(d)
  }
  inv_v(){
    var a = (<HTMLInputElement>document.getElementById('mem')).value;var b = (<HTMLInputElement>document.getElementById('d')).value
    var c = (<HTMLInputElement>document.getElementById('q')).value; var e = (<HTMLInputElement>document.getElementById('p')).value;
    var f = (<HTMLInputElement>document.getElementById('tot')).value;
    var val = parseInt((<HTMLInputElement>document.getElementById('val')).value);var val2 = parseInt((<HTMLInputElement>document.getElementById('val2')).value)
    var val3 = parseInt((<HTMLInputElement>document.getElementById('val3')).value);var val4 = parseInt((<HTMLInputElement>document.getElementById('val4')).value)
    return{a,b,c,e,f, val,val2,val3,val4}
  }
   async postInvoice(){
    var a = document.getElementById('m_m');var a2 = document.getElementById('m_d');var a3 = document.getElementById('m_q');var a4 = document.getElementById('m_p');
     if(this.inv_v().a ==='') {a.style.display='block'}else{(<HTMLInputElement>document.getElementById('val')).value='0';a.style.display='none'}
     if(this.inv_v().b ===''){a2.style.display='block'}else{(<HTMLInputElement>document.getElementById('val2')).value='0';a2.style.display='none'}
     if(this.inv_v().c ==='0'){a3.style.display='block'}else{(<HTMLInputElement>document.getElementById('val3')).value='0';a3.style.display='none'}
     if(this.inv_v().e ==='0'){a4.style.display='block'}else{(<HTMLInputElement>document.getElementById('val4')).value='0';a4.style.display='none'}
     setTimeout(()=>{ 
       if(isNaN(Number(this.inv_v().val)) ||isNaN(Number(this.inv_v().val2)) ||isNaN(Number(this.inv_v().val3))||isNaN(Number(this.inv_v().val4))){alert('Fill in the missing fields')}else{
        var xhr = new XMLHttpRequest();xhr.addEventListener("readystatechange", function() {if(this.readyState === 4) {console.log(this.responseText);
          var parse =JSON.parse(this.responseText);
          console.log(parse);
          var data_set = parse;
         window.sessionStorage.setItem('items',data_set.meta.lineItems[0].item); window.sessionStorage.setItem('price',data_set.total); window.sessionStorage.setItem('details',data_set.meta.lineItems[0].details); window.sessionStorage.setItem('id',data_set.customer_id)
         
        }});

xhr.open("POST", "https://private-anon-475a0b0d3e-fattmerchant.apiary-mock.com/invoice");
xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYmMwMTM4NC0wZGNlLTQyOGEtYTRjMy02YmZjMDMyNzFhYzUiLCJtZXJjaGFudCI6IjJjMjA1MmFiLWQyMjQtNGFiNy1hMmYwLTQ2MDhlZTk1YzFiMyIsImdvZFVzZXIiOmZhbHNlLCJqdGkiOiJUNWZKM3hFSTFRTGFJdVcwIiwiaWF0IjoxNjEzMDUwNDAwLCJleHAiOjQ3NjY2NTA0MDAsImlzcyI6Imh0dHA6Ly9hcGkucWQuZmF0dHBheS5jb20vdGVhbS9hcGlrZXkiLCJuYmYiOjE2MTMwNTA0MDAsImFzc3VtaW5nIjpmYWxzZSwiYnJhbmQiOiJmYXR0bWVyY2hhbnQifQ.V3mS7O1afTHLspWVpLO6Xdtbcao_WdWych7-VQwHV8E");
xhr.send(JSON.stringify({'memo':this.inv_v().a , 'details':this.inv_v().b, 'price':this.inv_v().e, 'total': this.inv_v().f})); alert("Invoice has been submitted!! Fields have been cleared to create another invoice. Otherwise it is safe to exit") 
;window.sessionStorage.setItem('post_inv','')

setTimeout(()=>{ var t =document.getElementById('t');t.innerText ='$0';
  (<HTMLInputElement>document.getElementById('mem')).value ='';(<HTMLInputElement>document.getElementById('d')).value ='';(<HTMLInputElement>document.getElementById('q')).value ='0';(<HTMLInputElement>document.getElementById('p')).value ='0'},150)

}
     },150)
     
   }

}
