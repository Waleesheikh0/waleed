
import React, { useState } from 'react';
import './App.css';

function App() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', status: '' });

  const addLead = () => {
    if (form.name && form.email) {
      setLeads([...leads, { ...form, id: Date.now() }]);
      setForm({ name: '', email: '', status: '' });
    }
  };

  return (
    <div className='container'>
      <h1>Waleed's CRM</h1>
      <div className='form'>
        <input placeholder='Client Name' value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder='Email or LinkedIn' value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder='Status' value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} />
        <button onClick={addLead}>Add Lead</button>
      </div>
      <div className='leads'>
        {leads.map(lead => (
          <div key={lead.id} className='lead'>
            <h3>{lead.name}</h3>
            <p>{lead.email}</p>
            <span>{lead.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
