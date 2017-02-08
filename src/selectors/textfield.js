import { compose }     from 'redux'
import { changeValue } from 'action/textfield'

export const mapStateToProps = pick => state => ({
  value: pick(state).value
})

export const mapDispatchToProps = name => dispatch => ({
  changeHandle: compose(dispatch, changeValue(name))
})
