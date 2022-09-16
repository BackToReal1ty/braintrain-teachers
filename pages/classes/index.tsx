import Classcard from "../../components/Classcard";
import { Input } from "antd";

export default function Index() {
  return (
    <div>
      <div className="md:grid md:grid-cols-1 md:gap-4">
        <Input placeholder="Find Class" />
        <Classcard name="2B" studentName="Lynus"></Classcard>
        <Classcard name="4E" studentName="Logan"></Classcard>
        <Classcard name="4E" studentName="Lexi"></Classcard>
        <Classcard name="4E" studentName="Lewis"></Classcard>
      </div>
    </div>
  );
}
