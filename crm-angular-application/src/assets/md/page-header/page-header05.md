#### html
```html
<crm-page-header>
  <crm-page-title>
    Title
  </crm-page-title>

  <crm-page-sub-title>
    Sub title
  </crm-page-sub-title>

  <crm-page-tab [(value)]="tab">
    <crm-page-tab-item value="tab-1">
      Tab 1
    </crm-page-tab-item>

    <crm-page-tab-item value="tab-2">
      Tab 2
    </crm-page-tab-item>
  </crm-page-tab>
</crm-page-header>
```

#### typescript
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  tab = 'tab-1';

  constructor() { }

  ngOnInit() {
  }
}
```

