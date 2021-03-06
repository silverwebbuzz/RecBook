import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddReceiptPage } from './add-receipt.page';

describe('AddReceiptPage', () => {
  let component: AddReceiptPage;
  let fixture: ComponentFixture<AddReceiptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReceiptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
