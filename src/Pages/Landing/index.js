import React, { useEffect, useState } from "react"
import Input from "../../components/Input"
import Select from "../../components/Select"
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg"
import Card from "../../components/Card"
import { useDispatch, useSelector } from "react-redux"
import {
  filterFormTemplates,
  getFilteredTemplates,
  getFormTemplates,
} from "../../store/actions/formTemplatesActions"
import Loader from "../../components/Loader"
import Pagination from "../../components/Pagination"
import { capitalize } from "../../utility/helpers"

export default function Landing() {
  const categories = ["All", "Education", "E-Commerce", "Health"]
  const [currentCategory, setCurrentCategory] = useState('All')
  const order = ["Default", "Ascending", "Descending"]
  const date = ["Default", "Ascending", "Descending"]
  const dispatch = useDispatch()
  const { isUiLoding: isLoading } = useSelector((state) => state.ui)
  const { currentFormTemplates, formTemplates } = useSelector(
    (state) => state.formTemplates
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [templateName, setTemplateName] = useState("")

  useEffect(() => {
    dispatch(getFormTemplates(currentPage))
  }, [])

  useEffect(() => {
    // console.log(currentFormTemplates[0].category)
  }, [currentFormTemplates])

  const handleFilterTemplate = (query, filterType) => {
    setCurrentPage(1)
    dispatch(getFilteredTemplates(filterType, query, currentPage))
  }

  const handleCategoryChange = (e) => {
    setCurrentCategory(e.target.value)
    setTemplateName('')
  }
  const handleSearchChange = (e) => {
    setTemplateName(e.target.value)
  }
  const search = () => {
    handleFilterTemplate('name', templateName)
  }
  return (
    <main className={`main-container ${isLoading ? "loading" : "loaded"}`}>
      {isLoading && <Loader />}
      <section className="container">
        <section className="filter-container">
          <Input placeholder="Search Templates" onClick={search} onChange={handleSearchChange} />
          <section className="filter-dropdown-container">
            <span>Sort By:</span>
            <Select
              legend="Category"
              options={categories}
              onChange={handleCategoryChange}
            />
            <Select legend="Order" options={order} />
            <Select legend="Date" options={date} />
          </section>
        </section>
        <section className="info-container">
          <InfoIcon className="info-icon" />
          <p>
            Tada! Get started with a free template. Can’t find what you are
            looking for? Search from the 1000+ available templates
          </p>
        </section>
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
        <footer>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </footer>
      </section>
    </main>
  )
}
