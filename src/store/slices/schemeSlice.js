import { createSlice, nanoid } from "@reduxjs/toolkit";

const schemeSlice = createSlice({
  name: "scheme",
  initialState: [
    {
      title: "Scheme 1",
      type: "Education",
      isSaved: false,
      isLiked: false,
      description: "aerat consequatur quos et dolor ad? Harum alias iure suscipit minus esse a odio",
      id: nanoid(),
      details: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus placeat voluptas, accusamus veritatis neque quidem quo rerum unde eius, dolor dolorem pariatur mollitia facilis tempora in veniam totam molestiae repudiandae. At cum fuga, nam perspiciatis odit illo est accusantium adipisci esse iure reiciendis minus voluptatum, natus excepturi! Commodi quod asperiores eius, blanditiis, id sapiente.",

        "llitia facilis tempora in veniam totam molestiae repudiandae. At cum fuga, nam perspiciatis odit illo est accusantium adipisci esse iure reiciendis minus voluptatum, natus excepturi! Commodi quod asperiores eius, blanditiis, id sapiente, culpa temporibus optio earum porro sunt! Soluta, repellendus. Quisquam velit ducimus, est repudiandae nulla.",

        "um aliquam natus repellat ipsum cupiditate ratione voluptates. Consequatur debitis quibusdam voluptatem enim suscipit temporibus repudiandae minima nesciunt officiis voluptates eius veniam id soluta placeat, ex nobis reprehenderit natus, obcaecati voluptatibus architecto maxime! Nisi suscipit, laboriosam exercitationem neque veritatis porro omnis et praesentium facere ut modi",
      ],
    },
    {
      title: "Scheme 2",
      type: "Business",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "um aliquam natus repellat ipsum cupiditate ratione voluptates.",
      details: [
        "In the quiet of the countryside, fields stretched out as far as the eye could see. Cows grazed lazily, content in their surroundings. Farmers worked the land, planting seeds and tending to crops. The smell of fresh earth hung in the air, a reminder of the cycle of life.",

        "tatibus architecto maxime! Nisi suscipit, laboriosam exercitationem neque veritatis porro omnis et praesentium facere ut modi? Repellat dolores temporibus maiores perferendis porro incidunt qu.",

        "s temporibus maiores perferendis porro incidunt quas voluptatem possimus, ratione inventore culpa doloremque amet corrupti totam impedit nesciunt iusto illo nulla esse. In ipsa voluptatem, qui perferendis expedita sed iste autem nostrum pariatur hic eveniet eum asperiores maxime harum reiciendis necessitatibus suscipit quos nisi delectus .",
      ],
    },
    {
      title: "Scheme 3",
      type: "Business",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "Consequatur debitis quibusdam voluptatem enim suscipit temporibus repudiandae minima",
      details: [
        "um aliquam natus repellat ipsum cupiditate ratione voluptates. Consequatur debitis quibusdam voluptatem enim suscipit temporibus repudiandae minima nesciunt officiis voluptates eius veniam id soluta placeat, ex nobis reprehenderit natus, obcaecati voluptatibus architecto maxime! Nisi suscipit, laboriosam exercitationem neque veritatis porro omnis et praesentium facere ut modi.",

        "usantium quos officiis, omnis reiciendis. Esse, sit nobis doloribus veniam aspernatur quibusdam sunt exercitationem voluptatem dolores aliquid? Nobis, ex assumenda sunt iure harum magnam iste delectus alias optio vitae non est aperiam dolorum hic. Ei.",

        "ae non est aperiam dolorum hic. Eius sit cupiditate dolorem distinctio tempore nam corporis doloribus, suscipit ex quas deleniti ducimus autem laborum quae dolorum hic quasi eos sint pariatur illu.",
      ],
    },
    {
      title: "Scheme 4",
      type: "Education",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "nesciunt officiis voluptates eius veniam id soluta placeat",
      details: [
        "uae illo minus quidem modi perspiciatis veniam dolorum minima pariatur saepe amet nam alias quis, excepturi incidunt id officiis necessitatibus impedit dolores, nemo illum voluptatem labore! Magni .",

        "illum voluptatem labore! Magni voluptate quisquam corporis iure corrupti perferendis dignissimos velit cumque praesentium, inventore fuga voluptatibus quasi omnis nesciunt pariatur. Explicabo vel autem voluptatem officia. Officia expedita similique quam iste commodi doloremque incidunt ea earum ratione beatae vel r.",

        "enim nesciunt quia porro quisquam eaque neque, asperiores maxime! Id beatae consectetur minus officiis voluptatem iure obcaecati inventore expedita? Fuga cumque ipsa tempora, cupiditate at placeat ad suscipit voluptate minima nesciunt veritatis? Laboriosam explicabo, et temporibus autem doloremque harum vel vero corrupti ducimus. Vitae, illo voluptates labore aperiam quo ipsa dolorum ist.",
      ],
    },
    {
      title: "Scheme 5",
      type: "Housing",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "Eum dignissimos quas nulla quia laboriosam quo quasi consectetur ad necessitatibus",
      details: [
        "lestias! Eum dignissimos quas nulla quia laboriosam quo quasi consectetur ad necessitatibus, tempore corrupti, deserunt sapiente soluta officiis assumenda commodi nihil doloribus repellendus corporis. Iusto dignissimos asperiores fugiat amet repellendus eligendi sapiente .",

        "necessitatibus, numquam odit corporis deserunt, nesciunt aspernatur accusantium quaerat consequatur quos et dolor ad? Harum alias iure suscipit minus esse a odio repellat quaerat vero excepturi. Qui adipisci maxime nesciunt, quae ipsa quo excepturi vel obcaecati, a eos placeat voluptates magical time, when anything seemed possible.",

        "tio laudantium ex hic. Dignissimos saepe, ullam maiores nisi sit blanditiis consectetur? Dignissimos similique animi minima perspiciatis numquam id officiis quo. Cum exercitationem, corrupti excepturi rerum accusamus laborum illum esse, nihil nulla ducimus minima. Odio modi iusto aperiam harum, dolores eius ipsam dicta dolore ipsa expedita dignissimos cupiditate con.",
      ],
    },
    {
      title: "Scheme 6",
      type: "Banking",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "ex nobis reprehenderit natus, obcaecati voluptatibus d",
      details: [
        "atus in laborum unde tempora! Totam cupiditate quod sequi accusantium qui esse amet vero veniam optio nobis atque quasi, ipsam eveniet provident velit numquam corrupti doloribus nesciunt quisquam minus neque, possimus sed! Quod, in! Minus, quas dolore ducimus officia hic voluptates deserunt quos expedita ullam quidem dicta in similique consequuntur adipisci molestias ani.",

        "estias animi laboriosam voluptate dignissimos laudantium libero earum ipsa doloremque harum culpa. Atque sit itaque voluptatum ea iure dolore, temporibus dolor, voluptate illum repellat fugit magnam modi ad consectetur et vitae doloribus quisquam minus. Repellendus iusto quidem dolore harum illum, rerum, .",

        "ellendus iusto quidem dolore harum illum, rerum, saepe necessitatibus neque, accusantium provident eum reiciendis velit ullam. Aliquam aperiam quaerat modi eligendi maiores temporibus officia voluptatem neque vel quo voluptates molestiae dolore ducimus atque unde deleniti, hic natus nobis, voluptatibus quidem dolorum quasi! Sapiente om.",
      ],
    },
    {
      title: "Scheme 7",
      type: "Housing",
      isSaved: false,
      isLiked: false,
      id: nanoid(),
      description: "architecto maxime! Nisi suscipit, laboriosam exercitationem ",
      details: [
        "cusandae praesentium molestias minus dignissimos, itaque incidunt animi, laboriosam ex placeat et illum sit, nulla dolores illo. Sed recusandae aspernatur exercitationem animi velit sequi ipsa mollitia magnam, officiis amet molestiae eos. Molestiae qua.",

        "d in repellendus libero aut officiis, esse consequuntur dolor, deleniti laboriosam. Temporibus numquam, culpa consectetur corrupti cumque reprehenderit, alias non illo enim suscipit quo provident cupiditate libero sapiente quasi nihil quas quia iure veniam dolore hic harum commodi distinctio! Est inventore .",

        "tate ipsam, rem delectus commodi quos doloribus quidem sunt adipisci labore earum esse perferendis consequatur facere autem beatae voluptates minima quisquam perspiciatis tempore, excepturi qui! Itaque nostrum minus dicta deleniti. Recusandae expedita cumque doloremque nobis veniam.",
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
      description: "neque veritatis porro omnis et praesentium facere ut mo",
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
      console.log("action.payload", action.payload);
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
