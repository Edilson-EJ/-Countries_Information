import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacoesInformacoesComponent } from './nacoes-informacoes.component';

describe('NacoesInformacoesComponent', () => {
  let component: NacoesInformacoesComponent;
  let fixture: ComponentFixture<NacoesInformacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NacoesInformacoesComponent]
    });
    fixture = TestBed.createComponent(NacoesInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
