var diceValue1,
    diceValue2;
var diceValue,
    potValue,
    radioValue = '=7',
    bidValue = 3000000;

function myRadioValue(dice) {
    radioValue = dice;
    return;
}




function myFunction()
{
  let a = arguments[0],
      b = arguments[1],
      c = arguments[2],
      d = arguments[3],
      e = arguments[4],
      f = arguments[5],
      g = arguments[6],
      h = arguments[7],
      i = arguments[8],
      value = arguments[9];
  
  document.getElementById(a).style.display = 'none';
  document.getElementById(b).style.display = 'none';
  document.getElementById(c).style.display = 'none';
  document.getElementById(d).style.display = 'none';
  document.getElementById(e).style.display = 'none';
  document.getElementById(f).style.display = 'none';
  document.getElementById(g).style.display = 'none';
  document.getElementById(h).style.display = 'none';
  document.getElementById(i).style.display = 'none';
  
  switch(value){
  case 1:
    {
      document.getElementById(e).style.display = 'block';
        break;
    }
  case 2:
    {
      document.getElementById(g).style.display = 'block';
      document.getElementById(c).style.display = 'block';
        break;
    }
    case 3:
    {
      document.getElementById(g).style.display = 'block';
      document.getElementById(e).style.display = 'block';
      document.getElementById(c).style.display = 'block';
        break;
    }
    case 4:
    {
      document.getElementById(a).style.display = 'block';
      document.getElementById(c).style.display = 'block';
      document.getElementById(g).style.display = 'block';
      document.getElementById(i).style.display = 'block';
        break;
    }
  case 5:
    {
      document.getElementById(a).style.display = 'block';
      document.getElementById(c).style.display = 'block';
      document.getElementById(e).style.display = 'block';
      document.getElementById(g).style.display = 'block';
      document.getElementById(i).style.display = 'block';
        break;
    }
  case 6:
    {
      document.getElementById(a).style.display = 'block';
      document.getElementById(c).style.display = 'block';
      document.getElementById(d).style.display = 'block';
      document.getElementById(f).style.display = 'block';
      document.getElementById(g).style.display = 'block';
      document.getElementById(i).style.display = 'block';
        break;
    }
  } 
  return;
}

//rules
rules.addEventListener('click', function() {
  //document.getElementById('text-area').innerHTML = "Put the bid the value of bid is fixed 15, and initial sum of 90 is given , select one of <7 , =7 or >7 and, roll the dice.If you select one of <7 and the sum of dice more than 7 ,  else if you choice option more than >7 and the sum of dice is more than 7 the initial value is  "+"<br>"+"added with twice the bidding value but the the choice is not same as the dice sum the bidding value is removed from the initial sum.The other choice is to select 7 and sum of dice is  7 you get 3 times the bidding value. If you select 7 and the value is anything other than 7 the bidding value is removed from the initial sum. "+"<br>"+" You have a option to choose  insurance at any time during game except at the start of the game when your sum is 90 or at the end when your sum is 0. If you choose to select insurance your loss "+"<br>"+"<br>"+"will be compensated(no money will removed in case of "+"<br>"+"loss) but a insurance premium will be removed from "+"<br>"+"your total amount at each roll , but if you win you "+"<br>"+"get the winning amount minus the premium amount "+"<br>"+"added to total sum.You can take insurance by pressing the  "+"<br>"+"Insurance button "+"<br>"+"Have Fun!";
  //document.getElementById('rules').style.display = 'none';
    {location.href = "https://lahotikunal.github.io/introduction_button/";}
});
//rules

