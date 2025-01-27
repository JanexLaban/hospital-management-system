import React, { useState } from 'react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'admin', role: 'Administrator' },
    { id: 2, username: 'doctor1', role: 'Doctor' },
    { id: 3, username: 'nurse1', role: 'Nurse' },
  ]);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <section>
        <h2>User Management</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Username</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Role</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{user.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{user.username}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>{user.role}</td>
                <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                  <button
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
