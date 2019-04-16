var autocompleteSmallSelected = [];
var autocompleteLargeSelected = [];

function showCondition(selectedConditionId) {
  const selectedCondition = document.getElementById(selectedConditionId);
  document.querySelectorAll('.condition').forEach(el => {
    el.style.display = 'none';
  });

  selectedCondition.style.display = 'block';
  console.log(selectedCondition);
}

function clearSelected() {
  document.querySelectorAll('input[type="checkbox"]').forEach(el => {
    el.checked = false;
  });
  autocompleteSmallSelected = [];
  autocompleteLargeSelected = [];
}

$(function() {
  var colors = [
    "Black",
    "Blue",
    "Orange",
    "Red",
    "White",
    "Yellow"
  ];

  $( "#autocomplete-small" ).autocomplete({
    autoFocus: true,
    delay: 100,
    minLength: 0,
    source: colors
  }).focus(function(){
    $(this).data("uiAutocomplete").search($(this).val());
  });

  var presidents = [
    "Bush, George H. W.",
    "Bush, George W.",
    "Carter, Jimmy",
    "Clinton, Bill",
    "Coolidge, Calvin",
    "Eisenhower, Dwight",
    "Ford, Gerald",
    "Harding, Warren G.",
    "Hoover, Herbert",
    "Johnson, Lyndon B.",
    "Kennedy, John F.",
    "Nixon, Richard",
    "Obama, Barack",
    "Reagan, Ronald",
    "Roosevelt, Franklin D.",
    "Roosevelt, Theodore",
    "Taft, William Howard",
    "Truman, Harry S.",
    "Trump, Donald",
    "Wilson, Woodrow"
  ];

  $( "#autocomplete-large" ).autocomplete({
    autoFocus: true,
    delay: 100,
    minLength: 0,
    select: function (event, ui) {
      if (ui.item.value in autocompleteLargeSelected) {
        autocompleteLargeSelected.filter(el => { return el != ui.item.value});
      } else {
        autocompleteLargeSelected.push(ui.item.value);
      }

      if (autocompleteLargeSelected.length < 1) {
        $("#autocomplete-large-options-selected").text("Selected: none");
      } else {
        let selected = 'Selected: ';
        selected += autocompleteLargeSelected.join('; ');
        $("#autocomplete-large-options-selected").text(selected);
      }
    },
    close: function(event, ui) {
      $("#autocomplete-large").val('');
    },
    source: presidents
  }).focus(function(){
    $(this).data("uiAutocomplete").search($(this).val());
  });
});
