import {
    TYPE_INSTITUTION_FIELD
} from '../../store/storeTypes'

const RESULT = "RESULT"
const INSTITUTION_FIELD_RESULT = TYPE_INSTITUTION_FIELD + RESULT
export const INSTITUTION_FIELD_RESULT_REQUEST = INSTITUTION_FIELD_RESULT + "REQUEST"
export const INSTITUTION_FIELD_RESULT_SUCCESS = INSTITUTION_FIELD_RESULT + "SUCCESS"

export const institutionFieldResultRequest = () => {
    return {
        type: INSTITUTION_FIELD_RESULT_REQUEST
    }
}

export const institutionFieldResultSuccess = (data) => {
    return {
        type: INSTITUTION_FIELD_RESULT_SUCCESS,
        payload: {
            data: data
        }
    }
}