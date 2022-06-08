import React, { useState } from 'react'

const SecondNav = () => {
  const secondnavJson = require('../../FileService/menu/secondnav.json')

  // #region for close second nav
  const [close, setClose] = useState(false)
  const isClose = () => {
    setClose(true)
  }
  //  #endregion

  //  #region this limit for second nav
  const [open, setOpen] = useState(false)
  const [limit, setLimit] = useState(3)

  const numberOf = () => {
    setOpen(!open)
    if (open) {
      setLimit(3)
    } else {
      setLimit(9)
    }
  }
  //  #endregion

  return (
    <div className={close ? 'd-none' : 'd-grid'}>
      <div id='second-nav' className='d-none d-lg-grid'>
        <div className='row'>
          <div className='col-11 '>
            <div className='row col-12 ps-3'>
              {secondnavJson.slice(0, limit).map((detail) => {
                return (
                  <div
                    id='detail'
                    className='col-lg-4 col-md-6 col-12 pe-3'
                    key={detail.id}
                  >
                    <div className='d-flex '>
                      <p className='nav-hover text-secondary'>{detail.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='col-1'>
            <div className='row ps-4 mt-2'>
              <p>
                <span
                  className='fa fa-sort-down text-white pointer '
                  onClick={numberOf}
                >
                  {' '}
                </span>
                <span
                  className='text-white ms-3 pointer'
                  data-testid='close-nav'
                  onClick={isClose}
                >
                  X
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondNav
