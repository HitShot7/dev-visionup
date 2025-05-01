import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayourtSinHeaderComponent } from './layourt-sin-header.component';

describe('LayourtSinHeaderComponent', () => {
  let component: LayourtSinHeaderComponent;
  let fixture: ComponentFixture<LayourtSinHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayourtSinHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayourtSinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
