import React, { useEffect, useState } from 'react';
import WorkoutForm from './WorkoutForm';
const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
export default function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch(`${API}/workouts`).then(r=>r.json()).then(setWorkouts);
  }, []);
  const onCreated = w => setWorkouts([w, ...workouts]);
  return (
    <div>
      <WorkoutForm api={API} onCreated={onCreated} />
      <ul>{workouts.map(w=> <li key={w.id}>{w.date} - {w.type} - {w.duration}min</li>)}</ul>
    </div>
  );
}