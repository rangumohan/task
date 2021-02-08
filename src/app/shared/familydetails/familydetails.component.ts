import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-familydetails',
  templateUrl: './familydetails.component.html',
  styleUrls: ['./familydetails.component.scss']
})
export class FamilydetailsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
relationship=["father","Mother","brother","sister","grandfather","grandmother"]
  ngOnInit() {
    
  }
  regFamilyDetails=this.fb.group({
    name:"",
    gender:"",
    age:"",
    relationship:""
  });

}
