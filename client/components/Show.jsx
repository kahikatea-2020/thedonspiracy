import React from 'react'
import { connect } from 'react-redux'

function Show ({dispatch, myCount }){
  return(
<div className="show">
  <button onClick={() => null}>{myCount}</button>
</div>
  )
}

const mapStateToProps = state => ({
    myCount: state.count
})

export default connect(mapStateToProps)(Show)