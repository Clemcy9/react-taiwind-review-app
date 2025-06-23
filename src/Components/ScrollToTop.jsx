import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
    const {path} = useLocation();

    useEffect (() => {
        window.scrollTo(0,0) //scroll to top on every route
    }, [path]);
  return null;
  
}

export default ScrollToTop