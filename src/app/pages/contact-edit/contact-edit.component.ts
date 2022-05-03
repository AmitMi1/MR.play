import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  contact: Contact

  ngOnInit(): void {
    console.log(this.route.data);
    this.route.data.subscribe(async ({ contact }) => {
      this.contact = contact._id ? contact : new Contact()
    })
  }

  async onSaveContact() {
    console.log(this.contact);
    const newContact = await lastValueFrom(this.contactService.saveContact({ ...this.contact }))
    this.router.navigate(['contact/', newContact._id])

  }

}
