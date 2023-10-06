import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Output() selectedBook = new EventEmitter<Book>();

  handleBookSelected(book: Book) {
    this.selectedBook.emit(book);
  }

  myBooks: Book[] = [
    new Book(
      'Harry Potter',
      'JKR',
      'Fantasy',
      'https://cdn.vox-cdn.com/thumbor/VnKewmsq_3QjD6XxQ7M6lZkk1wc=/0x0:1920x1080/1820x1213/filters:focal(755x89:1061x395):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72144783/harrypotter.0.jpg'
    ),
    new Book(
      'The Cat In The Hat',
      'Dr, Seuss',
      'Childrens',
      'https://th.bing.com/th/id/R.02d41d23646b95dd989e3c042dc57194?rik=asQkvo%2frq5H9bQ&riu=http%3a%2f%2fwww.weekendnotes.com%2fim%2f007%2f09%2fthe-cat-in-the-hat11.jpg&ehk=bc47ghfbJctccShe%2f5OMNBbQc2zOT7B4vdhfzEC4qjY%3d&risl=&pid=ImgRaw&r=0'
    ),
    new Book(
      'Hatchet',
      'Gary Paulsen',
      'Young Adult',
      'https://th.bing.com/th/id/OIP.G0MM5dv6cK-p5rBH-P-TxgHaLC?pid=ImgDet&rs=1'
    ),
  ];
}
