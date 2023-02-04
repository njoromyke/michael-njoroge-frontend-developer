import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ITEMS_PER_PAGE, stages, TOKEN } from '../../../helpers/constants'
import { getFromLocal } from '../../../helpers/utils/auth'
import { showNotification } from '../../../helpers/utils/notification'
import DataModal from '../../data-modal/data-modal'
import Loader from '../../loader/loader'
import { Rocket } from '../../rocket/rocket'
import CustomSwitch from '../../switch/custom-switch'
import './data-area.scss'
const DataArea = () => {
  const [rockets, setRockets] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({
    company: '',
    stage: '',
    status: false
  })
  const [currentPage, setCurrentPage] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [selectedRocket, setSelectedRocket] = useState(null)

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  const pageCount = Math.ceil(rockets.length / ITEMS_PER_PAGE)
  const startIndex = currentPage * ITEMS_PER_PAGE
  const itemsToDisplay = rockets.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilter({ ...filter, [name]: value })
  }
  const token = getFromLocal(TOKEN)

  const count = Object.values(filter).filter(
    (item) => item !== '' && item !== false
  ).length

  const getRockets = () => {
    setLoading(true)
    axios
      .get('http://localhost:5000/api/rockets', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setRockets(res.data.rockets)
      })
      .catch((err) => {
        showNotification('error', err.response.data.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getRockets()
  }, [])

  useEffect(() => {
    if (filter.status) {
      setRockets(rockets.filter((rocket) => rocket.active))
    } else {
      getRockets()
    }
  }, [filter.status])

  useEffect(() => {
    if (filter.stage) {
      setRockets(rockets.filter((rocket) => rocket.stage === filter.stage))
    } else {
      getRockets()
    }
  }, [filter.stage])

  useEffect(() => {
    if (filter.company) {
      setRockets(
        rockets.filter((rocket) =>
          rocket.company.toLowerCase().includes(filter.company.toLowerCase())
        )
      )
    } else {
      getRockets()
    }
  }, [filter.company])

  const clearFilters = () => {
    setFilter({
      company: '',
      stage: '',
      status: false
    })

    getRockets()
  }

  return (
    <section className='data-section'>
      {loading && <Loader />}

      {showModal && (
        <DataModal
          handleClose={() => {
            setShowModal(false)
            setSelectedRocket(null)
          }}
          data={selectedRocket}
        />
      )}

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='data-title text-center'>Data Area</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                <form className='row'>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label htmlFor='company'>Filter By Company</label>
                      <input
                        type='text'
                        className='form-control'
                        id='company'
                        placeholder='Company'
                        name='company'
                        value={filter.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label htmlFor='stages'>Filter By Stages</label>
                      <select
                        className='form-select'
                        id='stages'
                        name='stage'
                        value={filter.stage}
                        onChange={handleChange}
                      >
                        <option value=''>Select Stage</option>
                        {Object.values(stages).map((stage, index) => (
                          <option key={index} value={stage.value}>
                            {stage.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label htmlFor='stages'>Filter By Status</label>
                      <CustomSwitch
                        handleChange={handleChange}
                        label='Active'
                        name='status'
                        checked={filter.status}
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    {count > 0 && (
                      <button
                        type='button'
                        className='btn btn-danger mt-2'
                        onClick={clearFilters}
                      >
                        Clear Filters
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-4'>
          {itemsToDisplay.map((rocket, index) => (
            <>
              <Rocket
                key={index}
                rocket={rocket}
                onClick={() => {
                  setSelectedRocket(rocket)
                  setShowModal(true)
                }}
              />
            </>
          ))}
        </div>
        <div className='col-md-12 mt-4'>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageChange}
            initialPage={0}
            containerClassName='pagination'
            pageLinkClassName='page-link'
            activeClassName='active'
            previousLabel='Previous'
            nextLabel='Next'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            previousClassName='page-item'
            nextClassName='page-item'
            pageClassName='page-item'
            previousLinkClassName='page-link'
            nextLinkClassName='page-link'
          />
        </div>
      </div>
    </section>
  )
}

export default DataArea
