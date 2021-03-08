var members = data.results[0].members;

var checkboxes = document.querySelectorAll("input[name=party]");
for (var i=0; i<checkboxes.length; i++){
  var checkbox = checkboxes[i];
  checkbox.addEventListener("change",function(){
         makeTable()
  })
}
var stateSelector = document.getElementById("states");
  stateSelector.addEventListener("change",function(){
    makeTable()
  })

function makeTable() {
  $("#resultTable tr").remove(); 
  var checkedBoxes = document.querySelectorAll("input[name=party]:checked");
  var parties = [];
  for (var i = 0; i < checkedBoxes.length; i++) {
    parties.push(checkedBoxes[i].value);
  }


var selectedMembers =  members.filter(function (member) {
  return (parties.includes(member.party));
});
var state= document.getElementById("states").value;
var selectedMembersAfterState =  selectedMembers.filter(function (member) {
  return (state.includes(member.state));
});
  selectedMembersAfterState.forEach(function (member) {
    var table = document.getElementById("resultTable");
    var tbody = table.querySelector("tbody");
    var row = document.createElement("tr");

    var name = document.createElement("td");
    var hyperLink = document.createElement("a");
    hyperLink.setAttribute("href", member.url);
    hyperLink.setAttribute("target", "_blank");
    hyperLink.innerText = member.first_name + " " + member.last_name;
    name.append(hyperLink);

    var party = document.createElement("td");
    party.innerText = member.party;

    var state = document.createElement("td");
    state.innerText = member.state;

    var seniority = document.createElement("td");
    seniority.innerText = member.seniority;

    var percentageParty = document.createElement("td");
    percentageParty.innerText = member.votes_with_party_pct + " %";

    row.append(name, party, state, seniority, percentageParty);
    tbody.append(row);
  });
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}