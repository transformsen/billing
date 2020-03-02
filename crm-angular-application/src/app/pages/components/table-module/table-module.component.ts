import { Component, OnInit } from '@angular/core';
import {CrmAutoTableColumn} from 'crm-ui-ux';

@Component({
  selector: 'app-table-module',
  templateUrl: './table-module.component.html',
  styleUrls: ['./table-module.component.scss']
})
export class TableModuleComponent implements OnInit {
  columnsWithCustomCell: CrmAutoTableColumn[] = [
    {
      label: 'Header Label 1',
      property: 'property1',
      useCustomCell: true,
    },
    {
      label: 'Header Label 2',
      property: 'property2',
    },
    {
      label: 'Header Label 3',
      property: 'property3',
    }
  ];

  columnsWithDeepProperty: CrmAutoTableColumn[] = [
    {
      label: 'Click to sort 1',
      property: 'property1.property1',
      useSort: true,
    },
    {
      label: 'Click to sort 2',
      property: 'property1.property2',
      useSort: true,
    },
    {
      label: 'Header Label 3',
      property: 'property2',
    }
  ];

  deepRows = [
    {
      property1: {
        property1: '1-1-1',
        property2: '1-1-2',
      },
      property2: '1-2',
    },
    {
      property1: {
        property1: '2-1-1',
        property2: '2-1-2',
      },
      property2: '2-2',
    },
    {
      property1: {
        property1: '3-1-1',
        property2: '3-1-2',
      },
      property2: '3-2',
    },
  ];

  columnsWithUseSort: CrmAutoTableColumn[] = [
    {
      label: 'Click to sort 1',
      property: 'property1',
      useSort: true,
    },
    {
      label: 'Click to sort 2',
      property: 'property2',
      useSort: true,
    },
    {
      label: 'Header Label 3',
      property: 'property3',
    }
  ];

  columns: CrmAutoTableColumn[] = [
    {
      label: 'Header Label 1',
      property: 'property1',
    },
    {
      label: 'Header Label 2',
      property: 'property2',
    },
    {
      label: 'Header Label 3',
      property: 'property3',
    }
  ];

  rows = [
    {
      property1: 1,
      property2: 2,
      property3: 3,
    },
    {
      property1: 2,
      property2: 3,
      property3: 4,
    },
    {
      property1: 3,
      property2: 4,
      property3: 5,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
  ];

  page = 0;
  manyRows = [
    {
      property1: 1,
      property2: 2,
      property3: 3,
    },
    {
      property1: 2,
      property2: 3,
      property3: 4,
    },
    {
      property1: 3,
      property2: 4,
      property3: 5,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
    {
      property1: 4,
      property2: 5,
      property3: 6,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
