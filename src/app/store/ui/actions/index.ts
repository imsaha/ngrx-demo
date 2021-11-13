import { createAction } from '@ngrx/store'



export const startLoading = createAction('ui/loading/start')
export const stopLoading = createAction('ui/loading/stop')
