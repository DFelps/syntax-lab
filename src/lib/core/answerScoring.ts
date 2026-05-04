export type KeywordMatch = {
  keyword: string;
  matched: boolean;
};

export type ChallengeEvaluation = {
  score: number;
  matches: KeywordMatch[];
  missing: string[];
  passed: boolean;
};

export function normalizeAnswer(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function evaluateChallengeAnswer(answer: string, expectedKeywords: string[], passScore = 70): ChallengeEvaluation {
  const normalizedAnswer = normalizeAnswer(answer);
  const uniqueKeywords = [...new Set(expectedKeywords.map((keyword) => keyword.trim()).filter(Boolean))];

  if (!uniqueKeywords.length) {
    return { score: 0, matches: [], missing: [], passed: false };
  }

  const matches = uniqueKeywords.map((keyword) => {
    const normalizedKeyword = normalizeAnswer(keyword);

    return {
      keyword,
      matched: normalizedAnswer.includes(normalizedKeyword)
    };
  });

  const hits = matches.filter((match) => match.matched).length;
  const score = Math.round((hits / uniqueKeywords.length) * 100);
  const missing = matches.filter((match) => !match.matched).map((match) => match.keyword);

  return {
    score,
    matches,
    missing,
    passed: score >= passScore
  };
}

export type FeedbackMessages = {
  empty: string;
  passed: string;
  missing: string;
  missingLabel: string;
};

const defaultFeedbackMessages: FeedbackMessages = {
  empty: 'Write an attempt first. The goal is to think before checking the model answer.',
  passed: 'Nice. Your answer already covers the main structure. Compare it with the model and adjust names, syntax or order if needed.',
  missing: 'Some important parts are still missing.{missing} Try to complete the logic before opening the model answer.',
  missingLabel: ' Missing: {items}.'
};

export function buildFeedbackMessage(
  answer: string,
  evaluation: ChallengeEvaluation,
  messages: FeedbackMessages = defaultFeedbackMessages
): string {
  if (!answer.trim()) {
    return messages.empty;
  }

  if (evaluation.passed) {
    return messages.passed;
  }

  const missingText = evaluation.missing.length
    ? messages.missingLabel.replace('{items}', evaluation.missing.join(', '))
    : '';

  return messages.missing.replace('{missing}', missingText);
}
