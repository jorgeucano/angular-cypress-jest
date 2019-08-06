import {TestBed, async, ComponentFixture, fakeAsync, flush} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HeroLoaderModule} from '@herodevs/hero-loader';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {click} from './tests-fn-utilitarias';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HeroLoaderModule],
      declarations: [AppComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it('should create the app', async(() => {
     // fixture = TestBed.createComponent(AppComponent);
     // app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'angular-cypress'`, async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('angular-cypress');
  }));
  it('should render title in a h1 tag', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    const header = el.query(By.css('h1'));
    // expect(compiled.querySelector('h1').textContent).toContain(
    //   'angular-cypress'
    // );
    expect(header.nativeElement.textContent).toEqual(expect.stringContaining('angular-cypress'));
  }));
  it('change inner text for div id=forClick', fakeAsync(() => {
    fixture.detectChanges();
    const clickable = el.query(By.css('#forClick'));
    click(clickable);
    fixture.detectChanges();
    const spawnedEl = el.query(By.css('h3'));
    fixture.detectChanges();
    flush();
    expect(spawnedEl.nativeElement.textContent).toEqual(expect.stringContaining('clicked'));
  }));

});
