import React, { useState } from 'react'
import { dailySalesData } from '../../components/dummy_data/dailySalesData';
import UserProfilePage from '../../components/UserProfilePage'

const profile = () => {
  const [DailySales, SetDailySales] = useState(dailySalesData);
  return (
    <UserProfilePage DailySales={DailySales}/>
  )
}

export default profile