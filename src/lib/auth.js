// import { betterAuth } from "better-auth";
// import { jwt } from "better-auth/plugins";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db('sportnest');

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     client
//   }),
//   emailAndPassword: {
//     enabled: true,
//   },
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENTID,
//       clientSecret: process.env.GOOGLE_SECRET
//     },
//   },
//   session: {
//     cookieCache: {
//       enabled: true,
//       strategy: 'jwt',
//       //max 1200 days
//       maxAge: 1200 * 24 * 60 * 60
//     }
//   },
// //   plugins: [
// //     jwt()
// //   ]
// // });

// plugins: [
//         jwt(), 
//     ]
// })






import { betterAuth } from "better-auth";

import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);

const db = client.db("sportnest");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_SECRET
    },
  },
session: {
  cookieCache: {
    enabled: true,
    strategy: 'jwt',
    //max 7 days
    maxAge: 365 * 24 * 60 * 60
  }
},

plugins: [
  jwt()
]
});