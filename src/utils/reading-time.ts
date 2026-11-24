export function getReadingTime(content: string, wordsPerMinute = 200): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / wordsPerMinute));
  return `${minutes} min`;
}
