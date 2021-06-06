import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Card from './Card'
it("renders correctly", ()=>{
  const {queryByTestId, queryAllByText} = render(<Card />)
  expect(queryByTestId("custom-card")).toBeTruthy()
  expect(queryAllByText("Use Template")).toBeTruthy()
})