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

type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";

type Animals = {
  Dog: "puppy";
  Horse: "pony"
  Cat: "kitten";
};

type Numbers = [1, 2, 3, 4, 5];
