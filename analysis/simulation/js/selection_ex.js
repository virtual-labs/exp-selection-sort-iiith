class Selection_sort{
  constructor(){
    this.iterator1 = 0;
    this.iterator2 = 0;
    this.finished = false;
    this.numOfCards = 36;
    this.action = 0;
    this.fn_name = "";
    this.card;
    this.comparisons = 0;
    this.swaps = 0;
    this.operation = "";
    this.interval = 100;
    this.minimum = 0;
    this.counter = 0;
    this.num = [];
    this.answer1 = 0;
    this.answer2 = 0;
    this.copy = [];
    this.copy_reset = [];
  };
};

let selection_artefact = new Selection_sort();

function main_functions() { 
  randomise();
  start_sort();
  makeQuestion();
  handlers();
}

document.body.onload = function() {main_functions();}

function handlers() { 
  document.getElementById("next").onclick = function() { next_step(); };
  document.getElementById("new_question").onclick = function() { reload(); };
  document.getElementById("submit").onclick = function() { checkAnswer(); };
  document.getElementById("reset").onclick = function() { clickedReset(); };
}

function clickedReset() { 
  for (var i = 0 ; i < selection_artefact.numOfCards ; i++ )
    selection_artefact.num[i] = selection_artefact.copy_reset[i];
  selection_artefact.card = document.querySelectorAll('.card');
  for(var i = 0 ; i < selection_artefact.numOfCards ; i++ )
  {
    selection_artefact.card[i].innerHTML = selection_artefact.num[i];
    selection_artefact.card[i].style.fontStyle = "normal";
    selection_artefact.card[i].style.color = "white";
  }
  selection_artefact.counter = 0;
  selection_artefact.swaps = 0;
  selection_artefact.minimum = 0;
  document.getElementById("ins").innerHTML = "";
  document.getElementById("submit").disabled = false;
  document.getElementById("submit").style.backgroundColor = "#288ec8";
  document.getElementById("textbox").value = "";
  document.getElementById("textbox1").value = "";
  start_sort();
}

function randomise() { 
  var classToFill = document.getElementById("cards");
  for (var i = 0 ; i < selection_artefact.numOfCards ; i++ ) {
    selection_artefact.num[i] = Math.floor(Math.random() * 90 + 10);
    selection_artefact.copy[i] = selection_artefact.num[i];
    selection_artefact.copy_reset[i] = selection_artefact.num[i];
    var temp = document.createElement("div");
    temp.className = "card";
    temp.innerHTML = selection_artefact.num[i];
    temp.style.fontStyle = "normal";
    temp.style.color = "white";
    classToFill.appendChild(temp);
    if((i+1) % 12 == 0) classToFill.appendChild(document.createElement("br"));
  }
}

function compare(i, j) {
  selection_artefact.comparisons++;
  for(var n = selection_artefact.iterator1 ; n < selection_artefact.numOfCards; n++ )
  {
    if(n == j )
      selection_artefact.card[n].style.backgroundColor = "#a4c652"; 
    else if(n == i)
      selection_artefact.card[n].style.backgroundColor = "black";
    else
      selection_artefact.card[n].style.backgroundColor = "#288ec8";
  }
  if(eval(selection_artefact.card[j].innerHTML) < eval(selection_artefact.card[i].innerHTML))
    return true;
  else
    return false;
}

function swap(i, j) {
  selection_artefact.swaps++;
  var temp;
  temp = eval(selection_artefact.card[j].innerHTML);
  selection_artefact.card[j].innerHTML = eval(selection_artefact.card[i].innerHTML);
  selection_artefact.card[i].innerHTML = temp;
}

function selection() {
  if(selection_artefact.iterator2>=selection_artefact.numOfCards-1 && !selection_artefact.finished){
    clearInterval(selection_artefact.interval); selection_artefact.interval = 0;
    selection_artefact.counter++;
    document.getElementById("next").style.backgroundColor = "#288ec8";
    document.getElementById("next").disabled = false;
    document.getElementById("ins").innerHTML = "Iterations completed: " + selection_artefact.counter;
  }
  if(selection_artefact.iterator2 < selection_artefact.numOfCards-1)
    selection_artefact.iterator2++;
  else
  {
    if(selection_artefact.iterator1==selection_artefact.numOfCards-1)
    {
      clearInterval(selection_artefact.interval);
      selection_artefact.interval = 0;
      document.getElementById("ins").innerHTML = "<h3>The sort is complete - there were " + selection_artefact.comparisons + " comparisons and " + selection_artefact.swaps + " swaps.</h3>";
      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("next").disabled = true;
      selection_artefact.iterator2 = 0;
    }
    else
    {
      selection_artefact.finished = true;
      swap(selection_artefact.iterator1, selection_artefact.minimum);
      selection_artefact.iterator1++;
      selection_artefact.iterator2 = selection_artefact.iterator1+1;
      selection_artefact.minimum = selection_artefact.iterator1; 
    }
  }
}

