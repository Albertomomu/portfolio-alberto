import {Tabs, Tab} from "@nextui-org/react"; 
import { WorkIcon } from "../icons/WorkIcon";

export default function App() {

  return (
    <div className="flex flex-wrap gap-4">
        <Tabs key="full" radius="full" size="lg" aria-label="Tabs radius">
          <Tab href="/work" key="work" title={
            <div className="flex items-center space-x-2">
              <WorkIcon/>
              <span>Work</span>
            </div>
          }/>
          <Tab href="/aboutMe" key="aboutMe" title="About me"/>
          <Tab href="/contact" key="contact" title="Contact"/>
        </Tabs>
    </div>
  );
}
