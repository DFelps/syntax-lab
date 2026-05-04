import { describe, expect, it } from 'vitest';
import { getProgressPercent, readProgress, toggleProgress, writeProgress } from '../progressStorage';

function createStorage(initial: Record<string, string> = {}): Storage {
  const state = new Map(Object.entries(initial));

  return {
    get length() {
      return state.size;
    },
    clear: () => state.clear(),
    getItem: (key: string) => state.get(key) ?? null,
    key: (index: number) => Array.from(state.keys())[index] ?? null,
    removeItem: (key: string) => state.delete(key),
    setItem: (key: string, value: string) => state.set(key, value)
  };
}

describe('progress storage', () => {
  it('reads valid progress from storage', () => {
    const storage = createStorage({ progress: JSON.stringify(['html', 'css', 10]) });

    expect(readProgress(storage, 'progress')).toEqual(['html', 'css']);
  });

  it('ignores broken json', () => {
    const storage = createStorage({ progress: '{broken' });

    expect(readProgress(storage, 'progress')).toEqual([]);
  });

  it('toggles a lesson slug', () => {
    expect(toggleProgress('html', [])).toEqual(['html']);
    expect(toggleProgress('html', ['html', 'css'])).toEqual(['css']);
  });

  it('writes unique lesson slugs', () => {
    const storage = createStorage();

    expect(writeProgress(storage, ['html', 'html', 'css'], 'progress')).toEqual(['html', 'css']);
  });

  it('calculates progress percentage safely', () => {
    expect(getProgressPercent(['a', 'b'], 4)).toBe(50);
    expect(getProgressPercent(['a'], 0)).toBe(0);
  });
});
