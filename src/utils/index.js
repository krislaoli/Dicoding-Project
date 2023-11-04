const getInitialData = () => ([
  // {
  //   id: 1,
  //   title: "Coding",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima cumque error odio accusamus mollitia et, ea quod perferendis porro!",
  //   createdAt: '2023-10-04T04:27:34.572Z',
  //   archived: false,
  // },
  // {
  //   id: 2,
  //   title: "React js",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima cumque error odio accusamus mollitia et, ea quod perferendis porro!",
  //   createdAt: '2023-10-04T04:27:34.572Z',
  //   archived: false,
  // },
  // {
  //   id: 3,
  //   title: "Belajar React",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima cumque error odio accusamus mollitia et, ea quod perferendis porro!",
  //   createdAt: '2023-10-04T04:27:34.572Z',
  //   archived: false,
  // },
  // {
  //   id: 4,
  //   title: "Fullstack",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima cumque error odio accusamus mollitia et, ea quod perferendis porro!",
  //   createdAt: '2023-10-04T04:27:34.572Z',
  //   archived: false,
  // },
  // {
  //   id: 5,
  //   title: "Front end",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima cumque error odio accusamus mollitia et, ea quod perferendis porro!",
  //   createdAt: '2023-10-04T04:27:34.572Z',
  //   archived: false,
  // },
  // {
  //   id: 6,
  //   title: "Back end",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima cumque error odio accusamus mollitia et, ea quod perferendis porro!",
  //   createdAt: '2023-10-04T04:27:34.572Z',
  //   archived: false,
  // },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
