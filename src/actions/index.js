export const setTodo = todo => ({type: "SET_TODO", todo });
export const UpdateTodo = todo => ({type: "UPDATE_TODO", todo });
export const showall = selectedtab => ({type: "SHOW_ALL", selectedtab });
export const showfilter = selectedtab => ({type: "FILTER_SHOW", selectedtab });
export const ToggleEdit = todo => ({type: "TOGGLE_EDIT", todo });
export const EditTitle = todo => ({type: "EDIT_TODO", todo });
export const EditDoneTitle = todo => ({type: "EDIT_DONE_TODO", todo });
export const DeleteTodo = todo => ({type:"DELETE_TODO",todo});
export const ToggleAll = todo => ({type:"TOGGLE_ALL",todo});
export const clearcompleted = todo => ({type:"CLEAR_COMPLETED",todo});