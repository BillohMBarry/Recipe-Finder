 const data = [
  {
    id:1,
    name:"Binch (beans)", 
    preparationTime:"60 min", 
    description:"Black-eyed Beans, known as  \"binch\" in krio, are a staple in sierra Leone, providing a welcome change of pace from the myriad", 
    imageUrl:"https://eatyourworld.com/wp-content/uploads/2023/07/binch-bean-dishes-high-res-500x375.jpg", 
    alt:"bean-img", 
    category:"sauce",
    Ingredients:["black-eyed beans", "palm oil", "maggie", "pepper", "onions", "fish/meat"],
    preparationMethods : [{
      step: 1,
      method: " Rinse the beans thoroughly Soak and soak them in plenty of water overnight",
    },
    {
      step: 2,
      method: "Boil the beans and let it cook for an hour, Once the beans are almost cooked, and chopped tomatoes, salt, pepper, and chili powder toste"
    }]
  },
  {
    id:2,
    name:"Cassava-leaf",
    preparationTime:"40 min", 
    description:"Cassava-leaf, are stews made with various green leaves, and they're essential to the country's cuisine. Are sierra leoneans favourite",
    imageUrl:"https://eatyourworld.com/wp-content/uploads/2023/07/leaf-stews-plasas-high-res-500x375.jpg", 
    alt:"cassava-leaf-img",
    category:"sauce",
    Ingredients: ["grain cassava-leaf", "palm oil", "ogre", "maggie", "pepper","onions","grain/mixed groundnut"],
    preparationMethods : [{
      steps: 1,
      method: "Pick young, tender cassava leaves,Rinse leaves thoroughly under running water.",
    },
    {
      step: 2,
      method: "pound the leaves in a mortar and pestle or blender to break them down.",
    },
    {
      step: 3,
      method: "Then boil them in water for a significant period to remove cynanide.",
    },
    {
      step: 4,
      method: "followed by draining and adding desired ingredients with seasonings like onions, garlic, and palm oil.",
    },
   ]
  },
  {
    id:3,
    name:"Groundnut-soup", 
    preparationTime:"45 min",
    description:"Along with the various plasas, groundnut soup or stew is the “chop” you're most likely to encounter at a Sierra Leonean restaurant. Groundnuts, which many of us know as peanuts, are ground into a paste and seasoned with chopped onion, chilies (called “peppers” here)",
    imageUrl:"https://eatyourworld.com/wp-content/uploads/2023/07/Tribewanted-Groundnut-Stew-1024x768.jpg",
    alt:"groundnut-soup-img",
    category:"soup",
    Ingredients: ["grain or mixed groundnut", "pepper", "oil", "onions", "fish/meat"],
    preparationMethods : [{
      step: 1,
      method: "water is mixed with the groundnut paste, until a smooth consistency is achieved",
    },
    {
      step: 2,
      method: "Then onions, peppers and some tomatoes paste are added"
    },
    {
      step: 3,
      method: "The mixture is then cooked under low medium heat until the paste has thickened and the oil has risen to the top"
    }]
  },
  {
   id:4,
   name:"Cassava bread with gravy",
    preparationTime: "45 min",
    description:"This local specialty of Waterloo pairs small, tortilla-like discs of cassava bread with an oily fish sauce.",
    imageUrl:"https://eatyourworld.com/wp-content/uploads/2023/07/fried-cassava-bread-with-gravy-high-res-1024x768.jpg",
    alt:"cassava-bread-img",
    category:"snacks",
    Ingredients: ["grain cassava"],
    preparationMethods : [{
      step: 1,
      method: "Peel and grater the cassava into smaller pieces",
    },
    {
      step: 2,
      method: "steam the cassava in a pot or steamer until it's tender and soft",
    }]
  },


  {
    id:5,
    name:"\"Poyo\" palm Wine",
    description:"\"Poyo\", sierra leoneans favorite native adult beverage. Though it is traditionally not distilled or fermented or mixed with anything—it is meant to be drunk straight outta the tree, “from God to man,” as they say here—it is mildly alcoholic, probably about 1% alcohol.",
    imageUrl:"https://eatyourworld.com/wp-content/uploads/2023/07/John-Obey-poyo-1024x768.jpg",
    alt:"popyo-img",
    category:"drink" 
  },
  {
   id:6,
   name:"Fry-Fry",
    preparationTime:"45 min",
    description:"Fry fry is a catch all term for a variety of (usually fried) foods—plus spaghetti, randomly—that is served on the street with bread.",
    imageUrl:"https://eatyourworld.com/wp-content/uploads/2023/07/fry-fry-high-res-1024x768.jpg",
    alt:"fry-fry-img",
    category:"snacks" 
  },
  {
    id:7,
    name:"Pumpkin stew",
    preparationTime:"45 min",
    description:"Known as  \"Punky\"  in Krio, this delicious medley of squash, onion, chile peppers, and oil—usually seasoned with some help from Maggi stock cubes, unfortunately—offers a nice break, in both color and texture, from the leaf-based plasas. Like other Salone stews and soups, it often incorporates some fish or meat and is served over rice for lunch. Its one of our favorite chops.",
    imageUrl:"https://eatyourworld.com/wp-content/uploads/2023/07/Tribe-Wanted-Punky-1024x768.jpg",
    alt:"pumpkin-stew-img",
    category:"sauce",
    Ingredients: ["pepper","onions","palm oil"],
    preparationMethods: [{
      step: 1,
      method: "Heat palm oil in a pot, add chopped onions and saute until soft, and then add garlic and chili peppers",
    },
    {
      step: 2,
      method: "stir and diced tomatoes and cook until they break down",
    },
    {
      step: 3,
      method: "Add cubed pumpkin and other desired vegetables like sweet potato.",
    },
    {
      step: 4,
      method: "Season with maggi cubes, salt and additional spices to taste.",
    },
    {
      step: 5,
      method: "Cover and simmer until the pumpkin is tender.",
    }]
  },

  {
    id: 8,
    name: "Acheke",
    preparationTime: "",
    description: "Acheke is a Sierra Leonean dish made from fermented cassava that's been grated. It's similar to couscous in texture. Acheke is often eaten with fried fish, stew, or salad.",
    alt: "Acheke-img",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdF-feNs_mmbWc1mVQAE6IBjum-f_2aJvmGdWPGBg-rm-mLx61BMCvatQMocVmLJS5mVU",
    Ingredients: ["Fermented Cassava", "Fried Fish/chicken", "Ground spicy pepper", "oil", "salad", "chopped fresh tomato, cucumber", "Baked beans and onion", "Mayonnaise"],
    category: "sauce",
    preparationMethods: [{
      step: 1,
      method: "start with grate the cassava and allow it to ferment for a period of time.",
    },
    {
     step: 2,
     method: "steam the fermented cassava until it dries out and becomes granular texture.",
    },
    {
      step: 3,
      method: "Add the fried fish, ground pepper, oil, salad, chopped fresh tomato, cucumber, baked beans and onion, and mayonnaise to the grated cassava and mix well."
    }]
  },
  {
   id: 9,
   name: "Yebeh",
    preparationTime: "60min",
    description: "Yebeh is a stew made with starchy,  carbohydrate-rich vegetables like potatoes, plantain, cassava, yams and coco.These vegetables are boiled to soften them, and then they are cooked with hot pepppers and palm oil, another ingredient very frequently used in sierra leone cuisine.",
    alt:"Yebeh-img",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiraTLRQ99qPM60fvZ7CM0L39cK3cMfSX_g&s",
    category: "sauce",
    Ingredients: ["peppers", "palm oil", "fish", "cassava","tomatoes"],
    preparationMethods: [{
     step: 1,
     method: "Peel and cut the cassava into bite-sized picess.",
    },
    {
     step: 2,
      method: "Boil the cassava in salted water until soft.",
    },
    {
      step: 3,
      method: "Blend onions, garlic, and peppers, tomatoes and spices(like turmeric ginger, chili powder) into a paste.",
    }]
  },
  {
    id: 10,
    name: "Okra soup",
    preparationTime: "45 min",
    description: "Okra Soup is a dish primarily made with okra ",
    alt: "okra-soupImg",
    imageUrl: "https://pbs.twimg.com/media/EOlZHluXkAE_3x4.jpg",
    Ingredients: ["Okras", "palm oil", "fish/meat", "maggie", "salt", "pepper", "onions"],
    category: "sauce",
    preparationMethods: [{
      step: 1,
      method: "Wash and trim the okra, cutting them into small pieces, chop onions, garlic, tomatoes, peppers",
    },
    {
      step: 2,
      method: "Add the palm oil, pepper, and fish/meat to the okra and cook for 10 minutes",       
    },
    {
      step: 3,
      method: "pour in enough water to cover the ingredients and, add the chopped okra, and bring to a boil",
    },
    {
      step: 4,
      method: "Reduce heat to low, simmer until the okra is tender and the soup has thickened, about 15 minutes, add salt and other seasonings as needed",
    }]
  },
  {
    id: 11,
    name: "Potato leaf",
    preparationTime: "1hr 30min",
    description: "Potato leaf typically refers to the of a sweet potato plant, often called \"patehteh\"in krio, which are large, heart-shaped, deep green leaves with prominent veins, growing  on long stems, and commonly used in cooking due to their nutritious value.",
    alt: "potato leaf-img",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglTkIbRcB8d9-2n3BjJRuIJwLjPpRuPOd4g&s",
    category: "sauce",
    Ingredients: ["Palm oil","maggie seasoning","salt", "Pack of Ogiri", "peppers"],
    preparationMethods: [{
      step: 1,
      method: "Thoroughly wash and choppe the potato leaves into small pieces and leave it in a colander to drain any excess water."
    },
    {
      step: 2,
      method: "Boil the potatoes in a pot of water until they are soft with your ingredients"
    },
    {
      step: 3,
      method: "Add the palm oil, maggie seasoning, salt, fish/meat and pack of \"Ogiri\"(\"fermented locust bean\") for flavor,to the potatoes"
    },
    {
      step: 4,
      method: "Stir the mixture until the ogiri is dissolved and the potatoes are well coated"
    },
    {
      step: 5,
      method: "Serve the potato leaf stew hot and enjoy!"
    }]
  }
]
export default data;