const router = require('express').Router();
const db = require('./db');
router.get('/health', (req,res)=>res.json({status:'ok'}));
router.get('/workouts', async (req,res)=>{
  const { rows } = await db.query('SELECT * FROM workouts ORDER BY date DESC');
  res.json(rows);
});
router.post('/workouts', async (req,res)=>{
  const { type, duration, calories, date } = req.body;
  const q='INSERT INTO workouts(type,duration,calories,date) VALUES($1,$2,$3,$4) RETURNING *';
  const { rows } = await db.query(q,[type,duration,calories,date]);
  res.status(201).json(rows[0]);
});
module.exports = router;