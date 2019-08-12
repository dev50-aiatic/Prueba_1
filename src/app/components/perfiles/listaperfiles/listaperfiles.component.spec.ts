import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaperfilesComponent } from './listaperfiles.component';

describe('ListaperfilesComponent', () => {
  let component: ListaperfilesComponent;
  let fixture: ComponentFixture<ListaperfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaperfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaperfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
