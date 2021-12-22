type APIResponse = {
  user: {
    userId: string;
    friendList: {
      const: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  };
};

type Friend = APIResponse["user"]["friendList"];

type Two = Friend["friends"][0];
