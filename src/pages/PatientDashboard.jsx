import React, { useState } from 'react';
import AppointmentList from '../components/AppointmentList';
import NotificationList from '../components/NotificationList';

const PatientDashboard = () => {
  // Temporary sample data for appointments and notifications
  const [appointments, setAppointments] = useState([
    { id: 1, date: '2025-01-28', time: '10:00 AM' },
    { id: 2, date: '2025-01-29', time: '2:00 PM' },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Your appointment has been confirmed.', date: '2025-01-27' },
    { id: 2, message: 'Your appointment has been rescheduled.', date: '2025-01-26' },
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Patient Dashboard</h1>
      <p>Here, you can manage your appointments and view notifications.</p>

      <section>
        <h2>Upcoming Appointments</h2>
        <AppointmentList appointments={appointments} />
      </section>

      <section>
        <h2>Notifications</h2>
        <NotificationList notifications={notifications} />
      </section>
    </div>
  );
};

export default PatientDashboard;
