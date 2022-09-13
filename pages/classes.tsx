import Head from "next/head";
import Classcard from "../components/Classcard";
import { Pie, measureTextWidth } from "@ant-design/plots";

export default function Home() {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <Classcard name="2B" studentName="lynus"></Classcard>
        <Classcard
          name="3C"
          studentName="lizzie"
          studentImg="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Queen_Elizabeth_II_in_March_2015.jpg/1200px-Queen_Elizabeth_II_in_March_2015.jpg"
        ></Classcard>
        <Classcard name="1C"></Classcard>
        <Classcard name="4E"></Classcard>
      </div>
    </div>
  );
}
