import { SAVE_COMMENT } from 'actions/types'

export const saveComment = (comment) => {
  return {
    action: SAVE_COMMENT,
    payload: comment
  }
}