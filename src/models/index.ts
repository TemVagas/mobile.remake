export interface User {
  id_user: number | string;
  userName: string;
  fullName: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface PostDetails {
  avatarPost: string;
  description: string;
  value: string;
  labels: string[];
  images: string[];
  is_house: "vacancy" | "immobile";
}

export default interface PostTypes {
  id_post: number | string;
  user: User;
  details: PostDetails;
}
