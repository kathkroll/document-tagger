import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateSelectedDocumentText } from '../actions';
import selectTagsForActiveSelection from '../selectors/selectTagsForActiveSelection';
import DocumentViewerComponent from '../components/DocumentViewerComponent'

const mapStateToProps = state => ({
  document: state.documentsReducer.document,
  taggedSelections: state.documentsReducer.taggedSelections,
  tagsAppliedToActiveSelection: selectTagsForActiveSelection(state.documentsReducer.selection.start,
    state.documentsReducer.selection.end, state.documentsReducer.taggedSelections),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateSelectedDocumentText }, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentViewerComponent)