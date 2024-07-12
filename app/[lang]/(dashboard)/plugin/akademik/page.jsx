import ProfileProgress from "./overview/profile-progress";
import UserInfo from "./overview/user-info";
import About from "./overview/about";
import { Card, CardTitle } from "@/components/ui/card";
const Overview = () => {
  return (
    <div className="pt-6 grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <ProfileProgress />
        <UserInfo />
      </div>
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <About />

        <Card className="p-6 space-y-3">
          <CardTitle>Demo</CardTitle>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8D6b3McyhhU?si=zGOlY311c21dR70j"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
