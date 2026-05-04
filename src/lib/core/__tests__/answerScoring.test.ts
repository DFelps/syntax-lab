import { describe, expect, it } from 'vitest';
import { evaluateChallengeAnswer, normalizeAnswer } from '../answerScoring';

describe('answer scoring', () => {
  it('normalizes spaces and accents', () => {
    expect(normalizeAnswer('  Output   COM  Ação  ')).toBe('output com acao');
  });

  it('scores expected keywords', () => {
    const result = evaluateChallengeAnswer('Input: age. Use if and show output.', ['input', 'age', 'if', 'output']);
    expect(result.score).toBe(100);
    expect(result.missing).toEqual([]);
  });

  it('returns missing keywords', () => {
    const result = evaluateChallengeAnswer('Use if with age.', ['input', 'age', 'if', 'output']);
    expect(result.score).toBe(50);
    expect(result.missing).toEqual(['input', 'output']);
  });
});
