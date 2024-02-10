import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BooksData } from '../books.const';
import { MatTableModule} from '@angular/material/table';
import { BookCardListComponent } from './book-card-list/book-card-list.component';
import { MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatTableModule,BookCardListComponent,MatCardModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageComponent {
  books: BookModel[] | any = BooksData

  ngOnInit(){                 
    console.log(this.books);
  }

}
export interface BookModel{
  name:string
  author:string
  year:string
  image: string
  category: string
  star: string
  id: string
  
}
