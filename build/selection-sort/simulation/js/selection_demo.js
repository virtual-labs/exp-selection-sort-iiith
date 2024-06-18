class Selection_sort{
  constructor(){
    this.iterator1 = 0;
    this.iterator2 = 0;
    this.numOfCards = 12;
    this.finished = false;
    this.action = 0;
    this.fn_name = "";
    this.card;
    this.comparisons = 0;
    this.swaps = 0;
    this.operation = "";
    this.interval = 0;
    this.prev = -1;
    this.minimum = 0;
    this.num = [];
  };
};
let selection_artefact = new Selection_sort();

function main_functions() { 
  randomise();
  handlers();
}
document.body.onload = function() {main_functions();}

function handlers() { 
  document.getElementById("interval").oninput = function() { change_interval(); };
  document.getElementById("interval").onchange = function() { change_interval(); };
  document.getElementById("next").onclick = function() { start_sort(); };
  document.getElementById("reset").onclick = function() { reload(); };
  document.getElementById("pause").onclick = function() { pause(); };
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
  document.getElementById("pause").disabled = true;
  document.getElementById("pause").style.backgroundColor = "grey";
}

function change_interval() {
  if(selection_artefact.prev == -1 && (selection_artefact.action == 1 || selection_artefact.action == -1)){
    if(selection_artefact.interval != 0) 
      clearInterval(selection_artefact.interval);
    
    if(document.getElementById("interval").value != 100)
    {
      if(selection_artefact.fn_name > "") 
        selection_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value);
      document.getElementById("pause").style.backgroundColor = "#288ec8";
    }
    else
      document.getElementById("pause").style.backgroundColor = "grey";
  }
}

function compare(i, j) {
  selection_artefact.comparisons++;
  for(var n = selection_artefact.iterator1 ; n < selection_artefact.numOfCards ; n++ )
  {
    if(n == j ) 
      selection_artefact.card[n].style.backgroundColor = "#a4c652"; 
    else if(n == i )
      selection_artefact.card[n].style.backgroundColor = "black";
    else
      selection_artefact.card[n].style.backgroundColor = "#288ec8";
  }
  document.getElementById("ins").innerHTML = "<p>Comparisons: " + selection_artefact.comparisons + " | Swaps: " + selection_artefact.swaps + "</p><p>Comparing " + selection_artefact.card[selection_artefact.minimum].innerHTML + " and " + selection_artefact.card[j].innerHTML + "...</p>";
  if(eval(selection_artefact.card[j].innerHTML) < eval(selection_artefact.card[i].innerHTML))
  {
    document.getElementById("ins").innerHTML += "<p> Minimum updated to " + selection_artefact.card[j].innerHTML +"</p>"
    return true;
  }
  else
  {
    document.getElementById("ins").innerHTML += "<p>Minimum update not required</p>"
    return false;
  }
}

function swap(i, j) {
  selection_artefact.swaps++;
  var temp;
  document.getElementById("ins").innerHTML = document.getElementById("ins").innerHTML + "<p>Swapping " + selection_artefact.card[i].innerHTML + " and " + selection_artefact.card[j].innerHTML + "</p>";
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
      if(document.getElementById("interval").value != 100){
        clearInterval(selection_artefact.interval);
        selection_artefact.interval = 0;
      }
      document.getElementById("ins").innerHTML = "<h3>The sort is complete - there were " + selection_artefact.comparisons + " comparisons and " + selection_artefact.swaps + " swaps.</h3>";
      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("next").disabled = true;
      document.getElementById("pause").style.backgroundColor = "grey";
      document.getElementById("pause").disabled = true;
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
};

function next_step() {
  if (selection_artefact.iterator1==selection_artefact.numOfCards-1) 
  {
    selection_artefact.card[selection_artefact.iterator1].style.backgroundColor = "grey";
    document.getElementById("ins").innerHTML = "<h3>The sort is complete - there were " + selection_artefact.comparisons + " comparisons and " + selection_artefact.swaps + " swaps.</h3>";
    document.getElementById("next").style.backgroundColor = "grey";
    document.getElementById("next").disabled = true;
    document.getElementById("pause").style.backgroundColor = "grey";
    document.getElementById("pause").disabled = true;
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
    selection_artefact.minimum = selection_artefact.iterator2;
    selection_artefact.finished = false;
    window[selection_artefact.fn_name](); 
  }
}

function pause() {
  if(selection_artefact.prev == -1){
    selection_artefact.prev = document.getElementById("interval").value;
    if(selection_artefact.interval != 0) 
      clearInterval(selection_artefact.interval);
    document.getElementById("pause").value = "Play";
  }else{
    selection_artefact.prev = -1;
    if(selection_artefact.fn_name > "") 
      selection_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value);
    document.getElementById("pause").value = "Pause";
  }
}

function start_sort() {
  if(selection_artefact.interval != 0) { 
    clearInterval(selection_artefact.interval); 
    selection_artefact.interval = 0;
  }
  document.getElementById("comment-box-bigger").style.visibility = "visible";
  selection_artefact.card = document.querySelectorAll('.card');
  selection_artefact.action = 1;
  selection_artefact.finished = true;
  selection_artefact.comparisons = 0;
  selection_artefact.swaps = 0;
  selection_artefact.fn_name = "selection";
  
  selection_artefact.iterator1 = 0;
  selection_artefact.iterator2 = 1;
  selection_artefact.operation = "Swap";
  next_step();

  document.getElementById("next").onclick = function() { next_step(); };
  document.getElementById("next").value = "Next";
  document.getElementById("pause").disabled = false;
  document.getElementById("pause").style.backgroundColor = "#288ec8";

  if(document.getElementById("interval").value == 100)
  {
    document.getElementById("next").disabled = false;
  }
  else
  {
    document.getElementById("pause").style.visibility = "visible";
    if(selection_artefact.interval == 0)
      selection_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value);
    else
    {
      clearInterval(selection_artefact.interval);
      selection_artefact.interval = 0;
    }
  }
}

function reload(){
  location.reload(true);
}
