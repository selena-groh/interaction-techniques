function showCondition(selectedConditionId) {
  const selectedCondition = document.getElementById(selectedConditionId);
  document.querySelectorAll('.condition').forEach(el => {
    el.style.display = 'none';
  });

  selectedCondition.style.display = 'block';
  console.log(selectedCondition);
}
