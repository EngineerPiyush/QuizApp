const questions = [
  {
    'que': 'which of the following is a java statement ?',
    'a': 'cout<<" "',
    'b': 'printf(" ")',
    'c': 'System.out.println(" ")',
    'd': 'document.write(" ")',
    'correct': 'c'
  },
  {
    'que': 'which of the following is markup language ?',
    'a': 'HTML',
    'b': 'Java',
    'c': 'C++',
    'd': 'Ruby',
    'correct': 'a'
  },
  {
    'que': 'which of the following is a System Software ?',
    'a': 'Windows',
    'b': 'Zoom',
    'c': 'Pubg',
    'd': 'Instagram',
    'correct': 'a'
  },
  {
    'que': 'which of the following is true ?',
    'a': 'if{ } is a looping statement ',
    'b': 'we can convert nested if else in switch statement ',
    'c': 'Html is used in backend',
    'd': 'Nodejs is a frame work of java',
    'correct': 'b'
  }
];

let index = 0;
let total=questions.length;
let right=0;
let wrong=0;
const quebox = document.getElementById("queBox");
const optionInputs=document.querySelectorAll(".options");
const loadQuestion = () => {
  if(index===total){
    return endQuiz();
  }
  const data = questions[index];
  quebox.innerText=`${index+1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText=data.a;
  optionInputs[1].nextElementSibling.innerText=data.b;
  optionInputs[2].nextElementSibling.innerText=data.c;
  optionInputs[3].nextElementSibling.innerText=data.d; 
}
 const submitQuiz=()=>{
   const data = questions[index];
   const ans=getAnswer();
   if(ans===data.correct){
     right++;
   }else{
     wrong++;
   }
   index++;
   loadQuestion();
   reset();
   return;
 }
 const getAnswer=()=>{
   let answer;
   optionInputs.forEach((input)=>{
     if(input.checked)
     {
       answer=input.value;
     }
   })
   return answer;
   }
   const reset=()=>{
      optionInputs.forEach((input)=>{
     input.checked=false;
    })
  }
  const endQuiz=()=>{
    document.getElementById("box").innerHTML= `
    <div style=text-align:center>
    <h3>Thank you for playing the Quiz</h3>
    <h2>${right} / ${total} are correct </h2>
    </div>    `
  }
loadQuestion();
