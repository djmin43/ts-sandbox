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

type FriendList = "friendList";

type Friend = APIResponse["user"][FriendList];

type Two = Friend["friends"][0];

type ResponseKeys = keyof APIResponse["user"];

// Mapping Types

type Account = {
  id: number;
  isEmployee: boolean;
  notes: string[];
};

type OptionalAccount = {
  [K in keyof Account]: Account[K];
};

type AccountKey = [keyof Account];
