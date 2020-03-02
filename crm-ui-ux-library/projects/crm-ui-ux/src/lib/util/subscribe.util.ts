import {Subscription} from 'rxjs';

export const SubscribeUtil = {
  /**
   * unsubscribe subscriptions
   * @param subscription subscription or subscriptions
   */
  unSubscribe(subscription: Subscription | Subscription[]) {
    if (subscription instanceof Array) {
      subscription.forEach((sub) => {
        this.unSubscribe(sub);
      });
    } else if (subscription) {
      subscription.unsubscribe();
    }
  },
};
