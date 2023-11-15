/**
 * Determines if a task's due date falls within a specified time frame.
 * The time frames can be 'today', 'week', 'month', or 'year'.
 *
 * @param {string} dueDate - The due date of the task in YYYY-MM-DD format.
 * @param {string} timeFrame - The time frame to check against ('today', 'week', 'month', 'year').
 * @returns {boolean} True if the due date falls within the specified time frame, otherwise false.
 */
export function isDueInTimeFrame(dueDate, timeFrame) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Remove time component

  // Split dueDate into year, month, and day integers.
  const [year, month, day] = dueDate.split("-");
  const due = new Date();
  due.setFullYear(year, month - 1, day);
  due.setHours(0, 0, 0, 0); // Remove time component

  switch (timeFrame) {
    case "today":
      return isToday(due, today);
    case "week":
      return isThisWeek(due, today);
    case "month":
      return isThisMonth(due, today);
    case "year":
      return isThisYear(due, today);
    default:
      return false; // Return false for unknown time frames
  }
}

function isToday(due, today) {
  return due.toDateString() === today.toDateString();
}

function isThisWeek(due, today) {
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay()); // Set to the previous Sunday
  startOfWeek.setHours(0, 0, 0, 0); // Remove time component

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // Set to the next Saturday
  endOfWeek.setHours(23, 59, 59, 999); // Include the entire end day

  return due >= startOfWeek && due <= endOfWeek;
}

function isThisMonth(due, today) {
  return (
    due.getMonth() === today.getMonth() &&
    due.getFullYear() === today.getFullYear()
  );
}

function isThisYear(due, today) {
  return due.getFullYear() === today.getFullYear();
}