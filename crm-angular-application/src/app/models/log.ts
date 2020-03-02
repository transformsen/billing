export class Log {
  id: string;
  message: string;

  constructor(message: string) {
    this.id = Math.random().toString(32).replace('.', '');
    this.message = message;
  }

}
