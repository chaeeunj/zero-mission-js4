// const datePicker = () => {
//   const $datePickerInput = document.getElementById('date-picker-input');
//   const $calendar = document.querySelector('.calendar');
//   const $calendarMonth = document.querySelector('.calendar-month');
//   const $calendarYear = document.querySelector('.calendar-year');
//   const $prevMonth = document.querySelector('.bxs-left-arrow');
//   const $nextMonth = document.querySelector('.bxs-right-arrow');

//   let date = new Date();
//   let year = date.getFullYear();
//   let month = date.getMonth();
//   let day = date.getDate();
//   let monthNames = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   let monthName = monthNames[month];

//   let selectedDate = date;
//   let selectedYear = year;
//   let selectedMonth = month;
//   let selectedDay = day;

//   const showCurrentDate = () => {
//     $calendarMonth.innerHTML = monthName;
//     $calendarYear.innerHTML = year;
//   };

//   const addActiveClass = () => {
//     $calendar.classList.add('active');
//   };

//   const removeActiveClass = (event) => {
//     if (
//       event.target !== $datePickerInput &&
//       !$calendar.contains(event.target) &&
//       $calendar.classList.contains('active')
//     ) {
//       $calendar.classList.remove('active');
//     }
//   };

//   const goToPrevMonth = () => {
//     month -= 1;
//     if (month < 0) {
//       month = 11;
//       year -= 1;
//     }
//     $calendarMonth.innerHTML = monthName;
//     $calendarYear.innerHTML = year;
//   };

//   const goToNextMonth = () => {
//     month += 1;
//     if (month > 11) {
//       month = 0;
//       year += 1;
//     }
//     $calendarMonth.innerHTML = monthName;
//     $calendarYear.innerHTML = year;
//   };

//   $datePickerInput.addEventListener('click', addActiveClass);
//   $prevMonth.addEventListener('click', goToPrevMonth);
//   $nextMonth.addEventListener('click', goToNextMonth);
//   window.addEventListener('click', removeActiveClass);

//   const init = () => {
//     window.addEventListener('DOMContentLoaded', () => {
//       showCurrentDate();
//     });
//   };

//   init();
// };

// datePicker();

const datePicker = () => {
  const $datePickerInput = document.getElementById('date-picker-input');
  const $calendar = document.querySelector('.calendar');
  const $calendarMonth = document.querySelector('.calendar-month');
  const $calendarYear = document.querySelector('.calendar-year');
  const $prevMonth = document.querySelector('.bxs-left-arrow');
  const $nextMonth = document.querySelector('.bxs-right-arrow');

  const currentDate = new Date();
  let selectedDate = new Date();

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
  };

  const goToNextMonth = () => {
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    updateCalendar();
  };

  $datePickerInput.addEventListener('click', showCalendar);
  $prevMonth.addEventListener('click', goToPrevMonth);
  $nextMonth.addEventListener('click', goToNextMonth);
  window.addEventListener('click', hideCalendar);

  updateCalendar();
};

datePicker();
