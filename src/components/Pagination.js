import React from "react"
import { ReactComponent as ChevronRight } from "../assets/icons/chevron-right.svg"
import { ReactComponent as ChevronLeft } from "../assets/icons/chevron-left.svg"
import { useDispatch, useSelector } from "react-redux"
import { goNextPage, goPrevPage } from "../store/actions/formTemplatesActions"

export default function Pagination({ currentPage, setCurrentPage }) {
  const { formTemplates, pageLimit } = useSelector(
    (state) => state.formTemplates
  )
  const dispatch = useDispatch()
  const totalPages = Math.ceil(formTemplates.length / pageLimit)
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
    dispatch(goNextPage(currentPage))
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
    dispatch(goPrevPage(currentPage))
  }

  return (
    <>
      <ul className="footer">
        {currentPage > 1 ? <li className="page-button cursor" onClick={prevPage}>
          <ChevronLeft />
          <span>Previous</span>
        </li> : <li></li>}
        {/* <li className="page-button cursor" onClick={prevPage}>
          <ChevronLeft />
          <span>Previous</span>
        </li> */}
        <li>
          <span>{currentPage}</span> of {totalPages}
        </li>
        {currentPage <= totalPages && (
          <li className="page-button cursor" onClick={nextPage}>
            <span>Next</span>
            <ChevronRight />
          </li>
        )}
      </ul>
    </>
  )
}
