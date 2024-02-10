import { Component, Input } from '@angular/core';
import { BookModel } from '../home-page.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-book-card-list',
  standalone: true,
  imports: [MatCardModule],             //MarCardModule ben ekledim
  templateUrl: './book-card-list.component.html',
  styleUrl: './book-card-list.component.scss'
})
export class BookCardListComponent {
  @Input() books: BookModel[]=[];

  addToCart(book:BookModel){
    console.log("book:",book);
  }


}
