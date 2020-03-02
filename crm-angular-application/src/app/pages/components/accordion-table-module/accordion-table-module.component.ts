import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-table-module',
  templateUrl: './accordion-table-module.component.html',
  styleUrls: ['./accordion-table-module.component.scss']
})
export class AccordionTableModuleComponent implements OnInit {
  rows = [
    {
      name: 'Jane',
      age: 22,
      job: 'Web designer',
    },
    {
      name: 'John',
      age: 24,
      job: 'Programmer',
    },
  ];

  page = 0;
  rootRows = [
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
    {
      price: 30,
      duration: 20,
      workers: 5,
      category: 'Category',
      products: [
        {
          name: 'Product 1',
          price: 4,
          duration: 5,
          worker: 'John',
        },
        {
          name: 'Product 2',
          price: 4,
          duration: 5,
          worker: 'Smith',
        },
        {
          name: 'Product 3',
          price: 4,
          duration: 5,
          worker: 'Elsa',
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
