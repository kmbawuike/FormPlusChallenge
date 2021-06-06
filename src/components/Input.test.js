import React from 'react'
import {render, fireEvent, queryByAttribute} from '@testing-library/react'
import Input from './Input'
it("renders correctly", ()=>{
  const {queryByTestId, queryAllByText} = render(<Input />)
  expect(queryByTestId("custom-input")).toBeTruthy()
})