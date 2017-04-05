import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

declare var $: any;

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['../../assets/css/jquery.bxslider.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public place:number;
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title
  ) { }

  public ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
	this.place = 0;

    $(document).ready(function() {
      $('#overlay').fadeIn('fast', function() {
        $('#box').animate({ 'top': '160px' }, 800);
      });
      $('.box select').change(function() {
        $('#box').animate({ 'top': '-100%' }, 800, function() {
          $('#overlay').fadeOut('fast');
        });
      });
      $('.bxslider').bxSlider({ mode: 'fade', controls: true, captions: false, pager: false });
      $('.slider-col').bxSlider({ slideWidth: 300, minSlides: 1, maxSlides: 7, moveSlides: 1, controls: true, captions: false, pager: false });
    });
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
