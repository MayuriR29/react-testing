import comment from 'reducers/comment'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }
  const newState = comment([], action)
  expect(newState).toEqual(['New Comment'])
})

it('handles action of unknown type', () => {
  const newState = comment([], { type: 'sdasdasd' })
  expect(newState).toEqual([])
})