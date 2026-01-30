class Selection_sort{
  constructor(){
    this.iterator1 = 0;
    this.iterator2 = 0;
    this.finished = false;
    this.numOfCards = 8;
    this.action = 0;
    this.fn_name = "";
    this.card;
    this.comparisons = 0;
    this.swaps = 0;
    this.operation = "";
    this.interval = 2500;
    this.minimum = 0;
    this.counter = 0;
    this.num = new Array();
    for (var i = 0; i < this.numOfCards; i++)
      this.num[i] = 0;
  };
};

let selection_artefact = new Selection_sort();

function main_functions() { 
  randomise();
  start_sort();
  handlers();
}
document.body.onload = function() {main_functions();}

function handlers() { 
  document.getElementById("next").onclick = function() { check_next(); };
  document.getElementById("reset").onclick = function() { reload(); };
  document.getElementById("swap").onclick = function() { check_swap(); };
}

function randomise() { 
  var classToFill = document.getElementById("cards");
  for (var i = 0; i < selection_artefact.numOfCards; i++ ){
    selection_artefact.num[i] = Math.floor(Math.random() * 90 + 10);
    var temp = document.createElement("div");
    temp.className = "card";
    temp.innerHTML = selection_artefact.num[i];
    temp.style.fontStyle = "normal";
    temp.style.color = "white";
    classToFill.appendChild(temp);
  }
}

function compare(i, j) {
  selection_artefact.comparisons++;
  for(var n = selection_artefact.iterator1; n < selection_artefact.numOfCards; n++)
  {
    if(n == j )
      selection_artefact.card[n].style.backgroundColor = "#a4c652"; 
    else if(n == i )
      selection_artefact.card[n].style.backgroundColor = "black";
    else
      selection_artefact.card[n].style.backgroundColor = "#288ec8";
  }
  
  if(j<selection_artefact.numOfCards && (eval(selection_artefact.card[j].innerHTML) < eval(selection_artefact.card[i].innerHTML)))
    return true;
  else
    return false;
}

function swap(i, j) {
  selection_artefact.swaps++;
  var temp;
  document.getElementById("ins").innerHTML = "Swapping " + selection_artefact.card[i].innerHTML + " and " + selection_artefact.card[j].innerHTML;
  temp = eval(selection_artefact.card[j].innerHTML);
  selection_artefact.card[j].innerHTML = eval(selection_artefact.card[i].innerHTML);
  selection_artefact.card[i].innerHTML = temp;
  selection_artefact.card[i].style.backgroundColor = "grey";
}

function selection() {
  if(selection_artefact.iterator2 < selection_artefact.numOfCards-1)
    selection_artefact.iterator2++;
  else
  {
    if(selection_artefact.iterator1==selection_artefact.numOfCards-1)
    {
      document.getElementById("ins").innerHTML = "The sort is complete.";
      selection_artefact.card[selection_artefact.iterator1].style.backgroundColor = "grey";
      selection_artefact.card[selection_artefact.numOfCards-1].style.backgroundColor = "grey";
      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("next").disabled = true;
      document.getElementById("swap").style.backgroundColor = "grey";
      document.getElementById("swap").disabled = true;
    }
    else
    {
      selection_artefact.finished = true;
      selection_artefact.counter++;
      swap(selection_artefact.iterator1, selection_artefact.minimum);
      selection_artefact.iterator1++;
      selection_artefact.iterator2 = selection_artefact.iterator1+1;
      selection_artefact.minimum = selection_artefact.iterator1; 

      if(selection_artefact.iterator1==selection_artefact.numOfCards-1)
      {
        document.getElementById("ins").innerHTML = "The sort is complete.";
        selection_artefact.card[selection_artefact.iterator1].style.backgroundColor = "grey";
        selection_artefact.card[selection_artefact.numOfCards-1].style.backgroundColor = "grey";
        document.getElementById("next").style.backgroundColor = "grey";
        document.getElementById("next").disabled = true;
        document.getElementById("swap").style.backgroundColor = "grey";
        document.getElementById("swap").disabled = true;
      }
    }
  }
}

function check_swap() {
  var temp = compare(selection_artefact.minimum, selection_artefact.iterator2);
  if(temp == 1)
  {
    selection_artefact.minimum = selection_artefact.iterator2;
    document.getElementById("ins").innerHTML = "Correct! Minimum updated to "+ selection_artefact.card[selection_artefact.minimum].innerHTML;
    window[selection_artefact.fn_name]();
    compare(selection_artefact.minimum, selection_artefact.iterator2);
  }else
    document.getElementById("ins").innerHTML = "Incorrect, Think again! Current minimum is "+ selection_artefact.card[selection_artefact.minimum].innerHTML;    
  if(selection_artefact.counter!=selection_artefact.numOfCards-1)
    selection_artefact.finished = false;
  else
    selection_artefact.finished = true;
}

function check_next() {
  var temp = compare(selection_artefact.minimum, selection_artefact.iterator2);
  if(temp == 1)
    document.getElementById("ins").innerHTML = "Incorrect, Think again! Do we need to update here? Current minimum is "+ selection_artefact.card[selection_artefact.minimum].innerHTML; 
  else
  {
    document.getElementById("ins").innerHTML = "Correct!";
    window[selection_artefact.fn_name]();
    compare(selection_artefact.minimum, selection_artefact.iterator2);
  }
  if(selection_artefact.counter!=selection_artefact.numOfCards-1)
    selection_artefact.finished = false;
  else
    selection_artefact.finished = true;
}

function start_sort() {
  if(selection_artefact.interval != 0) { clearInterval(selection_artefact.interval); selection_artefact.interval = 0; }
  document.getElementById("comment-box-smaller").style.visibility = "visible";
  selection_artefact.card = document.querySelectorAll('.card');
  selection_artefact.action = 1;
  selection_artefact.finished = true;
  selection_artefact.comparisons = 0;
  selection_artefact.swaps = 0;
  selection_artefact.fn_name = "selection";

  selection_artefact.iterator1 = 0;
  selection_artefact.iterator2 = 1;
  selection_artefact.operation = "Swap";
  compare(selection_artefact.iterator1, selection_artefact.iterator2);

  document.getElementById("swap").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";  
  document.getElementById("swap").onclick = function() { check_swap(); };
  document.getElementById("next").onclick = function() { check_next(); };  
  document.getElementById("next").disabled = false;
}

function reload() {
  location.reload(true);
}
