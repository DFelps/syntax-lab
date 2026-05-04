const PROGRESS_KEY = 'syntax-lab-progress-v3';

export function readProgress(storage: Storage, key = PROGRESS_KEY): string[] {
  try {
    const value = storage.getItem(key);
    const parsed = value ? JSON.parse(value) : [];

    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

export function writeProgress(storage: Storage, completed: string[], key = PROGRESS_KEY) {
  const uniqueCompleted = [...new Set(completed)];
  storage.setItem(key, JSON.stringify(uniqueCompleted));

  return uniqueCompleted;
}

export function toggleProgress(current: string, completed: string[]) {
  if (!current) return completed;

  return completed.includes(current)
    ? completed.filter((slug) => slug !== current)
    : [...completed, current];
}

export function getProgressPercent(completed: string[], total: number) {
  if (total <= 0) return 0;

  return Math.min(100, Math.round((completed.length / total) * 100));
}
