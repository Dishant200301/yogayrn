export interface Studio {
  id: string;
  city: string;
  state: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

export const studios: Studio[] = [
  {
    id: "ny",
    city: "New York",
    state: "NY",
    description:
      "Our New York studio offers a serene escape in the heart of the city. Join us in our urban oasis.",
    address: "8186 West Rocky River Street Buffalo, NY 14221",
    phone: "(345) 352 - 7416",
    email: "newyork@yogayrn.com",
    image: "/images/studios-1.jpg",
  },
  {
    id: "sf",
    city: "San Francisco",
    state: "CA",
    description:
      "Find tranquility by the bay at our San Francisco studio, with natural elements and a welcoming atmosphere for all.",
    address: "58 Middle San Francisco, California (CA), 94124",
    phone: "(347) 248 - 1840",
    email: "sanfrancisco@yogayrn.com",
    image: "/images/studios-2.jpg",
  },
];
