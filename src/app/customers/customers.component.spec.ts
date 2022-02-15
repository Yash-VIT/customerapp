import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import Customer from '../common/Customer';
import { CustomersCardComponent } from '../customers-card/customers-card.component';

import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let customers: Customer[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersComponent, CustomersCardComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    customers = [{
      "id": 1,
      "firstName": "Rachel",
      "lastName": "Green ",
      "gender": "female",
      "address": "Blore"
    },
    {
      "id": 4,
      "firstName": "Monica",
      "lastName": "Geller",
      "gender": "female",
      "address": "some address"
    },
    {
      "id": 5,
      "firstName": "Ross",
      "lastName": "Geller",
      "gender": "male",
      "address": "some address "
    }];
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 3 cards', () => {
    component.customers = component.complete = customers;
    fixture.detectChanges();

    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(3);
  });

  it('should create delete a customer', () => {
    component.deleteCustomerData(4);
    fixture.detectChanges();

    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(2);
  });


});
