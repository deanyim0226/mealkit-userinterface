import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealkitPageComponent } from './mealkit-page.component';

describe('MealkitPageComponent', () => {
  let component: MealkitPageComponent;
  let fixture: ComponentFixture<MealkitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealkitPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealkitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
