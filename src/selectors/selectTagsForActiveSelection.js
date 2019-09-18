export default (start, end, taggedSelections) => {
  const tagIds = [];
  if(start === end) {
    taggedSelections.forEach(s => {
      if (s.start < start && s.end > end) {
        tagIds.push(s.tagId);
      }
    });
  }
  return tagIds;
}