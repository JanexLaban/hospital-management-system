import React from 'react';

const AppointmentList = ({ appointments }) => {
  if (appointments.length === 0) {
    return <p>No appointments scheduled yet.</p>;
  }

  return (
    <ul>
      {appointments.map((appointment) => (
        <li key={appointment.id}>
          <strong>Date:</strong> {appointment.date} - <strong>Time:</strong> {appointment.time}
        </li>
      ))}
    </ul>
  );
};

export default AppointmentList;
