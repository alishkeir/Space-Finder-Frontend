export interface User {
  userName: string;
  email: string;
}

export interface UserAttribute {
  Name: string;
  Value: string;
}

export interface SpaceInterface {
  spaceID: string;
  name: string;
  location: string;
  image?: string;
}
