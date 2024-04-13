import { useState,useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import './App.css'
import { data } from './data'

function App() {

  const [displayData, setDisplayData] = useState([])
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  const [length, setlength] = useState(10)

  

  const fetchNext = ()=> {
    setlength(length+10)
    setDisplayData(data.splice(length))
    setHasMore(false)
    console.log("next")
  }

  console.log(displayData)

  useEffect(() => {
    setDisplayData(data.splice(10))
  }, [])
  

  return (
    <>
    <div className='px-2 py-10'>
      <div className='mb-6'>
        <div className="flex">
          <input type="text" />
          <button>search</button>
        </div>
      </div>
      <div>
      <InfiniteScroll
              pageStart={0}
              loadMore={fetchNext}
              hasMore={hasMore}
              loader={<div className="loader" key={0}>Loading ...</div>}
  >
      <table className="w-full lg:text-base text-sm">
            <tbody>
              <tr className="text-white bg-cyan-600">
                <th align="left" className="p-1.5 border border-gray-500">
                  CD Rank
                </th>
                <th align="left" className="p-1.5 border border-gray-500">
                  Colleges
                </th>
                <th align="left" className="p-1.5 border border-gray-500">
                  Course Fees
                </th>
                <th align="left" className="p-1.5 border border-gray-500">
                  Placement
                </th>
                <th align="left" className="p-1.5 border border-gray-500">
                  User Reviews
                </th>
                <th align="left" className="p-1.5 border border-gray-500">
                  Ranking
                </th>
              </tr>
             
              {data?.map?.((item, i) => (
                <tr key={i} className="even:bg-gray-100">
                  <td className="p-1.5 border border-gray-500">#{i}</td>
                  <td className="p-1.5 border border-gray-500"><h6 className='font-bold text-cyan-500'>₹ {item?.name}</h6></td>
                  <td className="p-1.5 border border-gray-500">
                    <h6 className='font-bold text-cyan-500'>₹ {item?.fees}</h6>
                    <p className='text-xs mt-1'>BE/B.Tech</p>
                    <p className='text-xs mt-1'>- 1st Year Fees</p>
                    <button className='mt-1 font-bold text-orange-500'>Compare Fees</button>
                  </td>
                  <td className="p-1.5 border border-gray-500">
                  <h6 className='font-bold text-cyan-500'>₹ {item?.avgPackage}</h6>
                    <p className='text-xs mt-1'>Average Package</p>
                    <h6 className='font-bold text-cyan-500'>₹ {item?.highPackage}</h6>
                    <p className='text-xs mt-1'>highest Package</p>
                    <button className='mt-1 font-bold text-orange-500'>Compare Fees</button>
                  </td>
                  <td className="p-1.5 border border-gray-500">
                    {item?.rating}/10
                    <p>Based on {item?.reviews} User Reviews</p>
                    <h6>Best in {item?.bestIn}</h6>
                  </td>
                  <td className="p-1.5 border border-gray-500 text-sm text-wrap">
                    #{item?.ranking} in India
                  </td>
                </tr>
              ))}
             
            </tbody>
          </table>
          </InfiniteScroll>
      </div>
    </div>
    </>
  )
}

export default App
