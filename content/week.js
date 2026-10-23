/* EDIT HERE: the two setups people can choose between */
var TIERS = {
  floor:  {label:'Bare floor', kit:'Dumbbells, a band, a pull-up bar, a floor'},
  garage: {label:'Garage',     kit:'Barbell, plates, bench, kettlebells'}
};
/* EDIT HERE: this week's workouts.
   Each day has either:
   - floor:[...] and garage:[...]  (a different list for each setup), or
   - moves:[...]                   (one list shared by both setups)  */
var WEEK_LABEL = 'Week 43 · Oct 19 – 25';
var WEEK = [
  {day:'Mon', name:'Push and carry', focus:'Upper push', mins:60,
   note:'Heavy press first while you are fresh, then a carry finisher to burn out the grip and core.',
   garage:[
    ['Barbell overhead press','Standing, ribs down','5 × 5'],
    ['Floor press','Barbell or dumbbells','4 × 8'],
    ['Single-arm kettlebell row','Brace on the bench','3 × 10/side'],
    ['Farmer carry','Walk the driveway. Heavy.','4 × 40 yd']],
   floor:[
    ['Dumbbell overhead press','Standing, ribs down','4 × 8'],
    ['Push-up','Add a band across the back when it gets easy','4 × AMRAP'],
    ['Single-arm dumbbell row','Hand on a chair or bench','3 × 10/side'],
    ['Suitcase carry','Dumbbell in one hand, walk the driveway','4 × 40 yd']]},
  {day:'Tue', name:'Engine 20', focus:'Conditioning', mins:20,
   note:'Short and mean. Hold a pace you can repeat for the full 20 minutes.',
   garage:[
    ['Kettlebell swing','Hips snap, arms hang','15 reps'],
    ['Goblet squat','Kettlebell at the chest','10 reps'],
    ['Burpee','It is a burpee.','5 reps'],
    ['Repeat as many rounds as possible','Log your round count','20 min']],
   floor:[
    ['Dumbbell swing','Both hands on one dumbbell','15 reps'],
    ['Dumbbell goblet squat','Dumbbell at the chest','10 reps'],
    ['Burpee','It is a burpee.','5 reps'],
    ['Repeat as many rounds as possible','Log your round count','20 min']]},
  {day:'Wed', name:'Rest and mobilize', focus:'Recovery', mins:15,
   note:'Walk with the family, then 15 minutes on hips, thoracic spine and shoulders.',
   moves:[
    ['90/90 hip switches','Slow, controlled','2 × 8/side'],
    ['Thoracic rotations','Open book on the floor','2 × 10/side'],
    ['Dead hang','Doorway bar or rack','3 × 30 sec']]},
  {day:'Thu', name:'Squat and pull', focus:'Lower and back', mins:35,
   note:'The heaviest day of the week. Leave one rep in reserve on every set.',
   garage:[
    ['Back squat','Below parallel','5 × 5'],
    ['Romanian deadlift','Barbell, flat back','4 × 8'],
    ['Pull-up or inverted row','Add weight when you hit 4 × 8','4 × AMRAP'],
    ['Plank, weighted','Plate on the back','3 × 45 sec']],
   floor:[
    ['Dumbbell goblet squat','Slow lower, 3 seconds down','4 × 10'],
    ['Dumbbell Romanian deadlift','Flat back, soft knees','4 × 10'],
    ['Pull-up or band row','Doorway bar, or band around a sturdy post','4 × AMRAP'],
    ['Plank','Backpack on the back to add load','3 × 45 sec']]},
  {day:'Fri', name:'Finisher', focus:'Optional', mins:15,
   note:'Skip it if the week got away from you. Do it if you have gas left.',
   moves:[
    ['Band pull-apart','Light and crisp','3 × 20'],
    ['Dumbbell thruster','Backpack or sandbag works too','3 × 12'],
    ['Sit-up','Anchor feet under the couch','3 × 15']]}
];
