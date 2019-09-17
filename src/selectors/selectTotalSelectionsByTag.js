export default (availableTags, taggedSelections) => {
  return availableTags.map(tag => {
    const filteredSelections = taggedSelections.filter(s => s.tagId === tag.id);
    return {
      ...tag,
      totalSelections: filteredSelections.length,
    };
  });
}