import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact-filter';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit, OnDestroy {

  constructor(private contactService: ContactService) { }

  filterBy: ContactFilter
  sub: Subscription
  ngOnInit(): void {
    // this.filterBy.term = ''
    this.onChangeFilter()
    this.sub = this.contactService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  onChangeFilter() {
    this.contactService.setFilterBy(this.filterBy)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
