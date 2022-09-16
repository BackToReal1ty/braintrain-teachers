import { useRouter } from "next/router";
import { Text, Avatar } from "@chakra-ui/react";
import {
  FlagOutlined,
  FlagFilled,
  DownOutlined,
  ExperimentOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  CheckOutlined,
  TrophyFilled,
  FireFilled,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Bar } from "@ant-design/plots";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { DatePicker, Modal, InputNumber, Slider } from "antd";
import Link from "next/link";

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
          <Link href={"/404"}>
            <div className="pb-4 text-center cursor-pointer">
              <Avatar
                size="lg"
                name="Dan Abrahmov"
                src={
                  studentImg ? studentImg : "https://i.imgur.com/Y0hoNEA.jpeg"
                }
              />
              <FlagFilled
                className="pl-2 text-xl cursor-pointer hover:opacity-50"
                style={{ color: "red" }}
              />
              <Text fontSize="lg " className="pr-6">
                {studentName ? studentName : "Chad"}
              </Text>
            </div>
          </Link>
        );
      }

      // random flag
      if (i == 8 || i == 12) {
        students.push(
          <Link href={"/404"}>
            <div className="pb-4 text-center cursor-pointer">
              <Avatar
                size="lg"
                name="Dan Abrahmov"
                src={
                  studentImg ? studentImg : "https://i.imgur.com/Y0hoNEA.jpeg"
                }
              />
              <FlagFilled
                className="pl-2 text-xl cursor-pointer hover:opacity-50"
                style={{ color: "orange" }}
              />
              <Text fontSize="lg " className="pr-6">
                {studentName ? studentName : "Chad"}
              </Text>
            </div>
          </Link>
        );
      }

      students.push(
        <Link href={"/404"}>
          <div className="pb-4 text-center cursor-pointer">
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
        </Link>
      );
    }
    return students;
  };

  // bar chart
  const data = [
    {
      type: "Visual",
      students: 3,
    },
    {
      type: "Auditory",
      students: 2,
    },
    {
      type: "Reading and Writing",
      students: 20,
    },
    {
      type: "Kinesthetic",
      students: 5,
    },
  ];
  const config = {
    data,
    xField: "students",
    yField: "type",
    seriesField: "type",
    color: ({ type }) => {
      return type === "Reading and Writing" ? "#4D806D" : "#B3C9C1";
    },
  };

  //modal
  enum PAGE_VIEW {
    first = 0,
    second = 1,
    third = 2,
  }
  const [view, setView] = useState<number>(PAGE_VIEW.first);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOkFirst = () => {
    setView(PAGE_VIEW.second);
  };

  const handleBackSecond = () => {
    setView(PAGE_VIEW.first);
  };

  const handleOkSecond = () => {
    setView(PAGE_VIEW.third);
  };

  const handleBackThird = () => {
    setView(PAGE_VIEW.second);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const renderModal = () => {
    switch (view) {
      case PAGE_VIEW.first:
        return (
          <Modal
            title={`Plan lesson for class ${id}`}
            open={isModalOpen}
            onOk={handleOkFirst}
            onCancel={handleCancel}
            footer={[
              <Button key="next" onClick={handleOkFirst}>
                <ArrowRightOutlined />
              </Button>,
            ]}
          >
            <div>
              <Text fontSize={"md"} className="pb-2 font-semibold">
                Select Date:
              </Text>
              <DatePicker
                onChange={onDateChange}
                onOk={onOk}
                className="w-80"
              />
            </div>

            <div>
              <Text fontSize={"md"} className="pt-4 pb-2 font-semibold">
                Lesson Duration:
              </Text>
              <div className="grid grid-cols-2">
                <Slider
                  min={1}
                  max={180}
                  onChange={onDurationChange}
                  value={typeof durationValue === "number" ? durationValue : 0}
                />

                <InputNumber
                  min={1}
                  max={180}
                  value={durationValue}
                  onChange={onDurationChange}
                  className="mx-4"
                />
              </div>
            </div>

            <div>
              <Text fontSize={"md"} className="pt-4 pb-2 font-semibold">
                Number of Breaks:
              </Text>
              <div className="grid grid-cols-2">
                <Slider
                  min={1}
                  max={10}
                  onChange={onBreaksChange}
                  value={typeof breaksValue === "number" ? breaksValue : 0}
                />

                <InputNumber
                  min={1}
                  max={10}
                  value={breaksValue}
                  onChange={onBreaksChange}
                  className="mx-4 "
                />
              </div>
            </div>
          </Modal>
        );
      case PAGE_VIEW.second:
        return (
          <Modal
            title={`Plan lesson for class ${id}`}
            open={isModalOpen}
            onOk={handleOkSecond}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleBackThird}>
                <ArrowLeftOutlined />
              </Button>,
              <Button key="next" onClick={handleOkSecond} className="ml-4">
                <ArrowRightOutlined />
              </Button>,
            ]}
            width={1000}
          >
            <div>
              <Text fontSize={"md"} className="px-24 pb-4">
                <span className="font-semibold ">
                  Recommended learning tools based on this class learning
                  styles.&nbsp;
                </span>
                Most students in this class learn best through
                <span className="font-semibold text-braintrain_green">
                  &nbsp;Reading and Writing.&nbsp;
                </span>
              </Text>
            </div>

            <div className="grid grid-cols-4">
              <div className="h-20 mx-2 text-center rounded-md bg-braintrain_lightgreen">
                <Text fontSize={"md"} className="pt-14 text-braintrain_green">
                  Learning Tool 1
                </Text>
              </div>
              <div className="h-20 mx-2 text-center rounded-md bg-braintrain_lightgreen">
                <Text fontSize={"md"} className="pt-14 text-braintrain_green">
                  Learning Tool 2
                </Text>
              </div>
              <div className="h-20 mx-2 text-center rounded-md bg-braintrain_green">
                <CheckOutlined
                  style={{ color: "#E6EDEA", fontSize: "25px" }}
                  className="pt-4"
                />
                <Text
                  fontSize={"md"}
                  className="pt-4 text-braintrain_lightgreen"
                >
                  Learning Tool 3
                </Text>
              </div>

              <div className="h-20 mx-2 text-center rounded-md bg-braintrain_lightgreen">
                <Text fontSize={"md"} className="pt-14 text-braintrain_green">
                  Learning Tool 4
                </Text>
              </div>
            </div>

            <div className="grid grid-cols-4 pt-4">
              <div className="h-20 mx-2 text-center rounded-md bg-braintrain_lightgreen">
                <Text fontSize={"md"} className="pt-14 text-braintrain_green">
                  Learning Tool 5
                </Text>
              </div>
              <div className="h-20 mx-2 text-center rounded-md bg-braintrain_green">
                <CheckOutlined
                  style={{ color: "#E6EDEA", fontSize: "25px" }}
                  className="pt-4"
                />
                <Text
                  fontSize={"md"}
                  className="pt-4 text-braintrain_lightgreen"
                >
                  Learning Tool 6
                </Text>
              </div>
              <div className="h-20 mx-2 text-center rounded-md bg-braintrain_lightgreen">
                <Text fontSize={"md"} className="pt-14 text-braintrain_green">
                  Learning Tool 7
                </Text>
              </div>
              <div className="h-20 mx-2 text-center rounded-md bg-braintrain_lightgreen">
                <Text fontSize={"md"} className="pt-14 text-braintrain_green">
                  Learning Tool 8
                </Text>
              </div>
            </div>
            <Text
              fontSize={"md"}
              className="px-24 pt-4 pb-2 font-semibold text-center"
            >
              To optimise learning, pick 1-3 learning tools to use for this
              lesson
            </Text>
          </Modal>
        );
      case PAGE_VIEW.third:
        return (
          <Modal
            title={`Plan lesson for class ${id}`}
            open={isModalOpen}
            onOk={handleOkSecond}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleBackSecond}>
                <ArrowLeftOutlined />
              </Button>,
              <Button key="next" onClick={handleCancel} className="ml-4 ">
                <CheckOutlined />
              </Button>,
            ]}
            width={1000}
          >
            <div className="text-center">
              <Text fontSize={"2xl"} className="px-24 ">
                Here&apos;s your completed lesson plan!
              </Text>
              <Text fontSize={"xl"} className="px-24 pb-4">
                Drag and drop to customise!
              </Text>
            </div>

            <div className="grid grid-cols-12 pb-2 ">
              <div className="h-10 col-span-3 text-center rounded-lg bg-braintrain_lightgreen">
                <Text fontSize={"lg"} className="text-braintrain_green ">
                  Class Discussion
                </Text>
              </div>
              <div className="h-10 text-center rounded-lg bg-braintrain_green"></div>
              <div className="h-10 col-span-4 text-center rounded-lg bg-braintrain_lightgreen">
                <Text fontSize={"lg"} className="text-braintrain_green ">
                  F2F Teaching
                </Text>
              </div>
              <div className="h-10 text-center rounded-lg bg-braintrain_green"></div>
              <div className="h-10 col-span-3 text-center rounded-lg bg-braintrain_lightgreen">
                <Text fontSize={"lg"} className="text-braintrain_green ">
                  Class Worksheets
                </Text>
              </div>
            </div>
          </Modal>
        );
    }
  };

  //datepicker
  const onDateChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
  };

  // duration slider
  const [durationValue, setDurationValue] = useState(1);

  const onDurationChange = (newValue: number) => {
    setDurationValue(newValue);
  };

  // breaks slider
  const [breaksValue, setBreaksValue] = useState(1);

  const onBreaksChange = (newValue: number) => {
    setBreaksValue(newValue);
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
            <Button colorScheme="gray" onClick={showModal}>
              Create Lesson Plan
            </Button>
            {renderModal()}
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
            <Button colorScheme={"green"} className="mt-2" onClick={showModal}>
              Create Lesson Plan
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 pr-2">
        <div className="pt-4">
          <Text
            fontSize="2xl"
            className="pt-2 pb-4 pl-4 font-semibold text-white rounded-t-3xl bg-braintrain_green "
          >
            Upcoming
          </Text>

          <div className="grid grid-cols-1 pt-2 bg-braintrain_gray rounded-b-3xl">
            <div className="grid grid-cols-4 py-4 mx-4 my-2 bg-braintrain_green rounded-xl">
              <ExperimentOutlined
                style={{ fontSize: "50px", color: "#FFFFFF" }}
              />
              <Text fontSize={"3xl"} className="font-semibold text-white">
                14/8
              </Text>
              <div className="col-span-2">
                <Text fontSize={"2xl"} className="text-white ">
                  Chemistry
                </Text>
                <Text fontSize={"2xl"} className="font-semibold text-white">
                  Topic 5 Lesson Plan
                </Text>
              </div>
            </div>
            <div className="grid grid-cols-4 py-4 mx-4 my-2 bg-white rounded-xl">
              <ExperimentOutlined style={{ fontSize: "50px" }} />
              <Text fontSize={"3xl"} className="font-semibold ">
                21/8
              </Text>
              <div className="col-span-2">
                <Text fontSize={"2xl"} className="">
                  Chemistry
                </Text>
                <Text fontSize={"2xl"} className="font-semibold ">
                  Topic 5 Lesson Plan
                </Text>
              </div>
            </div>
            <div className="grid grid-cols-4 py-4 mx-4 my-2 bg-white rounded-xl">
              <ExperimentOutlined style={{ fontSize: "50px" }} />
              <Text fontSize={"3xl"} className="font-semibold ">
                27/8
              </Text>
              <div className="col-span-2">
                <Text fontSize={"2xl"} className="">
                  Chemistry
                </Text>
                <Text fontSize={"2xl"} className="font-semibold ">
                  Topic 6 Lesson Plan
                </Text>
              </div>
            </div>
            <div className="grid grid-cols-4 py-4 mx-4 my-2 bg-white rounded-xl">
              <ExperimentOutlined style={{ fontSize: "50px" }} />
              <Text fontSize={"3xl"} className="font-semibold ">
                27/9
              </Text>
              <div className="col-span-2">
                <Text fontSize={"2xl"} className="">
                  Chemistry
                </Text>
                <Text fontSize={"2xl"} className="font-semibold ">
                  Topic 6 Lesson Plan
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 pl-2">
          <Text
            fontSize="2xl"
            className="pt-2 pb-4 pl-4 font-semibold text-white rounded-t-3xl bg-braintrain_green "
          >
            Habit Pairs Leaderboard
          </Text>

          <div className="grid grid-cols-1 pt-2 bg-braintrain_gray rounded-b-3xl">
            <div className="grid grid-cols-4 py-4 mx-4 my-2 text-white bg-braintrain_green rounded-xl">
              <Text fontSize={"3xl"} className="font-bold pl-14">
                1
              </Text>
              <Text fontSize={"3xl"} className="col-span-2 ">
                Chad and Joe
              </Text>
              <div className="flex">
                <Text fontSize={"3xl"} className="font-bold">
                  21
                </Text>
                <FireFilled style={{ fontSize: "40px", color: "#FFA500" }} />
              </div>
            </div>
            <div className="grid grid-cols-4 py-4 mx-4 my-2 bg-white rounded-xl">
              <TrophyFilled style={{ fontSize: "50px", color: "#C0C0C0" }} />
              <Text fontSize={"3xl"} className="col-span-2 ">
                Chad and Joe
              </Text>
              <div className="flex">
                <Text fontSize={"3xl"} className="font-bold">
                  21
                </Text>
                <FireFilled style={{ fontSize: "40px", color: "#FFA500" }} />
              </div>
            </div>
            <div className="grid grid-cols-4 py-4 mx-4 my-2 bg-white rounded-xl">
              <TrophyFilled style={{ fontSize: "50px", color: "#CD7F32" }} />
              <Text fontSize={"3xl"} className="col-span-2 ">
                Chad and Joe
              </Text>
              <div className="flex">
                <Text fontSize={"3xl"} className="font-bold">
                  21
                </Text>
                <FireFilled style={{ fontSize: "40px", color: "#FFA500" }} />
              </div>
            </div>
            <div className="grid grid-cols-4 py-4 mx-4 my-2 bg-white rounded-xl">
              <Text fontSize={"3xl"} className="font-bold pl-14">
                4
              </Text>
              <Text fontSize={"3xl"} className="col-span-2 ">
                Chad and Joe
              </Text>
              <div className="flex">
                <Text fontSize={"3xl"} className="font-bold">
                  21
                </Text>
                <FireFilled style={{ fontSize: "40px", color: "#FFA500" }} />
              </div>
            </div>
            <div className="grid grid-cols-4 py-4 mx-4 my-2 bg-white rounded-xl">
              <TrophyFilled style={{ fontSize: "50px", color: "#FFD700" }} />
              <Text fontSize={"3xl"} className="col-span-2 ">
                Chad and Joe
              </Text>
              <div className="flex">
                <Text fontSize={"3xl"} className="font-bold">
                  21
                </Text>
                <FireFilled style={{ fontSize: "40px", color: "#FFA500" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