function next_step() {          
  if(selection_artefact.interval == 0)
  {
    selection_artefact.interval = setInterval(next_step, 100);
    document.getElementById("next").style.backgroundColor = "grey";
    document.getElementById("next").disabled = true;
  }
  if (selection_artefact.iterator1==selection_artefact.numOfCards-1) 
    {
      selection_artefact.card[selection_artefact.iterator1].style.backgroundColor = "grey";
      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("next").disabled = true;
      pause();
      return;
    }
  if(selection_artefact.action == 1)
  {
    if(compare(selection_artefact.minimum, selection_artefact.iterator2))
    selection_artefact.action = -1;
    else
      window[selection_artefact.fn_name]();
  }
  else
  {
    selection_artefact.action = 1;
    selection_artefact.minimum= selection_artefact.iterator2;
    selection_artefact.finished = false;
    window[selection_artefact.fn_name]();
  }
}

function start_sort() {
  if(selection_artefact.interval != 0) { clearInterval(selection_artefact.interval); selection_artefact.interval = 0; }
  selection_artefact.card = document.querySelectorAll('.card');
  document.getElementById("comment-box-smaller-exercise").style.visibility = "visible";
  selection_artefact.action = 1;
  selection_artefact.finished = true;
  selection_artefact.comparisons = 0;
  selection_artefact.swaps = 0;
  selection_artefact.fn_name = "selection";

  selection_artefact.iterator1 = 0;
  selection_artefact.iterator2 = 1;
  selection_artefact.operation = "Swap";
  next_step();
  
  if(selection_artefact.interval == 0)
    selection_artefact.interval = setInterval(next_step, 100);
  else
  {
    clearInterval(selection_artefact.interval);
    selection_artefact.interval = 0;
    document.getElementById("next").style.backgroundColor = "#288ec8";
    document.getElementById("next").disabled = false;
  }
}

function checkAnswer(){
  var text1; 
    try{
      text1 = document.getElementById("textbox").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }
  var text2;
    try{
      text2 = document.getElementById("textbox1").value;
    }catch(err){
      console.log("There is some problem with textbox input: ",err);
    }
  if(text1 == "" || text2 == "")
    document.getElementById("ins").innerHTML = "Please enter valid values";
  else if(text1 > 100 || text2 > 100)
    document.getElementById("ins").innerHTML = "Please enter valid values";
  else
  if(text1 == selection_artefact.answer1 && text2 == selection_artefact.answer2)
  {
    document.getElementById("ins").innerHTML = "CORRECT ANSWER";
      document.getElementById("next").disabled = true;
      document.getElementById("submit").disabled = true;

      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("submit").style.backgroundColor = "grey";
  }
  else{
      document.getElementById("ins").innerHTML = "WRONG ANSWER";
      document.getElementById("next").disabled = true;
      document.getElementById("submit").disabled = true;

      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("submit").style.backgroundColor = "grey";
    }
};

function reload(){
  location.reload(true);
};

function makeQuestion() {
  var k;
  k = Math.floor(Math.random() * 6) + 2;
  if(k==4 || k==5 || k==6 || k==7 || k==8 || k==9)
    document.getElementById("question").innerHTML = "<b>Question :</b> Find the difference between the the "+k+"th smallest element from the following array. Report the difference and the number of iterations you need to run in order to <b>determine</b> the "+k+"th smallest element required to get to the answer. (Hint: Remember the observations we made for each iteration)";
  if(k==2)
    document.getElementById("question").innerHTML = "<b>Question :</b>Find the difference between the the "+k+"nd smallest element from the following array. Report the difference and the number of iterations you need to run in order to <b>determine</b> the k'nd smallest element required to get to the answer. (Hint: Remember the observations we made for each iteration)";
  if(k==3)
    document.getElementById("question").innerHTML = "<b>Question :</b>Find the difference between the the "+k+"rd smallest element from the following array. Report the difference and the number of iterations you need to run in order to <b>determine</b> the k'rd smallest element required to get to the answer. (Hint: Remember the observations we made for each iteration)";
  selection_artefact.copy.sort();
  selection_artefact.answer1 = selection_artefact.copy[k-1] - selection_artefact.copy[0];
  selection_artefact.answer2 = k;
}
