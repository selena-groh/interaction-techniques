var autocompleteSmallSelected = [];
var autocompleteLargeSelected = [];

function showCondition(selectedConditionId) {
  const selectedCondition = document.getElementById(selectedConditionId);
  document.querySelectorAll('.condition').forEach(el => {
    el.style.display = 'none';
  });

  selectedCondition.style.display = 'block';
}

function clearSelected() {
  document.querySelectorAll('input[type="checkbox"]').forEach(el => {
    el.checked = false;
  });
  autocompleteSmallSelected = [];
  autocompleteLargeSelected = [];
  $("#autocomplete-small-input").val('');
  $("#autocomplete-large-input").val('');
  $("#autocomplete-small-options-selected").text("Selected: none");
  $("#autocomplete-large-options-selected").text("Selected: none");
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

  $( "#autocomplete-small-input" ).autocomplete({
    autoFocus: true,
    delay: 100,
    minLength: 0,
    select: function (event, ui) {
      if (autocompleteSmallSelected.includes(ui.item.value)) {
        autocompleteSmallSelected.splice(autocompleteSmallSelected.indexOf(ui.item.value), 1);
      } else {
        autocompleteSmallSelected.push(ui.item.value);
      }

      if (autocompleteSmallSelected.length < 1) {
        $("#autocomplete-small-options-selected").text("Selected: none");
      } else {
        let selected = 'Selected: ';
        selected += autocompleteSmallSelected.join('; ');
        $("#autocomplete-small-options-selected").text(selected);
      }
    },
    close: function(event, ui) {
      $("#autocomplete-small-input").val('');
      $("#autocomplete-small-input").blur();
    },
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

  $( "#autocomplete-large-input" ).autocomplete({
    autoFocus: true,
    delay: 100,
    minLength: 0,
    select: function (event, ui) {
      if (autocompleteLargeSelected.includes(ui.item.value)) {
        autocompleteLargeSelected.splice(autocompleteLargeSelected.indexOf(ui.item.value), 1);
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
      $("#autocomplete-large-input").val('');
      $("#autocomplete-large-input").blur();
    },
    source: presidents
  }).focus(function(){
    $(this).data("uiAutocomplete").search($(this).val());
  });
});
