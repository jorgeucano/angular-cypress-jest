import { sandboxOf } from 'angular-playground';
import { PlaygroundComponent } from './playground.component';
import {iTitle} from '../interfaces/title';

const youtube: iTitle = {
  text: 'Hello youtube!',
  class: 'red'
};
export default sandboxOf(PlaygroundComponent)
  .add('default', {
    template: `<app-playground [title]="title"></app-playground>`,
    context: {
      title: youtube
    }
  })
  .add('without title', {
    template: `<app-playground></app-playground>`
  });
