import { configureStore } from '@reduxjs/toolkit'
import ItemsSlice from '../components/Items/ItemsSlice'
import AppSlice from '../components/App/AppSlice'
export default configureStore({
  reducer: {
    app: AppSlice,
    items: ItemsSlice
  },
})