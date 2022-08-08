import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-demo-app-rxjs-operator',
  templateUrl: './demo-app-rxjs-operator.component.html',
  styleUrls: ['./demo-app-rxjs-operator.component.css']
})
export class DemoAppRxjsOperatorComponent implements OnInit {



  constructor(private http: HttpClient) { }




  ngOnInit(): void {

    const baseUrl = 'https://dog.ceo/api/breed/';
    const baseObs$ = of('hound', 'mastiff', 'retriever');

    baseObs$.pipe(
      concatMap((xyz) => {
        const baseUrl = 'https://dog.ceo/api/breed/' + xyz + '/list';
        return this.http.get(baseUrl);
      })
    ).subscribe(data => {
      console.log(data);
    })


  }

}
