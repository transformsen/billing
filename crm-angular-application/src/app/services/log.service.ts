import { Injectable } from '@angular/core';
import {Log} from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private static logs: Log[] = [];

  get logs() {
    return LogService.logs;
  }

  constructor() { }

  add(message: string) {
    if (this.logs.length > 2) {
      LogService.logs = LogService.logs.splice(1);
    }

    LogService.logs.push(new Log(message));
  }

  remove(id: string) {
    LogService.logs = LogService.logs.filter(log => log.id !== id);
  }
}
