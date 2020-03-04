const producers = [
  {
    userId: 1,
    beats: [
      {
        title: "abc",
        producerId: 1,
        file: "/somelocation",
        licenses: [
          { name: "Basic", text: "1000 streams", price: 29.99 },
          { name: "Premium", text: "10000 streams", price: 59.99 },
          { name: "Exclusive", text: "100000 streams", price: 499.99 }
        ]
      },
      {
        title: "def",
        producerId: 1,
        file: "/somelocation",
        licenses: [
          { name: "Premium", text: "10000 streams", price: 59.99 },
          { name: "Exclusive", text: "100000 streams", price: 499.99 }
        ]
      },
      {
        title: "ghi",
        producerId: 1,
        file: "/somelocation",
        licenses: [
          { name: "Basic", text: "1000 streams", price: 29.99 },
          { name: "Exclusive", text: "100000 streams", price: 499.99 }
        ]
      }
    ],
    licenses: [
      { name: "Basic", text: "1000 streams", price: 29.99 },
      { name: "Premium", text: "10000 streams", price: 59.99 },
      { name: "Exclusive", text: "100000 streams", price: 499.99 }
    ]
  },
  {
    userId: 2,
    beats: [
      {
        title: "zyx",
        producerId: 2,
        file: "/somelocation",
        licenses: [
          { name: "Cool", text: "999 streams", price: 39.99 },
          { name: "Super", text: "9999 streams", price: 69.99 }
        ]
      },
      {
        title: "wvu",
        producerId: 2,
        file: "/somelocation",
        licenses: [
          { name: "Cool", text: "999 streams", price: 39.99 },
          { name: "Duper", text: "9999 streams", price: 399.99 }
        ]
      }
    ],
    licenses: [
      { name: "Cool", text: "999 streams", price: 39.99 },
      { name: "Super", text: "9999 streams", price: 69.99 },
      { name: "Duper", text: "99999 streams", price: 399.99 }
    ]
  },
  {
    userId: 3,
    beats: [
      {
        title: "tsr",
        producerId: 3,
        file: "/somelocation",
        licenses: [
          { name: "Basic", text: "1000 streams", price: 29.99 },
          { name: "Premium", text: "10000 streams", price: 59.99 },
          { name: "Exclusive", text: "100000 streams", price: 499.99 }
        ]
      },
      {
        title: "qpo",
        producerId: 3,
        file: "/somelocation",
        licenses: [
          { name: "Premium", text: "10000 streams", price: 59.99 },
          { name: "Exclusive", text: "100000 streams", price: 499.99 }
        ]
      },
      {
        title: "nml",
        producerId: 3,
        file: "/somelocation",
        licenses: [
          { name: "Basic", text: "1000 streams", price: 29.99 },
          { name: "Exclusive", text: "100000 streams", price: 499.99 }
        ]
      }
    ],
    licenses: [
      { name: "Basic", text: "1000 streams", price: 29.99 },
      { name: "Premium", text: "10000 streams", price: 59.99 },
      { name: "Exclusive", text: "100000 streams", price: 499.99 }
    ]
  }
];

export default producers;
