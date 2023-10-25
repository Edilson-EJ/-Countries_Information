import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoDaPaginaComponent } from './topo-da-pagina.component';

describe('TopoDaPaginaComponent', () => {
  let component: TopoDaPaginaComponent;
  let fixture: ComponentFixture<TopoDaPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopoDaPaginaComponent]
    });
    fixture = TestBed.createComponent(TopoDaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
