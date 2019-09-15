import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TagTreeComponent from '../components/TagTreeComponent'

const mapStateToProps = state => ({
  tagTrees: state.tagsReducer.tagTrees,
})

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(TodoActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagTreeComponent)