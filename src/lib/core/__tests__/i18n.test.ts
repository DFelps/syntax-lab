import { describe, expect, it } from 'vitest';
import { nextLanguage } from '$lib/i18n';

describe('language switch', () => {
  it('toggles between English and Portuguese', () => {
    expect(nextLanguage('en')).toBe('pt');
    expect(nextLanguage('pt')).toBe('en');
  });
});
