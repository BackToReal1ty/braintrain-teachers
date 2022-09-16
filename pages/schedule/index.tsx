import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { Timeline } from "antd";

export default function Index() {
  return (
    <div>
      <Text fontSize={"5xl"}>Schedule</Text>

      <div className="py-4">
        <Button>Customise</Button>
        <Button className="ml-4">Create Lesson Plan</Button>
      </div>

      <div className="pt-4">
        <Text
          fontSize="2xl"
          className="pt-2 pb-4 pl-4 font-semibold text-white rounded-t-3xl bg-braintrain_green "
        >
          Your upcoming lessons for today:
        </Text>

        <div className="grid grid-cols-5 px-4 pt-8 bg-braintrain_gray rounded-b-3xl">
          <Timeline>
            <Timeline.Item>3A Chemistry</Timeline.Item>
            <Timeline.Item>3C Chemistry </Timeline.Item>
            <Timeline.Item>3B Chemistry </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
