import { useRouter } from "next/router";
import { Text, Avatar } from "@chakra-ui/react";
import { FlagOutlined, FlagFilled, DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Bar } from "@ant-design/plots";

export default function Index() {
  const router = useRouter();
  const { id } = router.query;

  // loop to hardcode students
  const renderStudents = (studentImg, studentName, maxStudents) => {
    let students = [];
    for (let i = 1; i < maxStudents; i++) {
      // random flag
      if (i == 5 || i == 28) {
        students.push(
          <div className="pb-4 text-center">
            <Avatar
              size="lg"
              name="Dan Abrahmov"
              src={studentImg ? studentImg : "https://i.imgur.com/Y0hoNEA.jpeg"}
            />
            <FlagFilled
              className="pl-2 text-xl cursor-pointer hover:opacity-50"
              style={{ color: "red" }}
            />
            <Text fontSize="lg " className="pr-6">
              {studentName ? studentName : "Chad"}
            </Text>
          </div>
        );
      }

      // random flag
      if (i == 8 || i == 12) {
        students.push(
          <div className="pb-4 text-center">
            <Avatar
              size="lg"
              name="Dan Abrahmov"
              src={studentImg ? studentImg : "https://i.imgur.com/Y0hoNEA.jpeg"}
            />
            <FlagFilled
              className="pl-2 text-xl cursor-pointer hover:opacity-50"
              style={{ color: "orange" }}
            />
            <Text fontSize="lg " className="pr-6">
              {studentName ? studentName : "Chad"}
            </Text>
          </div>
        );
      }

      students.push(
        <div className="pb-4 text-center">
          <Avatar
            size="lg"
            name="Dan Abrahmov"
            src={studentImg ? studentImg : "https://i.imgur.com/Y0hoNEA.jpeg"}
          />
          <FlagOutlined className="pl-2 text-xl opacity-50 cursor-pointer hover:opacity-100 " />
          <Text fontSize="lg " className="pr-6">
            {studentName ? studentName : "Chad"}
          </Text>
        </div>
      );
    }
    return students;
  };

  // bar chart
  const data = [
    {
      year: "Visual",
      value: 3,
    },
    {
      year: "Auditory",
      value: 2,
    },
    {
      year: "Reading and Writing",
      value: 20,
    },
    {
      year: "Kinesthetic",
      value: 5,
    },
  ];
  const config = {
    data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: {
      position: "top-left",
    },
  };

  return (
    <div>
      <div>
        <Text fontSize="6xl" className="pt-4 pb-4">
          Class {id}
        </Text>

        <div className="flex pb-4">
          <div className="pr-4">
            <Menu>
              <MenuButton as={Button} rightIcon={<DownOutlined />}>
                Filter by
              </MenuButton>
              <MenuList>
                <MenuItem>All Flagged</MenuItem>
                <MenuItem>Flagged by System</MenuItem>
                <MenuItem>Flagged by Me</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="pr-4 ">
            <Button colorScheme="gray">Create Lesson Plan</Button>
          </div>
          <div className="pr-4">
            <Button colorScheme="gray">Calendar</Button>
          </div>
          <div className="pr-4">
            <Button colorScheme="gray">Create Class Reminder</Button>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <Text
          fontSize="2xl"
          className="pt-2 pb-4 pl-4 font-semibold text-white rounded-t-3xl bg-braintrain_green "
        >
          Class {id}
        </Text>

        <div className="pt-2 bg-braintrain_gray rounded-b-3xl">
          <div className="grid grid-cols-6 ">
            {renderStudents(
              "https://img.huffingtonpost.com/asset/6149502121000022010291fb.jpeg?cache=Wns7qssgZc&ops=1778_1000",
              "joseph",
              "33"
            )}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Text
          fontSize="2xl"
          className="pt-2 pb-4 pl-4 font-semibold text-white rounded-t-3xl bg-braintrain_green "
        >
          Learning Styles Analysis
        </Text>

        <div className="grid grid-cols-5 pt-2 bg-braintrain_gray rounded-b-3xl ">
          <div className="col-span-4">
            <Bar {...config} className="px-4 pb-4" />
          </div>
          <div className="px-2 pt-6">
            <Text fontSize="xl">
              Majority of the students in this class learn best through
              <span className="font-semibold text-braintrain_green">
                &nbsp;Reading and Writing!&nbsp;
              </span>
              It’s best to include more ... when teaching this class!
            </Text>
            <Button colorScheme={"green"} className="mt-2">
              Create Lesson Plan
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="pt-4">
          <Text
            fontSize="2xl"
            className="pt-2 pb-4 pl-4 font-semibold text-white rounded-t-3xl bg-braintrain_green "
          >
            Upcoming
          </Text>

          <div className="grid grid-cols-5 pt-2 bg-braintrain_gray rounded-b-3xl"></div>
        </div>

        <div className="pt-4">
          <Text
            fontSize="2xl"
            className="pt-2 pb-4 pl-4 font-semibold text-white rounded-t-3xl bg-braintrain_green "
          >
            A Thing
          </Text>
        </div>
      </div>
    </div>
  );
}
