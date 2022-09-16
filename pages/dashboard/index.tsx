import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { Timeline } from "antd";

export default function Index() {
  return (
    <div>
      <Text fontSize={"5xl"}>Welcome Back, Sarah</Text>

      <div className="py-4">
        <Button>Customise</Button>
        <Button className="mx-4">Create Lesson Plan</Button>
        <Button>Calendar</Button>
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

      <div className="pt-4">
        <Text
          fontSize="2xl"
          className="pt-2 pb-4 pl-4 font-semibold text-white rounded-t-3xl bg-braintrain_green "
        >
          Your Classes
        </Text>

        <div className="grid grid-cols-3 px-4 pt-8 pb-10 bg-braintrain_gray rounded-b-3xl">
          <div className="h-20 mx-20 text-center rounded-xl bg-braintrain_green">
            <Text fontSize={"3xl"} className="pt-4 font-semibold text-white">
              3A
            </Text>
          </div>
          <div className="h-20 mx-20 text-center rounded-xl bg-braintrain_green">
            <Text fontSize={"3xl"} className="pt-4 font-semibold text-white">
              3B
            </Text>
          </div>
          <div className="h-20 mx-20 text-center rounded-xl bg-braintrain_green">
            <Text fontSize={"3xl"} className="pt-4 font-semibold text-white">
              3C
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
