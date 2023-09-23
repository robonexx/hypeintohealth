export type Exercise = {
  id: number;
  name: string;
  description: string;
};

export const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Bodyweight Squats',
    description:
      "Stand with feet shoulder-width apart and squat down as if you're sitting in a chair. Keep your back straight and chest up.",
  },
  {
    id: 2,
    name: 'Push-Ups',
    description:
      'Place your hands shoulder-width apart on the floor and push your body up and down. Modify with knee push-ups if needed.',
  },
  {
    id: 3,
    name: 'Plank',
    description:
      'Get into a push-up position, but with your weight on your forearms. Keep your body straight, engage your core, and hold for as long as you can.',
  },
  {
    id: 4,
    name: 'Lunges',
    description:
      'Step forward with one leg and lower your body until both knees are bent at a 90-degree angle. Repeat with the other leg.',
  },
  {
    id: 5,
    name: 'Jumping Jacks',
    description:
      'Stand with your feet together and arms at your sides. Jump while spreading your legs and raising your arms overhead, then return to the starting position.',
  },
  {
    id: 6,
    name: 'Burpees',
    description:
      'Begin in a standing position, then squat down, kick your feet back into a push-up position, return your feet to the squat position, and jump up explosively.',
  },
  {
    id: 7,
    name: 'Mountain Climbers',
    description:
      'Start in a push-up position and bring one knee toward your chest while keeping the other leg extended. Alternate your knees quickly.',
  },
  {
    id: 8,
    name: 'High Knees',
    description:
      'Stand in place and jog while lifting your knees as high as possible with each step.',
  },
  {
    id: 9,
    name: 'Bicycle Crunches',
    description:
      'Lie on your back, bring one knee toward your chest while simultaneously twisting your torso to bring the opposite elbow toward that knee. Alternate sides.',
  },
  {
    id: 10,
    name: 'Tricep Dips',
    description:
      'Use a sturdy chair or a low table. Sit on the edge with your hands gripping the edge, fingers pointing forward. Slide your bottom off the edge and lower your body by bending your elbows.',
  },
  {
    id: 11,
    name: 'Leg Raises',
    description:
      'Lie on your back with your hands under your hips for support. Lift your legs off the ground, keeping them straight, and then lower them back down without touching the floor.',
  },
  {
    id: 12,
    name: 'Russian Twists',
    description:
      'Sit on the floor with your knees bent and feet lifted. Lean back slightly, balance on your sit bones, and twist your torso from side to side while holding your hands together or holding a small weight.',
  },
  {
    id: 13,
    name: 'Wall Sits',
    description:
      'Find a wall and slide your back down until your thighs are parallel to the ground. Hold this position for as long as you can.',
  },
  {
    id: 14,
    name: 'Push-Up Variations',
    description:
      'Aside from standard push-ups, try incline push-ups (with hands on an elevated surface) and decline push-ups (with feet on an elevated surface).',
  },
  {
    id: 15,
    name: 'Calf Raises',
    description:
      'Stand on a flat surface and rise up onto your toes, then lower your heels back down.',
  },
  {
    id: 16,
    name: 'Single-Leg Glute Bridges',
    description:
      'Lie on your back with one foot on the floor and the other leg extended. Lift your hips off the ground using the foot on the floor, then lower and repeat.',
  },
  {
    id: 17,
    name: 'Stair Climbing',
    description:
      'If you have access to stairs, climbing up and down is an excellent workout for your legs and cardiovascular system.',
  },
];

