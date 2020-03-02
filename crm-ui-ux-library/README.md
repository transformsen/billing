# BUILD CRM UI UX Library
npm run build

# CRM UI UX Library

For example of usage, please reference demo application.

## Installation

Run following command from your application to install library.

```bash
# install on local
npm i <path-to-library>/crm-ui-ux
```

Edit `angular.json` of your application to preserve symlink.

```
"architect": {
  "build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
      + "preserveSymlinks": true,
      "outputPath": "dist/test",
```

Import `crm-ui-ux/styles/crm-styles.css` from the `styles.scss` to use Segoe UI fonts.

```scss
@import url('crm-ui-ux/styles/crm-styles.css');
```

## Documentation

### Index

1. [CrmSectionModule](#crmsectionmodule)
1. [CrmPageHeaderModule](#crmpageheadermodule)
1. [CrmPageContentModule](#crmpagecontentmodule)
1. [CrmIconModule](#crmiconmodule)
1. [CrmGroupModule](#crmgroupmodule)
1. [CrmTooltipModule](#crmtooltipmodule)
1. [CrmInputModule](#crminputmodule)
1. [CrmFieldModule](#crmfieldmodule)
1. [CrmDropdownModule](#crmdropdownmodule)
1. [CrmButtonModule](#crmbuttonmodule)
1. [CrmTableModule](#crmtablemodule)
1. [CrmFieldTableModule](#crmfieldtablemodule)
1. [CrmEllipsisContentModule](#crmellipsiscontentmodule)
1. [CrmAccordionTableModule](#crmaccordiontablemodule)


### CrmSectionModule

1. [CrmSectionComponent](#crmsectioncomponent)
1. [CrmSectionHeaderComponent](#crmsectionheadercomponent)
1. [CrmSectionContentComponent](#crmsectioncontentcomponent)
1. [CrmSectionContentFooterComponent](#crmsectioncontentfootercomponent)

#### CrmSectionComponent

Create section.

**HTML**
```html
<crm-section display="horizontal"></crm-section>
<crm-section display="vertical"></crm-section>
```
**ATTRIBUTES**
```
// set section display type
// default is 'vertical'
display: 'horizontal' | 'vertical'
```

#### CrmSectionHeaderComponent

Set title for section.

**HTML**
```html
<crm-section-header></crm-section-header>
```

#### CrmSectionContentComponent

Set content for section.

**HTML**
```html
<crm-section-content></crm-section-content>
```

#### CrmSectionContentFooterComponent

Footer for section content

**HTML**
```html
<crm-section-content-footer></crm-section-content-footer>
```

### CrmPageHeaderModule

1. [CrmPageHeaderComponent](#crmpageheadercomponent)
1. [CrmPageTitleComponent](#crmpagetitlecomponent)
1. [CrmPageSubTitleComponent](#crmpagesubtitlecomponent)
1. [CrmPageTabComponent](#crmpagetabcomponent)
1. [CrmPageTabItemComponent](#crmpagetabitemcomponent)

#### CrmPageHeaderComponent

Page header.\
It doesn't have fixed or sticky position.\
Neither z-index.

**HTML**
```html
<crm-page-header></crm-page-header>
```

#### CrmPageTitleComponent

Title for page header.

**HTML**
```html
<crm-page-title></crm-page-title>
```

#### CrmPageSubTitleComponent

Sub title for page header.

**HTML**
```html
<crm-page-sub-title></crm-page-sub-title>
```

#### CrmPageTabComponent

Tab container for page header.

**HTML**
```html
<crm-page-tab [(value)]="value"></crm-page-tab>
```
**ATTRIBUTES**
```
// value must be set to detect tab change
// page tab component has valueChange event, so please set with [(value)]="value"
value: string
```
**EVENTS**
```
// value change will be occurred when tab item is clicked
// each tab item component will have specific value, and page tab component detect which tab item component is clicked
valueChange: EventEmitter<string>
```

#### CrmPageTabItemComponent

Tab item component for page tab component.

**HTML**
```html
<crm-page-tab-item value="value"></crm-page-tab-item>
```
**ATTRIBUTES**
```
// this will be identifier of the tab item component
// page tab component use this value to detect which tab item component is clicked and emit this value to parent component
value: string
```
**EVENTS**
```
// used from page tab component to detect click event of the tab item component
tabClicked: EventEmitter<string>
```

### CrmPageContentModule

1. [CrmPageContentComponent](#crmpagecontentcomponent)

#### CrmPageContentComponent

Wrapper for page content.\
Max width restrict to `930px`.\
And it has breakpoint from `930px`.

**HTML**
```html
<crm-page-content></crm-page-content>
```

### CrmIconModule

1. [CrmIconComponent](#crmiconcomponent)

#### CrmIconComponent

It provides preset icons and can consume content as an icon.

**HTML**
```html
<crm-icon icon="icon" clickable>
  <content></content>
</crm-icon>
```
**ATTRIBUTES**
```
// to use preset icons, set icon attribute
// if icon attribute is not set, icon component will consume content as an icon
icon: string

// if clickable attribute is set, cursor on icon changes to `pointer`
clickable: boolean
```

### CrmGroupModule

1. [CrmGroupComponent](#crmgroupcomponent)
1. [CrmGroupItemDirective](#crmgroupitemdirective)

#### CrmGroupComponent

Treat children component as a group.\
It detect `crmGroupItem` directive as children.\
**Note** This is not responsive component, so please use for static group items.

**HTML**
```html
<crm-group direction="vertical" gap="10"></crm-group>
```
**ATTRIBUTES**
```
// set group align direction
// default is horizontal
direction: 'vertical' | 'horizontal'

// set gap between group items
// default is 10
// unit is `px`
gap: string | number
```

#### CrmGroupItemDirective

Group item directive for group component.

**HTML**
```html
<crm-group>
  <element crmGroupItem></element>
  <element crmGroupItem></element>
  <element crmGroupItem></element>
</crm-group>
```

### CrmTooltipModule

1. [CrmTooltipComponent](#crmtooltipcomponent)
1. [CrmTooltipContentDirective](#crmtooltipcontentdirective)

#### CrmTooltipComponent

Tooltip component.\
Wrap some element with this component to show tooltip.\
It needs `crmTooltipContent` directive to display tooltip content.

**HTML**
```html
<crm-tooltip trigger="hover">
  <element></element>
</crm-tooltip>
```
**ATTRIBUTES**
```
// trigger for toggle tooltip
// default is 'hover'
trigger: 'hover' | 'click'
```

#### CrmTooltipContentDirective

Tooltip content directive.\
This will be displayed when tooltip appears.

**HTML**
```html
<crm-tooltip>
  <element></element>
  <element crmTooltipContent>
    Content
  </element>
</crm-tooltip>
```

### CrmInputModule

1. [CrmInputComponent](#crminputcomponent)

#### CrmInputComponent

Input component.\
It doesn't have its own validating feature.\
To validate value, see [CrmFieldComponent](#crmfieldcomponent).

**HTML**
```html
<crm-input
  [(value)]="value"
  disabled
  placeholder="Placeholder"
  type="text"></crm-input>
```
**ATTRIBUTES**
```
// value for input
value: string

// disabled state of input
disabled: boolean

// placeholder for input
placeholder: string

// input type
// default is 'text'
// for 'date' and 'ssn', the component will set specific format for value
type: 'text' | 'date' | 'ssn'
```
**EVENTS**
```
// emit changed value
valueChange: string
```

### CrmFieldModule

Label/value set.\
When input is content, it can consume `validators` attributes to do validation.

**HTML**
```html
<crm-field
  label="Label"
  [validators]="validators"
  helper="Helper text"
  required>
</crm-field>
```
**ATTRIBUTES**
```
// set label to field
label: string

// validators for input component
// there are preset validator for required, date, ssn validation
// note that field does not validate automatically
// please set appropriate validators
// * required: CrmRequiredValidator(message: string): CrmValidator
// * date: CrmDateValidator(message: string): CrmValidator
// * ssn: CrmSSNValidator(message: string): CrmValidator
validators: CrmValidator[]

// set helper text for field
helper: string

// set field as required
// this just show asterisk beside of the label
// note that field does not validate automatically
required: boolean
```

### CrmDropdownModule

1. [CrmDropdownComponent](#crmdropdowncomponent)

#### CrmDropdownComponent

Dropdown component.

**HTML**
```html
<crm-dropdown
  [options]="options"
  [(value)]="value"
  placeholder="Placeholder"></crm-dropdown>
```
**ATTRIBUTES**
```
// value for dropdown
value: string

// options for dropdown
// please use `CrmDropdownOption` interface
options: CrmDropdownOption[]

// placeholder for input
// default is 'Select...'
placeholder: string
```

### CrmButtonModule

1. [CrmButtonComponent](#crmbuttoncomponent)

#### CrmButtonComponent

Button component.

**HTML**
```html
<crm-button align="center" disabled dropdown search type="primary"></crm-button>
```
**ATTRIBUTES**
```
// set button type
type: 'primary' | 'secondary' | 'inline'

// set button horizontal alignment
align: 'start' | 'center' | 'end'

// set button disabled
disabled: boolean

// use preset dropdown icon for button
dropdown: boolean

// use preset sesarch icon for button
sesarch: boolean
```

### CrmTableModule

1. [CrmTableContainerComponent](#CrmTableContainerComponent)
1. [CrmTableComponent](#CrmTableComponent)
1. [CrmRowComponent](#CrmRowComponent)
1. [CrmCellComponent](#CrmCellComponent)
1. [CrmColgroupComponent](#CrmColgroupComponent)
1. [CrmAutoTableComponent](#CrmAutoTableComponent)

#### CrmTableContainerComponent

Table container.\
Default table doesn't scroll horizontally itself.\
So please wrap table component with table container component.\
This is not needed if you use  [CrmAutoTableComponent](#CrmAutoTableComponent).

**HTML**
```html
<crm-table-container></crm-table-container>
```

#### CrmTableComponent

Table component.\
Only table outlet which is `display: table`.\
Using this is not recommended.\
If you want to create table, please reference [CrmAutoTableComponent](#CrmAutoTableComponent).

**HTML**
```html
<crm-table></crm-table>
```

#### CrmRowComponent

Row component.\
Used as row from table component.\
Using this is not recommended.\
If you want to create table, please reference [CrmAutoTableComponent](#CrmAutoTableComponent).

**HTML**
```html
<crm-row header></crm-row>
```
**ATTRIBUTES**
```
// define header row or not
header: boolean
```

#### CrmCellComponent

Cell component.\
Used as cell from table component.\
Using this is not recommended.\
If you want to create table, please reference [CrmAutoTableComponent](#CrmAutoTableComponent).

**HTML**
```html
<crm-cell
  (sortChange)="handleSortChange($event)"
  align="start"
  filterable
  property="property"
  sortable></crm-cell>
```
**ATTRIBUTES**
```
// set horizontal alignment of cell
// default is 'start'
align: 'start' | 'center' | 'end' | 'space'

// set column as filterable
// this is only displaying filter icon since there is not filter UI created
filterable: boolean

// set column as sortable
// if `true`, clicking cell to change sort direction
// multisort not allowed for now
sortable: boolean

// define which property used in this cell
// used for auto table component
property: string
```
**EVENTS**
```
// emit SortChangeEvent when sortable cell is clicked
sortChange: EventEmitter<SortChangeEvent>
```

#### CrmColgroupComponent

Colgroup component.\
Used as colgroup from table component.\
Using this is not recommended.\
If you want to create table, please reference [CrmAutoTableComponent](#CrmAutoTableComponent).

**HTML**
```html
<crm-colgroup></crm-colgroup>
```

#### CrmAutoTableComponent

Auto table component.\
This let you create table more easier.\
For detail usage, see demo application.

**HTML**
```html
<crm-auto-table
  [columns]="columns"
  [rows]="rows"
  selectable
  [(page)]="page"
  pageable
  size="10"
  (rowSelected)="handleRowSelected($event)"
  (selectedRowsChange)="handleSelectedRowsChange($event)"></crm-auto-table>
```
**ATTRIBUTES**
```
// set column definitions for auto table
columns: CrmAutoTableColumn[]

// set data for auto table
rows: any[]

// set `true` to activate selecting rows
selectable: boolean

// page number of auto table
// start from 0 and only applied when pageable is `true`
// default is 0
page: number

// set `true` to use client-side paging
pageable: boolean

// set size to display per page
// ignored when pageable is `false`
// default is 10
size: number
```
**EVENTS**
```
// emit selected row when row selected
// single row will be sent
// only available when selectable is `true`
rowSelected: EventEmitter<any>

// emit selected rows when row selected
// rows which are selected until now will be sent 
// only available when selectable is `true`
selectedRowsChange: EventEmitter<any[]>
```

### CrmFieldTableModule

1. [CrmFieldTableComponent](#crmfieldtablecomponent)
1. [CrmFieldTableContentDirective](#crmfieldtablecontentdirective)

#### CrmFieldTableComponent

Field table component.\
It make the fields looks like a table.\
This required `CrmFieldTableContentDirective` to display fields.

**HTML**
```html
<crm-field-table></crm-field-table>
```

#### CrmFieldTableContentDirective

Field table content directive.\
`CrmFieldTableComponent` reads this directive as content.

**HTML**
```html
<crm-field-table>
  <ng-template
    crmFieldTableContent
    selectable
    (selectedChange)="handleSelectedChange($event)"
    (selectableStateChange)="handleSelectableStateChange($event)">
    <crm-field label="Label">
      value
    </crm-field>
  </ng-template>
</crm-field-table>
```
**ATTRIBUTES**
```
// set `true` to row as selectable
selectable: boolean
```
**EVENTS**
```
// emit selected state when row is selected
selectedChange: EventEmitter<boolean>

// emit event when selectable state changed
// field table component consume this event to calculate select-column width
selectableStateChange: EventEmitter<void>
```

### CrmEllipsisContentModule

1. [CrmEllipsisContentComponent](#crmellipsiscontentcomponent)

#### CrmEllipsisContentComponent

Automatically apply text ellipsis by max line number.\
It allows expand and collapse text.

**HTML**
```html
<crm-ellipsis-content [content]="content" maxLine="3"></crm-ellipsis-content>
```
**ATTRIBUTES**
```
// content to display
content: string

// max line to display
maxLine: number | string
```

### CrmAccordionTableModule

1. [CrmAccordionTableComponent](#crmaccordiontablecomponent)
1. [CrmPageableAccordionTableComponent](#crmpageableaccordiontablecomponent)
1. [CrmAccordionHeaderItemDirective](#crmaccordionheaderitemdirective)
1. [CrmAccordionBodyItemDirective](#crmaccordionbodyitemdirective)

#### CrmAccordionTableComponent

Accordion table component.\
This only provide skeleton since UI specification is not exists.

**HTML**
```html
<crm-accordion-table
  [rows]="rows"
  useBorderTop
  useBorderBottom
  (selectedRowsChange)="handleSelectedRowsChange($event)"
  (rowSelected)="handleRowSelected($event)"></crm-accordion-table>
```
**ATTRIBUTES**
```
// data for accordion table
rows: any[]

// render top border
useBorderTop: boolean

// render bottom border
useBorderBottom: boolean
```
**EVENTS**
```
// emit selected row when row selected
// single row will be sent
rowSelected: EventEmitter<any>

// emit selected rows when row selected
// rows which are selected until now will be sent 
selectedRowsChange: EventEmitter<any[]>
```

#### CrmPageableAccordionTableComponent

Multiple accordion tables with pagination.\
This will render each item of data as a single accordion table.\
And each accordion will use item's children as `rows`.\
Each accordion reads children from item of data with `childrenProperty`.

**HTML**
```html
<crm-pageable-accordion-table
  [(page)]="page"
  size="10"
  childrenProperty="children"
  [data]="data"></crm-pageable-accordion-table>
```

**ATTRIBUTES**
```
// page number of table
// starts from 0 and default is 0
page: number

// size per each page
// default is 10
size: number

// children property to read
// it can be point separated string
// e.g.) property.of.child.property
// { property: { of: { child: { property: 'value' }}}}
childrenProperty: string

// data for table
data: any[]
```

**EVENTS**
```
// this will be emitted when page changed
pageChange: EventEmitter<number>
```

#### CrmAccordionHeaderItemDirective

Accordion header item directive.\
It defines header of accordion table.\
See demo application to view detail usage.

**HTML**
```html
<crm-accordion-table [rows]="rows">
  <ng-template
    crmAccordionHeaderItem
    identifier="name"
    verticalAlign="middle"
    horizontalAlign="start">
    Name
  </ng-template>
</crm-accordion-table>

<crm-pageable-accordion-table [(page)]="page" [data]="data" childrenProperty="property">
  <!-- when used from <crm-pageable-accordion-table> -->
  <!-- it can receive 'item' variable -->
  <!-- 'item' variable is each item of data -->
  <ng-template crmAccordionHeaderItem let-item="item" identifier="name">
    {{item.name}}
  </ng-template>
</crm-pageable-accordion-table>
```

**ATTRIBUTES**
```
// define column identifider
// if header and body identifier is equal, accordion table will set both in same column 
identifider: string

// set horizontal alignment
// default is 'start'
horizontalAlign: 'start' | 'center' | 'end'

// set vertical alignemnt
// default is 'middle'
verticalAlign: 'top' | 'middle' | 'bottom'
```

#### CrmAccordionBodyItemDirective

Accordion body item directive.\
It defines body of accordion table.\
See demo application to view detail usage.

**HTML**
```html
<crm-accordion-table [rows]="rows">
  <!-- accordion body item directive always receive 'item' variable -->
  <!-- in <crm-accordion-table>, 'item' variable is each item of rows -->
  <ng-template crmAccordionBodyItem identifier="name" let-item="item">
    Name: {{item.name}}
  </ng-template>
</crm-accordion-table>

<crm-pageable-accordion-table [(page)]="page" [data]="data" childrenProperty="property">
  <!-- in <crm-pageable-accordion-table>, 'item' variable is each child of data children -->
  <ng-template
    crmAccordionBodyItem
    let-item="item"
    identifier="name"
    verticalAlign="middle"
    horizontalAlign="center">
    Name: {{item.name}}
  </ng-template>
</crm-pageable-accordion-table>
```

**ATTRIBUTES**
```
// define column identifider
// if header and body identifier is equal, accordion table will set both in same column 
identifider: string

// set horizontal alignment
// default is 'start'
horizontalAlign: 'start' | 'center' | 'end'

// set vertical alignemnt
// default is 'middle'
verticalAlign: 'top' | 'middle' | 'bottom'
```
