export const ACTION_REGISTER_ATTEMPT = '[register] ATTEMPT'
export const ACTION_REGISTER_SUCCESS = '[register] SUCCESS'
export const ACTION_REGISTER_ERROR = '[register] ERROR'

export const registerAttemptAction = user => ({
    type: ACTION_REGISTER_ATTEMPT,
    payload: user
})

export const registerSuccessAction = user => ({
    type: ACTION_REGISTER_SUCCESS,
    payload: user
})

export const registerErrorAction = error => ({
    type: ACTION_REGISTER_ERROR,
    payload: error
})