import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.scss']
})
export class LogItemComponent implements OnInit, OnDestroy {
  @Input() id: string;

  private timer: any;

  constructor(
    private logService: LogService,
  ) { }

  ngOnInit() {
    this.timer = setTimeout(() => {
      this.logService.remove(this.id);
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
