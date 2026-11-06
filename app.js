/* EDIT HERE: the setups people can choose between.
   With one setup the toggle is hidden. To bring the toggle back, add a second entry, e.g.
   floor: {label:'Bare floor', kit:'Dumbbells, a band, a pull-up bar, a floor'} */
var TIERS = {
  garage: {label:'Garage', kit:'Dumbbells, kettlebells, barbell, a pull-up bar, a floor'}
};
/* EDIT HERE: this week's workouts.
   Each day has either:
   - floor:[...] and garage:[...]  (a different list for each setup), or
   - moves:[...]                   (one list shared by both setups)
   Each move is ['Exercise', 'Instructions', 'Sets x Reps'].
   Spell check before committing. */
var WEEK_LABEL = 'Week 46 · Nov 9 – 15';
var WEEK = [
  {day:'Mon', name:'Push and Plank', focus:'Upper push', mins:35,
   note:'Press, plank, and chest work, then a three-minute burpee finisher. Controlled reps.',
   moves:[
    ['L-sit dumbbell press','Sit on the floor. Back straight. Slow and controlled press.','3 × 12'],
    ['Mountain climbers + plank','Every climber = 1 rep. Plank for 15 seconds before the next set.','3 × 30'],
    ['Dumbbell chest fly','Lie on the floor or a bench. Open the chest slowly. Power back to the start and squeeze the chest for 3 seconds.','3 × 10'],
    ['Close-grip push','Close-grip bench press or diamond push-ups.','3 × 10'],
    ['Finisher: SEAL burpees','Substitute regular burpees if needed. For time.','3 min']]},
  {day:'Tue', name:'Earthquake', focus:'Heavy pull', mins:40,
   note:'Heavy pulling and grip work, finished with a hard conditioning blast.',
   moves:[
    ['Kettlebell swings','Use a heavier bell or 2 bells if needed. 5 rounds.','30 sec work / 30 sec rest'],
    ['Boot worm + pull-up','1 boot worm followed by 1 pull-up.','5 × 10'],
    ['Rows','Barbell, dumbbells, or kettlebells. Moderate weight.','5 × 8'],
    ['Heavy farmer carry','Switch to a heavy suitcase carry if you are limited on space.','60 ft / 30 sec rest'],
    ['Finisher: Battle ropes or ring row jumps','Ring row jumps: start squatted, then row or pull up into an explosive jump. Repeat. Go hard.','3 min']]},
  {day:'Wed', name:'Walk and Roll', focus:'Recover', mins:30,
   note:'Sleep in a little longer, then be intentional about getting more steps through the day. An evening walk, stretching, or foam rolling all count.',
   moves:[
    ['Steps','Spread them through the day. An evening walk counts.','All day'],
    ['Warm up and stretch','Easy and unhurried.','10 min'],
    ['Foam roll','Slow passes. Pause on tight spots.','10 min']]},
  {day:'Thu', name:'Full Metal Legs', focus:'Legs', mins:40,
   note:'Leg day. Slow, heavy, and honest.',
   moves:[
    ['Kettlebell walking lunges','Moderate weight. Alternating steps. 1 step = 1 rep.','3 × 20'],
    ['Goblet squats','Slow down. Slow up. Do not lock out. Keep moving.','3 × 10'],
    ['Squats','Barbell. Light to medium. 3 seconds down. Pause, then slowly return to the start.','3 × 10'],
    ['Bulgarian split squats','Slow and heavy.','5 × 5'],
    ['Finisher: Burpees','Rest is authorized in the plank position.','5 min']]},
  {day:'Fri', name:'Chalk Outline', focus:'Full body', mins:35,
   note:'Full body to close the week. Finish with easy Zone 2 work.',
   moves:[
    ['Kettlebell swings','Moderate weight.','3 × 25'],
    ['Dumbbell lying chest press','On your back on the floor. Press the weight up from the chest. Keep elbows close to your body.','3 × 25'],
    ['Lying leg lifts','Switch to leg tucks if needed.','5 × 20'],
    ['Thrusters + boot worms + plank','5 reps each + 20-second plank.','5 rounds'],
    ['Finisher: Zone 2 cardio','Your choice of cardio.','5 min']]}
];
