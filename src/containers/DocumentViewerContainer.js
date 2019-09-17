import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateSelectedDocumentText } from '../actions';
import DocumentViewerComponent from '../components/DocumentViewerComponent'

const mapStateToProps = state => ({
  document: state.documentsReducer.document,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateSelectedDocumentText }, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentViewerComponent)