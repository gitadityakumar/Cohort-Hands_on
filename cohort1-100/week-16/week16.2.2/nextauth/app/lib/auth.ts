
import CredentialsProvider from 'next-auth/providers/credentials';
export const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'Email', type: 'text', placeholder: 'Email' },
            password: { label: 'Password', type: 'Password', placeholder: 'Password' },
          },
          async authorize(credentials: any) {
            console.log(credentials);
  
  //do validation from db and then return something 
  // here i am allowing everyone to login by returing hardcoded values
            
              
              return {
                  id: "1",
                  name:"Aditya kumar",
                  email:"aditya@gmail.com"
              };
          },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    //callbacks for extra info(persist more data) or blocking some explicit user
    callbacks: {
      // jwt: async ({ user, token }: any) => {
      //   if (user) {
      //       token.uid = user.id;
      //   }
      //   return token;
      // },
    session: ({ session, token, user }: any) => {
      console.log(session);
        if (session.user && session) {
            session.user.id = token.sub
        }
        return session
    }
  },
  
  }