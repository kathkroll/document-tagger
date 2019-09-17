import generateHighlightedSpans from '../generateHighlightedSpans';

describe('generate highlighted spans', () => {

  it('should generate a single span when no tagged selections have been made', () => {
    const spans = generateHighlightedSpans([], "ABCDEFG HIJKLMNOP QRSTUV");
    expect(spans.length).toBe(1);
    expect(spans[0].props.children).toEqual('ABCDEFG HIJKLMNOP QRSTUV');
  });

  it('should generate a highlighted span surrounded by non-highlighted spans when one selection is present', () => {
    const spans = generateHighlightedSpans([ {tagId: 1, start: 2, end: 5} ], "ABCDEFG HIJKLMNOP QRSTUV");
    expect(spans.length).toBe(3);
    expect(spans[0].props.children).toEqual('AB');
    expect(spans[1].props.children).toEqual('CDE');
    expect(spans[1].props.className).toEqual('highlighted');
    expect(spans[2].props.children).toEqual('FG HIJKLMNOP QRSTUV');
  });

  it('should combine overlapping tag selections into a single span', () => {
    const tagSelections = [
      {
        tagId: 1,
        start: 2,
        end: 5,
      },
      {
        tagId: 1,
        start: 4,
        end: 7,
      }
    ];
    const spans = generateHighlightedSpans(tagSelections, "ABCDEFG HIJKLMNOP QRSTUV");
    expect(spans.length).toBe(3);
    expect(spans[0].props.children).toEqual('AB');
    expect(spans[1].props.children).toEqual('CDEFG');
    expect(spans[1].props.className).toEqual('highlighted');
    expect(spans[2].props.children).toEqual(' HIJKLMNOP QRSTUV');
  });
});