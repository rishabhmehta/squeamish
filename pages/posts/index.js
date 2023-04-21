import axios from 'axios'
import { useEffect, useState } from 'react'

// Dependency
// useEffect What do we kow about this => useEffect runs after the component has mounted
// this runs every time after the component is mounted
// every time the state changes it causes a component remount

/**
 * @param useEffect(callback, array)
 * where array is optional, it can be passed or it can be ignored
 * @param useEffect(callback, array)
 * @param useEffect(callback)
 * const [some, setSome] = useState(0)
 * setSome (some => some + 1)
 * in the case when you're passing only callbacks useEffect will run every time the component re mounts
 * a component will always re mount whenever the state changes
 * when you pass an optional array, it's basically a remote control to handle the effects of useEffect
 * [] => should be empty
 * [education, workExperience, languagesKnown] => should contain items
 *
 * whenenver dependency array is passed, useEffect somehow gets the power of useState to remount the component.
 *
 */

const URL = 'https://jsonplaceholder.typicode.com/posts'
const Posts = () => {
  const [postData, setPostData] = useState([])

  // useEffect(() => {
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => console.log('from fetch', data))
  // }, [])

  useEffect(() => {
    axios.get(URL).then((data) => setPostData(data.data))
  }, [])

  console.log(postData)
  return (
    <>
      <h1>All posts come here</h1>
      <div>
        {postData.map((data) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              <p>{data.id}</p>
              <p>{data.title}</p>
              <p>{data.body}</p>
            </div>
          )
        })}
        {/* {postData.map((data) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.body}</p>
          </div>
        ))} */}
      </div>
    </>
  )
}

export default Posts
