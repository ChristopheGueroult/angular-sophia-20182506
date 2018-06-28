import { Component, OnInit } from '@angular/core';
import { CollectionHttpService } from '../../../core/services/collection-http.service';
import { Router } from '@angular/router';
import { ItemHttp } from '../../../shared/interfaces/item-http.model';

@Component({
  selector: 'app-add-http',
  templateUrl: './add-http.component.html',
  styleUrls: ['./add-http.component.css']
})
export class AddHttpComponent implements OnInit {

  constructor(
    private collectionHttpService: CollectionHttpService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item : ItemHttp): void {
    // console.log(item);
    this.collectionHttpService.add(item).subscribe((data) => {
      // console.log(data);
      if (data) {
        this.router.navigate(['items/list-http']);
      } else {
        console.log('msg erreur');
      }
    });
  }


}
