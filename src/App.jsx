import {Profile} from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

export default function App () {
  return (
    <div>
    <Profile username={user.username} 
    tag={user.tag} 
    location={user.location} 
    avatar={user.avatar} 
    profileFollowers={user.stats.followers} 
    profileViews={user.stats.views} 
    profileLikes={user.stats.likes}/>
    </div>
  );
};
