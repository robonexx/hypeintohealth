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


export const dumbbellExercises: Exercise[] = [
  {
    id: 1,
    name: 'V-lift',
    description:
      'Hold the weights down by the thighs; keeping them vertical. Bring the arms up on a diagonal and out as wide and as high as the shoulders. Lower the weights down. Repeat 10 times.',
  },
  {
    id: 2,
    name: 'Marching in place with bicep curl',
    description:
      'This move combines a simple march in place with a bicep curl. Begin marching in place, making sure to bring your knee up so that your thigh is parallel with the ground. Once you establish a pace, begin to incorporate the bicep curl. When your right knee is in the air, perform a bicep curl with your left arm. Continue to alternate, keeping a comfortable pace. Perform 10 bicep curls with each arm.',
  },
  {
    id: 3,
    name: 'Curtsy lunge with dumbbell',
    description:
      'Standing with your feet shoulder-width apart, hold the dumbbells in front of your chest. Step your right leg behind you and to the left, crossing it behind your left leg, while lowering into a lunging position (as you would to perform a curtsy). Return that leg to a standing position before lunging with the left leg by crossing your left leg behind the right. Repeat 10 times on each side.',
  },
  {
    id: 4,
    name: 'Side extension with calf raise',
    description:
      'Hold a dumbbell in each hand. Stand with your feet as wide as your hips and reach the arms down along your sides. Pull the abs in. Then extend the arms straight out to the sides and up as high as the shoulders. Rock forward onto your tip toes and engage your calves. Then lower the arms down to the starting position and lower the heels. Repeat 10 times.',
  },
  {
    id: 5,
    name: 'Renegade rows',
    description:
      'Before you set up in a plank position, come on to all fours and place a dumbbell on either side of you, next to your shoulders. In tabletop position grasp a dumbbell in each hand. Then push up into a plank position or a modified plank position on your knees. With your back straight and core engaged, keep your hips and shoulders square to the floor as you drive your left elbow up toward the ceiling. Lower back to starting position. Alternate arms, performing 10 repetitions on each side.',
  },
  {
    id: 6,
    name: 'Squat with punches',
    description:
      'Hold a dumbbell in each hand, one in front of each shoulder. Bend down into a squat, squeezing your glutes and abs. As you return to a standing position, extend your right arm straight out in front of you in a punching motion. Bring your right arm back in and squat back down. This time as you return to standing, extend your left arm straight out in front of you in a punching motion. Repeat 10 times per arm.',
  },
  {
    id: 7,
    name: 'Standing overhead reach with side taps',
    description:
      'Standing with your feet shoulder-width apart, hold one dumbbell in each hand. Bend your elbows and lift the dumbbells into a goal-post position so that they are aligned with your shoulders. Breathe in and push the left arm up overhead as you tap the left foot out to the left, then come back to center. Repeat to the right. Alternate sides for 10 reaches per side.',
  },
  {
    id: 8,
    name: 'Russian twist',
    description:
      'The Russian twist is a great addition to any core workout. The twisting motion works your obliques, so you’re activating multiple core muscles at once, and adding a dumbbell takes it one step further. Sit on the ground with your knees bent and feet either hovering above the floor or resting on the ground. Tilt your upper body backward to a 45-degree angle (this will feel like you are at the top position of a situp). Hold one dumbbell with both hands, squeeze your shoulder blades together and pull your shoulders away from your ears. By lifting your feet off the ground, you’ll give your abs an extra challenge. (For a modification, keep the feet on the ground.) Keeping the dumbbell in front of your chest, twist your torso to the right reaching the dumbbell toward the floor. Then move back through center and twist to the left, tapping the dumbbell on the floor. Perform 10 times on each side.',
  },
  {
    id: 9,
    name: 'Overhead press',
    description:
      'To start, hold the dumbbells in a goal-post position with the weights in alignment with the ears. The upper arms should be parallel to the ground and the forearms perpendicular to the ground. Press the weights up overhead, in front of your forehead slightly so that you can see them with your eyes without tilting your head up. Then bring them back to the starting position. Repeat this 10 times.',
  },
  {
    id: 10,
    name: 'Tricep kickback',
    description:
      'Stand with your feet hip-distance apart, knees slightly bent. Hold one weight in each hand, and let your arms hang down at your sides. Hinge forward at the waist so that your chest is tilted at a 45-degree angle toward the ground. Perform a row by pulling your elbows up toward the sky, hugging them into your sides. Then, holding the elbows static, bring the weights up and back toward the back of the room into a tricep kickback, working the upper back and back of the arms. Come back to the row position and then repeat 10 times.',
  },
  {
    id: 11,
    name: 'Bent over row',
    description:
      'Stand with both feet on the floor, knees slightly bent and hold a dumbbell in each hand with your palms and fingers facing in. Hinge at the hips tilting the chest toward the ground at a 45-degree angle. Keep your chest open, looking forward, and roll your shoulders back. Pull both arms back as if you’re lifting a box from the floor. You’ve completed your first rep! Be sure to keep your elbows hugged in to your sides and your back straight. Repeat 10 times.',
  },
  {
    id: 12,
    name: 'Backward lunge',
    description:
      'Plant your feet on the ground and stand tall, keeping your back straight. Hold a dumbbell in each hand with your arms at your sides; they should remain here throughout the exercise. Step your right foot back and lower down until there is a 90-degree bend in your right knee. Your right thigh should be parallel to the ground. Step back to standing tall and then repeat with your left leg. Alternate, performing 10 repetitions on each side.',
  },
  {
    id: 13,
    name: 'Hammer curl',
    description:
      'Stand with your feet hips-width apart. Hold a dumbbell in each hand with your arms at your sides and your palms and fingers facing in toward your body. Making sure your palms remain facing in toward the body, lift both arms up toward your shoulders, keeping your elbows glued to your sides. Slowly lower both arms back down to your sides. Repeat 10 times.',
  },
  {
    id: 14,
    name: 'Overhead tricep extension',
    description:
      'Stand with your feet hips-width apart. Grab one dumbbell with each hand and extend both arms straight up overhead. Bring your hands together so that the weights are touching. Keeping your elbows facing forward and your biceps glued to your ears, lower the weight directly behind your head. Bring your arms back up to the extension over your head and repeat 10 times.',
  },
  {
    id: 15,
    name: 'Good mornings',
    description:
      'Standing with feet shoulder-width apart, grab a dumbbell in each hand and hold them on your shoulders with palms facing inward. Slightly bend your knees, keeping your back straight and core engaged as you hinge at the hips. Push your hips back until your torso is parallel to the floor. Return to the starting position, then repeat 10 times.',
  },
  {
    id: 16,
    name: 'Romanian deadlift',
    description:
      'Standing with feet hip-width apart, slightly bend your knees. Holding a dumbbell in each hand, push your hips back to hinge forward. Think of trying to push your butt against a wall behind you or shut a door with your butt. Maintain an engaged core. Press your feet into the floor as you allow the dumbbells to brush down your legs stopping around your shins. Each person is different, but the goal is to continue moving down your legs until your hips can’t push back any further and you feel a stretch in the hamstrings. Pause, then return back to the starting position by engaging the hamstrings. Repeat 10 times'
  },
  {
    id: 17,
    name: 'Pullovers',
    description:
      'This exercise only requires one dumbbell. Lie on your back on a flat surface and grab your dumbbell with both hands, think of cupping one end of the dumbbell for an optimal holding position. Bend your knees and place your feet flat on the floor. Raise the dumbbell up so it’s over your chest. Slowly let the dumbbell move behind your head, keeping your arms straight, until it creates a 45-degrees with the floor. Return back to the starting position. Repeat 10 times.',
  },
  {
    id: 18,
    name: 'Lateral Raise',
    description:
      'Stand with your feet hip-width apart and hold a dumbbell in each hand at your sides, palms facing inward. Keep your arms straight as you raise both dumbbells out to the sides until they reach shoulder height. Pause briefly at the top of the movement, then lower the dumbbells back down to your sides. Repeat this exercise 10 times.',
  },
  
];


