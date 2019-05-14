import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Logo from 'components/Logo/Logo'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.module.scss'
import Backdrop from 'components/UI/Backdrop/Backdrop'

const sideDrawer = ({open, closed}) => {
  const attachedClasses = [classes.SideDrawer, classes.Close];
  if(open) {
    attachedClasses[1] = classes.Open;
  }
  return (
    <Fragment>
      <Backdrop show={open} clicked={closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  )
}

sideDrawer.propTypes = {

}

export default sideDrawer