import React, { useState, useEffect } from "react";
import API from '../utils/API'

const ContentDisplay = () => {
  const [info, setInfo] = useState({})

  function loadContent() {
    switch (e) {
      case 'January 1950':
        API.getContentDates(1950, 1959)
          .then(res => setInfo(res.data))
          .catch(err => console.log(err))
    }
  }

}