export class Hero {
    id = 0;
    name = '';
    addresses: Address[];
  }  
  export class Address {
    street = '';
    city   = '';
    state  = '';
    zip    = '';
  }  
  export const heroes: Hero[] = [
    {
      id: 1,
      name: 'Whirlwind',
      addresses: [
        {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
        {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
      ]
    },
    {
      id: 2,
      name: 'Bombastic',
      addresses: [
        {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
      ]
    },
    {
      id: 3,
      name: 'Magneta',
      addresses: [ ]
    },
  ];  
  export const states = ['CA', 'MD', 'OH', 'VA'];
  export const validationMessages=[
    {type:'name',errors:[
      {code:'required',message:'Name is required'},
      {code:'minlength',message:'Minlength is 3'},
      {code:'identityRevealed',message:'identity is revealed'}
    ]},
    {type:'email',errors:[
      {code:'required',message:'Email is required'},
      {code:'minlength',message:'Minlength is 5'},
      {code:'maxlength',message:'Maxlength is 8'},
      {code:'identityRevealed',message:'identityis revealed'}
    ]}
  ]