export const intermediateExercises: Exercise[] = [
  {
    id: 1,
    name: 'Single-leg bridge',
    description: 'Any time you take an exercise to a single leg, you’ll automatically make it harder. Here, follow the steps for a bridge, but lift one foot off the ground while keeping your leg bent for an intermediate challenge. Complete the same number of reps on each side.',
  },
  {
    id: 2,
    name: 'Squat',
    description: 'Taking out the chair allows you to master the form of a regular bodyweight squat. The same motion is still applicable here, though. Imagine you’re sitting down in a chair by hinging at the hips and pushing your bottom back.',
  },
  {
    id: 3,
    name: 'Pushup',
    description: 'A standard pushup is the more challenging version of a knee pushup. Assume a high plank position and complete the pushup in the same way, allowing your elbows to flare out at a 45-degree angle.',
  },
  {
    id: 4,
    name: 'Walking lunge',
    description: 'By traveling instead of staying stationary in a lunge, you’ll add aspects of stability, mobility, and balance. Start with your feet together and step forward, lunging with your right leg. Stand up, then repeat with your left leg.',
  },
  {
    id: 5,
    name: 'Pike pushups',
    description: 'Adding a pushup to your pike will target those shoulders even more. The movement here is all in the arms, so keep the rest of your body stable. To perform, assume a pike position and bend at the elbows — allowing them to flare out to the sides — directing the top of your head toward the ground.',
  },
  {
    id: 6,
    name: 'Get-up squat',
    description: 'Get-up squats are great for time under tension, or keeping your legs and glutes under continuous work, which adds to the burn. Directions: Drop down into a squat position. You won’t stand at all during this move. Drop your knees down to the ground one at a time so you’re kneeling. Step your feet back to the ground one at a time, maintaining that squat position. Repeat as quickly as you can while maintaining good form.',
  },
  {
    id: 7,
    name: 'Superman',
    description: 'Work your lower back — and the whole backside of your body — with a superman. Go as slowly as you can here to really reap the benefits of this move. Directions: Lie on your stomach, arms and legs extended. Keeping your neck neutral, recruit your core and the back of your body to simultaneously raise your arms and legs up and off the ground as high as they’ll go. Pause for 1 second at the top, and slowly lower back to the start position.',
  },
  {
    id: 8,
    name: 'Plank with alternating leg lift',
    description: 'Adding a leg lift to a regular plank makes you unstable, requiring your core to work in overdrive and your three limbs to support more weight. Lift one leg up, hold for 5 seconds, and return it to the ground. Repeat with the other leg.',
  },
  {
    id: 9,
    name: 'Kneeling side plank with hip abduction',
    description: 'Holding your body up with your knee and your extended arm during a hip abduction makes this move an upper body exercise, too. Plus, it recruits the core even more. To perform, assume a kneeling side plank, then lift the free leg up, pause, and lower it back down. Repeat on both sides.',
  },
  {
    id: 10,
    name: 'Dead bug',
    description: 'Activate those deep core muscles with a dead bug. Directions: Start lying on your back, legs at tabletop, and arms extended in front of you. In a coordinated motion, extend your left leg and drop your right arm above your head, taking care that your lower back stays flat to the ground. Bring your leg back to tabletop and your arm in front of you, then repeat with the opposite arm and leg.',
  },
];


export const advancedExercises: Exercise[] = [
  {
    id: 1,
    name: 'Bridge with leg extended',
    description: 'Lifting the foot then extending the leg straight out will make a single-leg bridge even more difficult. Keep your foot flexed throughout the movement. Complete the same number of reps on both legs.',
  },
  {
    id: 2,
    name: 'Overhead squat',
    description: 'Extending your arms overhead will challenge your mobility and range of motion in your upper body, as well as give your lower body the benefits of a squat. To perform, complete a squat with your arms extended overhead throughout.',
  },
  {
    id: 3,
    name: 'One-legged pushup',
    description: 'Lifting one leg will again put more weight into your other three limbs, thus creating more of a challenge. To get it done, assume a pushup position and lift one leg off the ground, then complete the pushup.',
  },
  {
    id: 4,
    name: 'Jumping lunges',
    description: 'Jumping exercises — often known as plyometrics — require you to give it your max effort for a short interval of time. Because of the power and strength they require, you’ll feel the burn quickly. Add a jump to your lunge, really exploding up in each rep, to challenge yourself.',
  },
  {
    id: 5,
    name: 'Elevated pike pushups',
    description: 'Elevating your feet in a pike pushup will make this version the hardest. Put your feet on an elevated surface, like a bench or a step, and complete an elevated pike pushup. The higher the surface, the more challenging it will be.',
  },
  {
    id: 6,
    name: 'Get-up squat with jump',
    description: 'Instead of stepping your feet back up from kneeling, jump them. You’ll need lots of power and strength for this move.',
  },
  {
    id: 7,
    name: 'Advanced Bird Dog',
    description: 'Get into a high plank position, then complete a Bird Dog, lifting one arm and the opposite leg simultaneously. As with all advanced exercises, maintaining a straight spine is key here.',
  },
  {
    id: 8,
    name: 'One-leg or one-arm plank',
    description: 'Lifting one arm or one leg — and holding it there — will take a plank up a notch. Hold for as many seconds as you can, then switch sides. One leg will be more challenging than one arm, so choose the right version for you.',
  },
  {
    id: 9,
    name: 'Side plank with hip abduction',
    description: 'Plank off your foot instead of your knee for a full-body challenge in this hip abduction. To perform, assume a side plank, then perform a leg lift. Repeat on both sides.',
  },
  {
    id: 10,
    name: 'Hollow hold to jackknife',
    description: 'This move requires you to contract your abs throughout. Directions: Get into a hollow hold position: Lie on your back and extend your arms above your head. Engage your core, lift your legs and upper body off the floor, and hold them there. Add in a jackknife: Crunch up, bringing your arms overhead toward your toes and your legs toward the center of your body. Slowly release back to the jackknife position and repeat.',
  },
];

