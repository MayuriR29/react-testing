import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentBox'

let wrapped
beforeEach(() => {
  wrapped = shallow(<App />)
});

it('shows comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows comment list', () => {

  expect(wrapped.find(CommentList).length).toEqual(1)
})