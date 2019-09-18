import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTagToSelectedText } from '../actions';
import selectTotalSelectionsByTag from '../selectors/selectTotalSelectionsByTag';
import selectTagsForActiveSelection from '../selectors/selectTagsForActiveSelection';
import TagTreeComponent from '../components/TagTreeComponent'

const mapStateToProps = state => ({
  tagTrees: state.tagsReducer.tagTrees,
  activeTagList: selectTotalSelectionsByTag(state.tagsReducer.tagTrees[0].tags, state.documentsReducer.taggedSelections), 
  tagsAppliedToActiveSelection: selectTagsForActiveSelection(state.documentsReducer.selection.start,
    state.documentsReducer.selection.end, state.documentsReducer.taggedSelections, state.tagsReducer.tagTrees[0].tags),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({addTagToSelectedText}, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagTreeComponent)