var inquirer=require("inquirer");

var questions=[{
  type:"input",
  name:"first_name",
  message:"what is your name?"
},
{
  type:"input",
  name:"last_name",
  message:"what is your last name?",
  defaulat:function(){
    return "Tika";
  }
},

{
type:"list",
name:"what do you like to eat",
message:"what do you like to eat?",
choices:[
  "I like to eat chocolate!",
  "No I dont like to eat",
  " Oh MoMo is my favourite"
]
},
{
type:"checkbox",
name:"besefood",
message:"what is your best food?",
choices:[
  "fruits",
  "vegetables",
  "pasta"
]
}
];

inquirer.prompt(questions).then(function(answers){
  console.log(JSON.stringify(answers, null, ' '));
});
