import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public contactService: ContactService,
    private userService: UserService) { }

  contact: Contact

  ngOnInit(): void {
    this.route.data.subscribe(date => this.contact = date['contact'])
  }

}
