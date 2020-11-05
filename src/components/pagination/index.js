import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const PageCreator = (pagesNumber, setCurrentPage) => {
  let pageElt = []

  for (let i = 0; i <= pagesNumber; i++) {
    pageElt.push(
      <PageComponent
        key={i}
        onClick={() => {
          console.log(i)
          setCurrentPage(i)
        }}
      >
        {i}
      </PageComponent>
    )
  }

  return pageElt
}

const Pagination = ({ total, setCurrentPage, valueOffset }) => {
  const [pages, setPages] = useState(0)

  useEffect(() => {
    const numberPage = total / valueOffset
    setPages(Math.floor(numberPage))
  }, [total])

  if (total === 0) return null
  return (
    <PaginationContainer>
      <p>{PageCreator(pages, setCurrentPage)}</p>
    </PaginationContainer>
  )
}

const PageComponent = styled.a`
  margin: 3px 6px;
  cursor: pointer;
`

const PaginationContainer = styled.div`
  display: flex;
  background-color: red;
  flex-wrap: wrap;
`

Pagination.propTypes = {
  total: PropTypes.number,
  setCurrentPage: PropTypes.func,
  valueOffset: PropTypes.number
}

export default Pagination
