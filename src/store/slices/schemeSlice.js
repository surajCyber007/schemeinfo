import { createSlice, nanoid } from "@reduxjs/toolkit";

const schemeSlice = createSlice({
  name: "scheme",
  initialState: [
    {
      title: "Scheme 1",
      type: "Education",
      isSaved: false,
      isLiked: false,
      description: "This is the description which can be used for the Scheme 1",
      id: nanoid(),
      details: [
        "The sun rose slowly over the horizon, casting a warm glow across the landscape. Birds chirped in the trees, welcoming the new day. People began to stir, going about their morning routines. It was a peaceful scene, full of promise and possibility.",

        "In the bustling city streets, cars honked and pedestrians hurried along. The air was thick with the scent of coffee and pastries from nearby cafes. Businessmen and women rushed to their offices, briefcases in hand. There was an energy in the air, a sense of urgency and purpose.",

        "High above, clouds drifted lazily across the sky. The sun beat down, warming the earth below. Children played in the park, laughing and shouting with joy. Dogs chased after balls, tails wagging happily. It was a picture-perfect day, filled with happiness and laughter.",
      ],
    },
    {
      title: "Scheme 2",
      type: "Business",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "This is the description which can be used for the Scheme 2",
      details: [
        "In the quiet of the countryside, fields stretched out as far as the eye could see. Cows grazed lazily, content in their surroundings. Farmers worked the land, planting seeds and tending to crops. The smell of fresh earth hung in the air, a reminder of the cycle of life.",

        "As night fell, stars twinkled in the sky, casting a soft glow over the world. Crickets chirped in the darkness, serenading the night. A lone owl hooted in the distance, its call echoing through the trees. It was a magical time, when anything seemed possible.",

        "On the shores of the ocean, waves crashed against the rocks, sending spray into the air. Seagulls soared overhead, their cries echoing across the water. The smell of salt filled the air, invigorating and refreshing. It was a place of beauty and tranquility.",
      ],
    },
    {
      title: "Scheme 3",
      type: "Business",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "This is the description which can be used for the Scheme 3",
      details: [
        "In the quiet of the countryside, fields stretched out as far as the eye could see. Cows grazed lazily, content in their surroundings. Farmers worked the land, planting seeds and tending to crops. The smell of fresh earth hung in the air, a reminder of the cycle of life.",

        "As night fell, stars twinkled in the sky, casting a soft glow over the world. Crickets chirped in the darkness, serenading the night. A lone owl hooted in the distance, its call echoing through the trees. It was a magical time, when anything seemed possible.",

        "On the shores of the ocean, waves crashed against the rocks, sending spray into the air. Seagulls soared overhead, their cries echoing across the water. The smell of salt filled the air, invigorating and refreshing. It was a place of beauty and tranquility.",
      ],
    },
    {
      title: "Scheme 4",
      type: "Education",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "This is the description which can be used for the Scheme 4",
      details: [
        "Deep in the heart of the forest, trees towered overhead, their branches reaching towards the sky. Sunlight filtered through the leaves, dappling the forest floor with patches of light. Birds flitted from branch to branch, singing sweetly. It was a world unto itself, untouched by time.",

        "In the desert, sand dunes stretched out endlessly, shifting and changing with the wind. The sun beat down mercilessly, its rays baking the earth below. Cacti stood tall, their spines gleaming in the sunlight. It was a harsh and unforgiving landscape, yet full of beauty and wonder.",

        "Far away in the mountains, snow-capped peaks rose majestically into the sky. Rivers flowed down the valleys, their waters crystal clear and icy cold. Wildlife roamed freely, undisturbed by human presence. It was a rugged and untamed wilderness, breathtaking in its grandeur.",
      ],
    },
    {
      title: "Scheme 5",
      type: "Housing",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "This is the description which can be used for the Scheme 5",
      details: [
        "In the quiet of the countryside, fields stretched out as far as the eye could see. Cows grazed lazily, content in their surroundings. Farmers worked the land, planting seeds and tending to crops. The smell of fresh earth hung in the air, a reminder of the cycle of life.",

        "As night fell, stars twinkled in the sky, casting a soft glow over the world. Crickets chirped in the darkness, serenading the night. A lone owl hooted in the distance, its call echoing through the trees. It was a magical time, when anything seemed possible.",

        "On the shores of the ocean, waves crashed against the rocks, sending spray into the air. Seagulls soared overhead, their cries echoing across the water. The smell of salt filled the air, invigorating and refreshing. It was a place of beauty and tranquility.",
      ],
    },
    {
      title: "Scheme 6",
      type: "Banking",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "This is the description which can be used for the Scheme 6",
      details: [
        "In the quiet of the countryside, fields stretched out as far as the eye could see. Cows grazed lazily, content in their surroundings. Farmers worked the land, planting seeds and tending to crops. The smell of fresh earth hung in the air, a reminder of the cycle of life.",

        "As night fell, stars twinkled in the sky, casting a soft glow over the world. Crickets chirped in the darkness, serenading the night. A lone owl hooted in the distance, its call echoing through the trees. It was a magical time, when anything seemed possible.",

        "On the shores of the ocean, waves crashed against the rocks, sending spray into the air. Seagulls soared overhead, their cries echoing across the water. The smell of salt filled the air, invigorating and refreshing. It was a place of beauty and tranquility.",
      ],
    },
    {
      title: "Scheme 7",
      type: "Housing",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "This is the description which can be used for the Scheme 7",
      details: [
        "Deep in the heart of the forest, trees towered overhead, their branches reaching towards the sky. Sunlight filtered through the leaves, dappling the forest floor with patches of light. Birds flitted from branch to branch, singing sweetly. It was a world unto itself, untouched by time.",

        "In the desert, sand dunes stretched out endlessly, shifting and changing with the wind. The sun beat down mercilessly, its rays baking the earth below. Cacti stood tall, their spines gleaming in the sunlight. It was a harsh and unforgiving landscape, yet full of beauty and wonder.",

        "Far away in the mountains, snow-capped peaks rose majestically into the sky. Rivers flowed down the valleys, their waters crystal clear and icy cold. Wildlife roamed freely, undisturbed by human presence. It was a rugged and untamed wilderness, breathtaking in its grandeur.",
      ],
    },
    {
      title: "Scheme 8",
      type: "Banking",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "This is the description which can be used for the Scheme 8",
    },
    {
      title: "Scheme 9",
      type: "Banking",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "This is the description which can be used for the Scheme 9",
      details: [
        "Deep in the heart of the forest, trees towered overhead, their branches reaching towards the sky. Sunlight filtered through the leaves, dappling the forest floor with patches of light. Birds flitted from branch to branch, singing sweetly. It was a world unto itself, untouched by time.",

        "In the desert, sand dunes stretched out endlessly, shifting and changing with the wind. The sun beat down mercilessly, its rays baking the earth below. Cacti stood tall, their spines gleaming in the sunlight. It was a harsh and unforgiving landscape, yet full of beauty and wonder.",

        "Far away in the mountains, snow-capped peaks rose majestically into the sky. Rivers flowed down the valleys, their waters crystal clear and icy cold. Wildlife roamed freely, undisturbed by human presence. It was a rugged and untamed wilderness, breathtaking in its grandeur.",
      ],
    },
    {
      title: "Scheme 10",
      type: "Education",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description:
        "This is the description which can be used for the Scheme 10",
      details: [
        "In the quiet of the countryside, fields stretched out as far as the eye could see. Cows grazed lazily, content in their surroundings. Farmers worked the land, planting seeds and tending to crops. The smell of fresh earth hung in the air, a reminder of the cycle of life.",

        "As night fell, stars twinkled in the sky, casting a soft glow over the world. Crickets chirped in the darkness, serenading the night. A lone owl hooted in the distance, its call echoing through the trees. It was a magical time, when anything seemed possible.",

        "On the shores of the ocean, waves crashed against the rocks, sending spray into the air. Seagulls soared overhead, their cries echoing across the water. The smell of salt filled the air, invigorating and refreshing. It was a place of beauty and tranquility.",
      ],
    },
  ],
  reducers: {
    changeIsSaved(state, action) {
      const { id } = action.payload.scheme;
      const schemeToUpdate = state.find((scheme) => scheme.id === id);
      if (schemeToUpdate) {
        schemeToUpdate.isSaved = !schemeToUpdate.isSaved;
      }
    },
    changeIsLiked(state, action) {
      const { id } = action.payload.scheme;
      const schemeToUpdate = state.find((scheme) => scheme.id === id);

      if (schemeToUpdate) {
        schemeToUpdate.isLiked = !schemeToUpdate.isLiked;
      }
    },
  },
});

export const { changeIsSaved, changeIsLiked } = schemeSlice.actions;
export const schemeReducer = schemeSlice.reducer;