i15.onclick = function () {
        if(potValue==1500000){location.href = "https://lahotikunal.github.io/insurance15/";
                         alert("insurance option invoked !!");}

  /*i30.onclick = function () {*/
        if(potValue==3000000)
    {location.href = "https://lahotikunal.github.io/with30/";
     alert("insurance option invoked !!");}
  
  if(potValue==4500000){location.href = "https://lahotikunal.github.io/with-insurance-45/";
                   alert("insurance option invoked !!");}
  
  if(potValue==6000000){location.href = "https://lahotikunal.github.io/with60/";
                   alert("insurance option invoked !!");}
  
  if(potValue==7500000){location.href = "https://lahotikunal.github.io/with75/";
                   alert("insurance option invoked !!");}
    
  if(potValue==9000000){
    alert("insurance option invoked !!");
  }
  
  if(potValue==10500000){
    alert("insurance option invoked !!");
    }
  
  if(potValue==12000000){
    alert("insurance option invoked !!");
    }
  if(potValue==13500000){
    alert("insurance option invoked !!");
  }
  
  if(potValue==15000000){
    alert("insurance option invoked !!");
    }
  
  if(potValue==16500000){
    alert("insurance option invoked !!");
    }
   if(potValue==18000000){
    alert("insurance option invoked !!");
  }
  
  if(potValue==19500000){
    alert("insurance option invoked !!");
    }
  
  if(potValue==21000000){
    alert("insurance option invoked !!");
    }
    if(potValue==22500000){
    alert("insurance option invoked !!");
  }
  
  if(potValue==24000000){
    alert("insurance option invoked !!");
    }
  
  if(potValue==25500000){
    alert("insurance option invoked !!");
    }
    
    if(potValue==27000000){
    alert("insurance option invoked !!");
  }
  
  if(potValue==28500000){
    alert("insurance option invoked !!");
    }
  
  if(potValue==30000000){
    alert("insurance option invoked !!");
    }
    if(potValue==300+1500000){
    alert("insurance option invoked !!");
  }
  
  if(potValue==30000000+3000000){
    alert("insurance option invoked !!");
    }
  
  if(potValue==30000000+4500000){
    alert("insurance option invoked !!");
    }
    if(potValue==30000000+6000000){
    alert("insurance option invoked !!");
  }
  
  if(potValue==30000000+7500000){
    alert("insurance option invoked !!");
    }
  
  if(potValue==30000000+9000000){
    alert("insurance option invoked !!");
    }
    if(potValue==30000000+10500000){
    alert("insurance option invoked !!");
  }
  
  if(potValue==30000000+12000000){
    alert("insurance option invoked !!");
    }
  
  if(potValue==30000000+13500000){
    alert("insurance option invoked !!");
    }
    if(potValue==30000000+15000000){
    alert("insurance option invoked !!");
  }
  
  if(potValue==30000000+16500000){
    alert("game over you won !!");
    }
  
  

}
    
    /*

i45.onclick = function () {
  if(bidValue==45){location.href = "https://codepen.io/kunal28/pen/dyXYpYz";}};
i60.onclick = function () {
        if(bidValue==60){location.href = "https://codepen.io/kunal28/pen/NWrGRxo";}};
i75.onclick = function () {
  if(bidValue==75){location.href = "https://codepen.io/kunal28/pen/wvWKzGR";}};
        
    */

button1.addEventListener('click',function()
 {
     diceValue1 = Math.floor(Math.random()*6)+1;
     diceValue2 = Math.floor(Math.random()*6)+1;
     myFunction('a','b','c','d','e','f','g','h','i',diceValue1);
     myFunction('a2','b2','c2','d2','e2','f2','g2','h2','i2',diceValue2);
     diceValue = diceValue1 + diceValue2;
     potValue = parseInt(document.getElementById("pot").innerHTML);
     if(radioValue === '>7')
       {
       if(diceValue > 7)
         {
           potValue += bidValue;
         }
         else
           {
             potValue -= bidValue;
           }
       }
 
      else if(radioValue === '<7')
      {
        if(diceValue <7)
          {
            potValue += bidValue;
          }
        else
          {
            potValue -= bidValue;
          }
      }
      else
      {
       if(diceValue == 7)
         {
           potValue =  2*bidValue + potValue;
         }
         else
           {
             potValue -= bidValue;
           }
        }
  if(potValue<0)
  {alert("game over!!! not enough credit left, please press Next game button");}
  
  document.getElementById("pot").innerHTML = potValue;
     
});


