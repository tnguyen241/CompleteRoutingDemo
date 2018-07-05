import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';
import { states, Address, Hero, heroes, validationMessages } from "../data-model";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { HeroService } from "./hero.service";


@Component({
    templateUrl:"hero-contact.component.html",
    styles:[`input.ng-invalid {border: 1px solid red}
    input.ng-valid {border: 1px solid green} 
    input.ng-pristine {border: 1px solid blue}
    `]
})

export class HeroContact implements OnInit{
    
    rForm: FormGroup;    
    states=states;
    heroId$:number;
    heroes=heroes;
    validationMessages=validationMessages;

    constructor(private fb: FormBuilder, private route:ActivatedRoute, private heroService: HeroService){
        this.rForm=this.fb.group({
            name:['', Validators.required],
            email:['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(8),forbiddenName])],
            isLongName:'',
            //address:this.fb.group(new Address())
            addressGroup:this.fb.array([])
        },{validator:identityRevealedValidator});        
    }   
    ngOnInit() {
        //console.log('ngOnInit:'+this.heroes[0]);
        //change the name input validator when checkbox is checked
       this.rForm.get('isLongName').valueChanges.subscribe(
           value =>{
               //console.log("IsLongName:"+value);
               if(value){
                   this.rForm.get('name').setValidators([Validators.required,Validators.minLength(3)]);
               }
               else{
                this.rForm.get('name').setValidators(Validators.required);
            }
            this.rForm.get('name').updateValueAndValidity();            
           }
       );
       //get the id from the route and call the service
       this.heroId$=parseInt(this.route.snapshot.params['id']);
       console.log('snapshot id:'+this.heroId$);
       this.populateForm();  

       //console.log(this.validationMessages.find((value)=> value.type=='name'));
    //    this.heroService.getHero(this.heroId$).subscribe(data =>{
    //     this.heroOne=data;
              
    //    })     

    //    this.route.paramMap.subscribe((params:ParamMap)=>
    //     {
    //         this.heroId$=parseInt( params.get('id'));
    //         console.log('id:'+this.heroId$);
    //     });
    }
    onSubmit()
    {
        console.log(this.rForm);
        console.log(this.rForm.status);
    }
    populateForm()
    {        
        this.rForm.reset({
            name:this.heroes[0].name           
        });
        this.setAddresses(this.heroes[0].addresses);
        console.log(this.heroes[0]);
    }
    setAddresses(addresses:Address[]){
        const addressFG=addresses.map(address=>this.fb.group(address));
        const addressArray=this.fb.array(addressFG);
        this.rForm.setControl('addressGroup',addressArray);
        console.log(addressArray);
    }
    addFormGroup(){
        let itemArr=this.rForm.get("addressGroup") as FormArray;
        itemArr.push(this.fb.group(new Address()));
    }
    removeFormGroup(i){
        console.log(i);
        let itemArr=this.rForm.get("addressGroup") as FormArray;
        itemArr.removeAt(i);
    }
    
    //getter for name control
    //get name() { return this.rForm.get('name'); }    
    //getter for formarray
    get addressGroup(): FormArray {
        return this.rForm.get('addressGroup') as FormArray;
      };
    /** A hero's name can't match the hero's alter ego */

}
export function identityRevealedValidator(control: FormGroup):{[key:string]:boolean} | null {
    const name = control.get('name');
    const email = control.get('email');  
    return name && email && name.value === email.value ? { 'identityRevealed': true } : null;
  };
  export function forbiddenName(control: AbstractControl):{[key:string]:boolean} | null {     
    return control.value === "aaaaa"  ? { 'identityRevealed': true } : null;
  };