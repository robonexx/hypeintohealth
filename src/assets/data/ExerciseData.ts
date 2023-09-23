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

export default exercises;
