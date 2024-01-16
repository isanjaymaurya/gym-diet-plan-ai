import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';

const GENDER_LIST = ['Male', 'Female']
const WEIGHT_LIST = Array.from({ length: 141}, (_, index) => index + 10)
const FOOD_ORIENTATION_LIST = ['Veg', 'Non-Veg']

const HomePage = () => {
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')

  const formik = useFormik({
    initialValues: {
      gender: GENDER_LIST[0],
      weight: '',
      foodType: FOOD_ORIENTATION_LIST[0],
    },
    validationSchema: Yup.object({
      gender: Yup.string().required(),
      weight: Yup.string().required(),
      foodType: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      try {
        console.log(JSON.stringify(values))
        // const response = await axios.post(
        //   'https://api.openai.com/v1/engines/davinci-codex/completions',
        //   {
        //     prompt: `Generate GYM Diet plan based on ${JSON.stringify(values)}`,
        //     max_tokens: 50,
        //   },
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        //   }
        // }
        // )
        // console.log(response)
      } catch (error) {
        console.warn("Error fetching:", error)
      }
    }
  });

  return (
    <>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <h1 className='text-lg font-semibold text-center my-6'>GYM Diet Plan Generator</h1>
          <hr />
          <div className='my-3'>
            <h3 className="text-base font-semibold text-gray-900">Gender</h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {GENDER_LIST.map((gender: string) =>
                <li
                  className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                  key={gender}
                >
                  <div className="flex items-center ps-3">
                      <input id="horizontal-list-radio-license" type="radio" value={gender} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{gender}</label>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className='my-3'>
            <h3 className="text-base font-semibold text-gray-900">Weight</h3>
            <div className="flex">
              <button type="button" className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
              </button>
              <input
                type="number"
                id="weight"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                name="weight"
              />
              <button type="button" className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
              </button>
            </div>
          </div>
          <div className='my-3'>
            <h3 className="text-base font-semibold text-gray-900">Food Oriantation</h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {FOOD_ORIENTATION_LIST.map((foodType: string) =>
                <li
                  className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                  key={foodType}
                >
                  <div className="flex items-center ps-3">
                      <input id="horizontal-list-radio-license" type="radio" name="foodType" value={foodType} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{foodType}</label>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className='my-6 text-center'>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Generate
            </button>
          </div>
        </form>
      </section>
      <section>
        Result: {result}
      </section>
    </>
  )
}

export default HomePage;
