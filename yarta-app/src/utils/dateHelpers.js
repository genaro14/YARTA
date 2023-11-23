// dateHelpers.js

// Function to check if a date is today
export const isToday = (someDate) => {
    const today = new Date();
    return isSameDay(someDate, today);
  };
  
  // Function to check if two dates are the same day
  export const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };
  
  // Function to format the date and time
  export const formatTime = (inputDate) => {
    console.log('INPUT: ', inputDate )
    const options = { hour: '2-digit', minute: '2-digit' };
    // Check if the input is a valid date string
    const isValidDateString = !isNaN(new Date(inputDate).getTime());
  
    console.log('Input Date:', inputDate);
    console.log('Is Valid Date String:', isValidDateString);
  
    if (!isValidDateString) {
      // Invalid date string, return as is
      console.log('Invalid Date String. Returning as is.');
      return inputDate;
    }
  
    // Check if the date contains a time component
    const hasTime = inputDate.includes('T');
  
    console.log('Has Time:', hasTime);
  
    if (hasTime) {
      const dateObject = new Date(inputDate);
  
      // Check if it's tomorrow with the specified time
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
  
      console.log('Tomorrow Date:', tomorrow);
  
      if (isSameDay(dateObject, tomorrow)) {
        console.log('It is Tomorrow with Specified Time.');
        return `Tomorrow ${dateObject.toLocaleTimeString([], options)}`;
      }
  
      // Display full date and time
      console.log('Displaying Full Date and Time.');
      return dateObject.toLocaleString(undefined, options);
    } else {
      // Check if it's today
      if (isToday(new Date(inputDate))) {
        console.log('It is Today.');
        return 'Today';
      }
  
      // Check if it's tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (isSameDay(new Date(inputDate), tomorrow)) {
        console.log('It is Tomorrow.');
        return 'Tomorrow';
      }
  
      // Display only the date
      console.log('Displaying Only Date.');
      return new Date(inputDate).toLocaleDateString();
    }
  };
  