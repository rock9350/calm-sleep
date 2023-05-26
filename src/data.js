import one from "./image/1.jpg"
import two from "./image/2.jpg"
import three from "./image/3.jpg"
import four from "./image/4.jpg"
import five from "./image/5.jpg"



const items = [
    {
      image: one,
      title: 'Item 1',
      unique_plays: 50,
      total_plays: 100,
      completion_rate:  Math.floor((75 / 100) * 100),
    },
    {
      image: two,
      title: 'Item 2',
      unique_plays: 75,
      total_plays: 150,
      completion_rate:  Math.floor( (100 / 150) * 100),
    },
    {
      image: three,
      title: 'Item 3',
      unique_plays: 30,
      total_plays: 60,
      completion_rate:  Math.floor((30 / 60) * 100),
    },
    {
        image: four,
        title: 'Item 4',
        unique_plays: 30,
        total_plays: 60,
        completion_rate:  Math.floor((20 / 60) * 100),
      },
      {
        image: five,
        title: 'Item 5',
        unique_plays: 30,
        total_plays: 60,
        completion_rate: Math.floor((50 / 60) * 100) ,
      },
  ];

  export default items;