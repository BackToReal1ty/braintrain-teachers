import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppstoreFilled,
  GroupOutlined,
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Text, Divider } from "@chakra-ui/react";

interface AppSideNavTab {
  name: string;
  link?: string;
  icon?: JSX.Element | JSX.Element[];
}

const APP_SIDENAV_TABS: AppSideNavTab[] = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <AppstoreFilled className="pr-2" />,
  },
  {
    name: "Classes",
    link: "/classes",
    icon: <GroupOutlined className="pr-2" />,
  },
  { name: "Groups", link: `/groups`, icon: <UserOutlined className="pr-2" /> },
  {
    name: "Schedule",
    link: "/schedule",
    icon: <CalendarOutlined className="pr-2" />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <SettingOutlined className="pr-2" />,
  },
  {
    name: "Log Out",
    link: "/logout",
    icon: <LogoutOutlined className="pr-2" />,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const linkClassName = router.asPath;
  const tabs = APP_SIDENAV_TABS;

  return (
    <div className="fixed top-0 h-full hidden w-48 pt-32 bg-white rounded-br-[4rem] shadow-lg md:block">
      <div className="flex items-center justify-center pb-4 ">
        <Avatar
          size="xl"
          name="Dan Abrahmov"
          src="https://i.imgur.com/ypKtLgy.jpeg"
        />
      </div>
      <span>
        <Text className="font-medium text-center">Sarah Brightman</Text>
      </span>
      <span className="flex items-center justify-center h-4 mb-4">
        <Text className="font-bold text-center text-gray-600">3A</Text>
        <Divider
          orientation="vertical"
          borderWidth={"0.8px"}
          borderColor={"black"}
          className="ml-1 mr-1"
        />
        <Text className="text-center text-gray-600 "> English</Text>
      </span>

      {tabs.map((tab, i) => (
        <div
          key={i}
          className={`px-3 py-2 cursor-pointer border-l-4 flex items-center ${
            tab.link === linkClassName
              ? "text-braintrain_blue border-braintrain_blue "
              : "text-gray-400 border-transparent hover:text-braintrain_navy hover:font-medium"
          }`}
        >
          {tab.icon}
          <Link href={tab.link}>{tab.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
