export default (start, end, taggedSelections, allTags) => {
  const tags = [];
  if(start === end) {
    taggedSelections.forEach(s => {
      if (s.start < start && s.end > end) {
        const tag = allTags.find(t => t.id === s.tagId);
        if(tag) {
          tags.push({
            id: s.tagId,
            name: tag.name,
          });
        }   
      }
    });
  }
  return tags;
}