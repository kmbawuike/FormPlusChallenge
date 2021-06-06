import React, { useEffect, useState } from "react"
import Input from "../../components/Input"
import Select from "../../components/Select"
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg"
import Card from "../../components/Card"
import { useDispatch, useSelector } from "react-redux"
import {
  getFilteredTemplates,
  getFormTemplates,
  setDefaultSort,
  sortAscendingOrder,
  sortDescendingOrder,
} from "../../store/actions/formTemplatesActions"
import Loader from "../../components/Loader"
import Pagination from "../../components/Pagination"
import { ascendingOrder, capitalize, dynamicSort } from "../../utility/helpers"

export default function Landing() {
  // data
  const categories = ["All", "Education", "E-commerce", "Health"]
  const [currentCategory, setCurrentCategory] = useState('All')
  const order = ["Default", "Ascending", "Descending"]
  const date = ["Default", "Ascending", "Descending"]
  const [currentPage, setCurrentPage] = useState(1)
  const [templateName, setTemplateName] = useState("")


// react redux dispatch
  const dispatch = useDispatch()

  // store
  const { isUiLoding: isLoading } = useSelector((state) => state.ui)
  let { currentFormTemplates, formTemplates } = useSelector(
    (state) => state.formTemplates
  )

  useEffect(() => {
    dispatch(getFormTemplates(currentPage))
  }, [])

// search and filter functions begin
  const handleFilterTemplate = (query, filterType) => {
    setCurrentPage(1)
    dispatch(getFilteredTemplates(filterType, query, currentPage))
  }

  const handleCategoryChange = (e) => {
    const value = e.target.value
    setCurrentCategory(value)
    setCurrentPage(1)
    setTemplateName('')
    if(value === 'All'){
      dispatch(setDefaultSort(currentPage))
    }else{
      handleFilterTemplate('category', value)
    } 
  }
  const handleSearchChange = (e) => {
    setTemplateName(e.target.value)
  }
  const search = () => {
    handleFilterTemplate('name', templateName)
  }
  const handleSort = (e, sortType) => {
    const value = e.target.value
    if(value.toLowerCase() === 'ascending'){
      console.log(sortType)
      dispatch(sortAscendingOrder(sortType))
    }else if(value.toLowerCase() === 'descending'){
      dispatch(sortDescendingOrder(sortType))
    }else{
    dispatch(setDefaultSort(currentPage))
    }
  }

  // search and filter functions end
  
  return (
    <main className={`main-container ${isLoading ? "loading" : "loaded"}`}>
      {isLoading && <Loader />}
      <section className="container">
        {/* filters and search begin */}
        <section className="filter-container">
          <Input placeholder="Search Templates" onClick={search} onChange={handleSearchChange} />
          <section className="filter-dropdown-container">
            <span>Sort By:</span>
            <Select
              legend="Category"
              options={categories}
              onChange={handleCategoryChange}
            />
            <Select legend="Order" options={order} onChange={(e)=> handleSort(e, 'name')}/>
            <Select legend="Date" options={date} onChange={(e)=> handleSort(e, 'created')}/>
          </section>
        </section>
       {/* filters and search end */}
        <section className="info-container">
          <InfoIcon className="info-icon" />
          <p>
            Tada! Get started with a free template. Can’t find what you are
            looking for? Search from the 1000+ available templates
          </p>
        </section>
        {/* Templates Cards begin */}
        <section className="templates-container">
          <section className="templates-header">
            <h1>{currentCategory} Templates</h1>
            <span>{formTemplates.length} templates</span>
          </section>
          <section className="templates">
            {currentFormTemplates &&
              currentFormTemplates.map((elem, key) => (
                <Card
                  title={capitalize(elem.name)}
                  description={elem.description}
                  key={key}
                />
              ))}
          </section>
        </section>
       {/* Templates Cards end */}
       {/* footer and pagination */}
        <footer>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </footer>
      {/* footer and pagination */}
      </section>
    </main>
  )
}
