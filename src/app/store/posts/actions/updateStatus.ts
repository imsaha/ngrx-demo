import Post from "src/app/models/post.model"
import { createAction, props } from '@ngrx/store';

type UpdateStatusParam = {
  isSuccess: boolean
}
const updateStatus = createAction('posts/save/status', props<UpdateStatusParam>());
export default updateStatus;
