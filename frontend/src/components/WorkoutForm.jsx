import React, { useState } from 'react';
export default function WorkoutForm({ api, onCreated }) {
  const [form, setForm] = useState({ type:'Run', duration:30, calories:0, date:'' });
  const change = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async e => {
    e.preventDefault();
    const res = await fetch(`${api}/workouts`,{
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    });
    onCreated(await res.json());
  };
  return (
    <form onSubmit={submit}>
      <input name="date" type="date" value={form.date} onChange={change} required />
      <input name="type" value={form.type} onChange={change} />
      <input name="duration" type="number" value={form.duration} onChange={change} />
      <input name="calories" type="number" value={form.calories} onChange={change} />
      <button type="submit">Add Workout</button>
    </form>
  );
}