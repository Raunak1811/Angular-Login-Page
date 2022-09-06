import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgModel, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'Login Here';
  registerForm!: FormGroup;
  submitted = false;
  pass:String='';


  /*validate(password:any, conpassword:any){
    if (password != conpassword){
      alert("password didn't match")
    }
    else{
      alert("submitted!")
    }

  }*/

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      conpassword:new FormControl('', [Validators.required,this.passwordMatch.bind(this)]),
      //validator: ConfirmedValidator('password', 'confirm_password')

    });
  
    this.registerForm.get("password")?.valueChanges.subscribe((data)=>{
      this.pass = data;
    })
  }


    /*,
    {
      Validators: this.MustMatch('password', 'conpassword')
    });

  MustMatch(controlName: string, matchingControlName: string){
    return(formGroup: FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.MustMatch)
    }
  }*/



  passwordMatch(control:FormControl){
   // console.log(this.registerForm)
    if(this.pass != control.value){
        return {
          isValid:false
        }
    }
    return null
   }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!!');
  }
}
