import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      return (
        <li key={rating.ratingId} onClick={onClickRatingItem}>
          <img src={rating.imageUrl} alt={`rating ${rating.ratingId}`} />
          <p>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => {
    return (
      <div>
        <h1>Rating</h1>
        <ul>{renderRatingsFiltersList()}</ul>
      </div>
    )
  }

  const renderCategoriesList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      return (
        <li key={category.categoryId} onClick={onClickCategoryItem}>
          <p>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <div>
      <h1>Category</h1>
      <ul>{renderCategoriesList()}</ul>
    </div>
  )
  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {filterSearchInput} = props
    return (
      <div>
        <input
          value={filterSearchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div>
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
