import {ElementRef} from '@angular/core';

export const PositionUtil = {
  /**
   * return true when top position is available
   * @param target target element
   * @param body body element
   */
  topPositionAvailable(target: HTMLElement, body: HTMLBodyElement) {
    let restricted = false;
    let pos = 0;

    while (target) {
      let overflow: string;

      pos += target.offsetTop;
      target = target.offsetParent as HTMLElement;

      if (target) {
        overflow = getComputedStyle(target).getPropertyValue('overflow-y');
      }

      if ((overflow !== 'visible' || target === body) && pos < 0) {
        restricted = true;
        break;
      }
    }

    return !restricted;
  },
  /**
   * return true when top position is available
   * @param target target
   */
  bottomPositionAvailable(target: HTMLElement) {
    let restricted = false;
    let pos = 0;

    while (target) {
      let overflow: string;

      pos += target.offsetTop;
      target = target.offsetParent as HTMLElement;

      if (target) {
        overflow = getComputedStyle(target).getPropertyValue('overflow-y');

        const height = target.offsetHeight;

        if (overflow !== 'visible' && target.scrollTop + target.offsetHeight < pos + height) {
          restricted = true;
          break;
        }
      }
    }

    return !restricted;
  },
  /**
   * return available position 'top' | 'bottom'
   * @param target target element
   * @param body body element
   * @param priority position priority
   */
  getAvailablePosition(target: HTMLElement, body: HTMLBodyElement, priority: 'top' | 'bottom' = 'top') {
    const top = PositionUtil.topPositionAvailable(target, body);
    const bottom = PositionUtil.bottomPositionAvailable(target);

    if (bottom && top) {
      return priority;
    } else if (bottom && !top) {
      return 'bottom';
    } else {
      return 'top';
    }
  },
  /**
   * return true when target is inside of the container
   * @param target target
   * @param container container
   */
  contains(target: HTMLElement | ElementRef<HTMLElement>, container: HTMLElement | ElementRef<HTMLElement>) {
    target = (target instanceof ElementRef) ? target.nativeElement : target as HTMLElement;
    container = (container instanceof ElementRef) ? container.nativeElement : container as HTMLElement;

    if (container && target) {
      return container.contains(target);
    }
  }
};
