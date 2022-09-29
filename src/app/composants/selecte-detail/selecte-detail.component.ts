import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/category';
import { Resources } from 'src/app/resource';
import { SubCategory } from 'src/app/sub-category';

@Component({
  selector: 'app-selecte-detail',
  templateUrl: './selecte-detail.component.html',
  styleUrls: ['./selecte-detail.component.css']
})
export class SelecteDetailComponent implements OnInit {
 
  searchForm: FormGroup<any>;
  /*resources: Array<Resource>=[
    {
      id:1,
      category: "bonjour",
      subCategory:"hier",
      name: "avant hier",
      reference: "yoyoyo",
      picture: "http",
      icon:"rrr"
    },
    {
      id:2,
      category: "bonjour",
      subCategory:"hier",
      name: "avant hier",
      reference: "yoyoyo",
      picture: "http",
      icon:"nfkd"
    },
    {
      id:3,
      category: "bonjour",
      subCategory:"hier",
      name: "avant hier",
      reference: "yoyoyo",
      picture: "http",
      icon:"ghgjk"
    },
    {
      id:4,
      category: "bonjour",
      subCategory:"hier",
      name: "avant hier",
      reference: "yoyoyo",
      picture: "http",
      icon:"hgjgk"
    },
    {
      id:5,
      category: "bonjour",
      subCategory:"hier",
      name: "avant hier",
      reference: "yoyoyo",
      picture: "http",
      icon:"hgyio"
    },
    {
      id:6,
      category: "bonjour",
      subCategory:"hier",
      name: "avant hier",
      reference: "yoyoyo",
      picture: "http",
      icon:"vxx "
    },
    {
      id:7,
    category: "bonjour",
    subCategory:"hier",
    name: "avant hier",
    reference: "yoyoyo",
    picture: "httpbvbvb",
    icon:"nnkp"
  }
  ]*/
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){}

  onAddResource(){}

  onCategoryChange(){}
}
