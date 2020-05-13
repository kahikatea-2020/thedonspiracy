import React from 'react'
import { connect } from 'react-redux'
import { increaseCountAction } from '../actions/index'

function Show({ increaseCount, myCount }){
  return(
<div className="show">
  <button onClick={increaseCount}>{myCount}</button>
</div>
  )
}

const mapStateToProps = state => ({
    myCount: state.count
})

const mapDispatchToProps = {increaseCount: increaseCountAction,}

export default connect(mapStateToProps, mapDispatchToProps)(Show)