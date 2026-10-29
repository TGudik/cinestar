
export function formatTime(timeString) {
  const stringToFormat = new Date(timeString);

  const formatted = stringToFormat.toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formatted;
}