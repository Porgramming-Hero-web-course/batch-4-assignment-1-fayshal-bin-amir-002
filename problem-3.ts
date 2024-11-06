const countWordOccurrences = (sentence: string, word: string): number => {
    const regex = new RegExp(word, 'gi'); // 'g' for global, 'i' for case-insensitive
    const count = sentence.match(regex)?.length ?? 0;

    return count;
}