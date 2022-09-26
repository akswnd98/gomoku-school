import Notifier from '../Notifier';

export default abstract class Observer {
  abstract update (notifier: Notifier, e: any): Promise<void>;
}
