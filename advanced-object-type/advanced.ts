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

type FriendList = 'friendList';

type Friend = APIResponse['user'][FriendList];

type Two = Friend['friends'][0];

type ResponseKeys = keyof APIResponse['user'];

// Mapping Types

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Day = Weekday | 'Sat' | 'Sun';

type Animals = {
  Dog: 'puppy';
  Horse: 'pony'
  Cat: 'kitten';
};

type Numbers = [1, 2, 3, 4, 5];


// types out key and value of object
type RecordType = Record<number, string>

// same as RecordType type, but in mapped form
type MappedAPIReponseType = {
  [Key in number]: string
}

// makes every field value optional
type PartialType = Partial<APIResponse>

// makes every field value required
type RequiredType = Required<APIResponse>

// makes every field value readonly
type ReadOnlyType = Readonly<APIResponse>

// pick out a key
type PickType = Pick<APIResponse['user'], 'userId'>

type FriendListType = APIResponse['user']['friendList']
