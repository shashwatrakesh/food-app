import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Component</h1>
      <h2>This is Namaste React Web Series</h2>
      {/* <User name="Shashwat Rakesh (function)" /> */}
      <UserClass name="Shashwat Rakesh (class)" location="Tucson" />
    </div>
  );
};

export default About;
