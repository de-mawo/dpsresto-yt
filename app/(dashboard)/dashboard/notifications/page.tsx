import Container from '@/app/components/Common/Container'
import React from 'react'
import NotificationsList from './NotificationsList'


const AdminNotifications = () => {
  return (
    <Container>
      <div className="  rounded-lg shadow-2xl p-6 my-12 max-h-[80vh] overflow-y-auto bg-white">

      <NotificationsList/>
      </div>
    </Container>
  )
}

export default AdminNotifications