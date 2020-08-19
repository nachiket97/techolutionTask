import {required,alpha,minLength,compare,digit,maxLength,alphaNumeric,greaterThan } from "@rxweb/reactive-form-validators";

export class Schooladmissionform{

    @required()  
    @alpha()
    @maxLength({value:20 })	
    name:string;
  
    @required()
    @alpha()
    @maxLength({value:20 })	
    lastName:string;
  
    @required()
    @alphaNumeric() 
    class:string;
  
    @required()
    @greaterThan({fieldName:'2017' })
    YearOfPassing:number;
    
    @required()
    @digit() 
    PercentageOfMarks:number;
  
  }
