type StartStackParamList = {
    Intro: undefined;
    Login: undefined;
    Signup: undefined;
    Main: undefined; 

    WriteContent: { imageUri: string };
    SelectPhoto: undefined;

    ProfileCamera: undefined;
  };
   
type TabParamList = {
    Home: undefined;
    User: undefined;
    Setting: undefined;
  };


type HomeStackParamList = {
  Posts: undefined;
  Search: undefined;
  OtherProfile: { userId: number };
}

type UserStackParamList = {
  Profile: { nickname?: string };
  Edit: undefined;
  Write: undefined;
  Relations : { listMode: string };
  FavoriteList: { isFavoriteList: boolean }
  Camera: undefined;
  DetailPost: { post: any }
}
