const datePicker = () => {
  const $datePickerInput = document.getElementById('date-picker-input');
  const $calendar = document.querySelector('.calendar');

  const addActiveClass = () => {
    $calendar.classList.add('active');
  };

  const removeActiveClass = (event) => {
    if (
      event.target !== $datePickerInput &&
      $calendar.classList.contains('active')
    ) {
      $calendar.classList.remove('active');
    }
  };

  $datePickerInput.addEventListener('click', addActiveClass);
  window.addEventListener('click', removeActiveClass);
};

datePicker();
