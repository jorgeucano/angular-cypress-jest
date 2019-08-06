import {DebugElement} from '@angular/core';
export const ButtonClickEvent = {
  info: 'not really button but div#forClick'
};
export function click(
  el: DebugElement | HTMLElement,
  eventObj: any = ButtonClickEvent
): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
