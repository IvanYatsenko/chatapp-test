import { CONSTANTS } from '../../../Constants/Constants'
import classes from './TodoTitle.module.css'

export const TodoTitle = () => {
  return (
    <>
      <h1 className={classes.titleApp}>{CONSTANTS.TITLE_APP}</h1>
    </>
  )
}
