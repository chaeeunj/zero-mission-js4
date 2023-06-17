const datePicker = () => {
  const $datePickerInput = document.getElementById('date-picker-input');
  const $calendar = document.querySelector('.calendar');
  const $calendarMonth = document.querySelector('.calendar-month');
  const $calendarYear = document.querySelector('.calendar-year');
  const $prevMonth = document.querySelector('.bxs-left-arrow');
  const $nextMonth = document.querySelector('.bxs-right-arrow');
  const $date = document.querySelector('.date');

  const selectedDate = new Date();

  const updateCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const monthName = monthNames[month];

    $calendarMonth.innerHTML = monthName;
    $calendarYear.innerHTML = year;
  };

  const showCalendar = () => {
    $calendar.classList.add('active');
  };

  const hideCalendar = (event) => {
    if (
      event.target !== $datePickerInput &&
      !$calendar.contains(event.target)
    ) {
      $calendar.classList.remove('active');
    }
  };

  const goToPrevMonth = () => {
    selectedDate.setMonth(selectedDate.getMonth() - 1);
    updateCalendar();
    createCalendarDays();
  };

  const goToNextMonth = () => {
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    updateCalendar();
    createCalendarDays();
  };

  const createCalendarDays = () => {
    selectedDate.setDate(1);

    const $calendarDay = document.querySelector('.calendar-day');

    // $calendarDay.innerHTML = '';

    const lastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      0
    ).getDate();

    const firstDayIndex = selectedDate.getDay();

    const lastDayIndex = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    let days = '';

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-month-date date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        selectedDate.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="current-month-date date">${i}</div>`;
      } else {
        days += `<div class="date">${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-month-date date">${j}</div>`;
    }

    $calendarDay.innerHTML = days;

    let selectedDateElement = null;

    const selectDate = (event) => {
      const target = event.target;
      if (target && target.classList.contains('date')) {
        if (selectedDateElement) {
          selectedDateElement.classList.remove('selected');
          $datePickerInput.innerHTML = '';
        }
        selectedDateElement = target;
        selectedDateElement.classList.add('selected');
        $datePickerInput.innerHTML = target.innerHTML;
      }
    };

    $calendarDay.addEventListener('click', selectDate);
  };

  $datePickerInput.addEventListener('click', showCalendar);
  $prevMonth.addEventListener('click', goToPrevMonth);
  $nextMonth.addEventListener('click', goToNextMonth);
  window.addEventListener('click', hideCalendar);

  updateCalendar();
  createCalendarDays();
};

datePicker();
