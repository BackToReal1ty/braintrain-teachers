import { FC } from "react";
import { Text, Avatar } from "@chakra-ui/react";
import { Pie, measureTextWidth } from "@ant-design/plots";
import Link from "next/link";
interface ClassCardProps {
  name?: string;
  studentImg?: string;
  studentName?: string;
}

// loop to hardcode students
const renderStudents = (studentImg, studentName) => {
  let students = [];
  for (let i = 1; i < 6; i++) {
    students.push(
      <div className="text-center">
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src={studentImg ? studentImg : "https://i.imgur.com/Y0hoNEA.jpeg"}
        />
        <Text fontSize="md">{studentName ? studentName : "Chad"}</Text>
      </div>
    );
  }
  return students;
};

// chart logic
function renderStatistic(containerWidth, text, style) {
  const { width: textWidth, height: textHeight } = measureTextWidth(
    text,
    style
  );
  const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

  let scale = 1;

  if (containerWidth < textWidth) {
    scale = Math.min(
      Math.sqrt(
        Math.abs(
          Math.pow(R, 2) /
            (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
        )
      ),
      1
    );
  }

  const textStyleStr = `width:${containerWidth}px;`;
  return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
    scale < 1 ? 1 : "inherit"
  };">${text}</div>`;
}

const data = [
  {
    type: "Kinaesthetic",
    value: 5,
  },
  {
    type: "Visual",
    value: 7,
  },
  {
    type: "Auditory",
    value: 9,
  },

  {
    type: "Read/Write",
    value: 13,
  },
];
const config = {
  appendPadding: 10,
  data,
  angleField: "value",
  colorField: "type",
  radius: 1,
  innerRadius: 0.64,
  meta: {
    value: {
      formatter: (v) => `${v} ¥`,
    },
  },
  label: {
    type: "inner",
    offset: "-50%",
    style: {
      textAlign: "center",
    },
    autoRotate: false,
    content: "{value}",
  },
  statistic: {
    title: {
      offsetY: -4,
      customHtml: (container, view, datum) => {
        const { width, height } = container.getBoundingClientRect();
        const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
        const text = datum ? datum.type : "Students";
        return renderStatistic(d, text, {
          fontSize: 28,
        });
      },
    },
    content: {
      offsetY: 4,
      style: {
        fontSize: "32px",
      },
      customHtml: (container, view, datum, data) => {
        const { width } = container.getBoundingClientRect();
        const text = datum
          ? `${datum.value}`
          : `${data.reduce((r, d) => r + d.value, 0)}`;
        return renderStatistic(width, text, {
          fontSize: 32,
        });
      },
    },
  },
  // 添加 中心统计文本 交互
  interactions: [
    {
      type: "element-selected",
    },
    {
      type: "element-active",
    },
    {
      type: "pie-statistic-active",
    },
  ],
};

const Classcard: FC<ClassCardProps> = ({ name, studentImg, studentName }) => {
  return (
    <Link href={`classes/${name ? name : "3A"}`}>
      <div className="p-4 shadow-lg cursor-pointer rounded-3xl hover:shadow-2xl hover:transition-shadow">
        <Text fontSize="lg" className="font-semibold text-center">
          Class {name ? name : "3A"}
        </Text>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-5">
            {renderStudents(studentImg, studentName)}
            {renderStudents(studentImg, studentName)}
            {renderStudents(studentImg, studentName)}
            {renderStudents(studentImg, studentName)}
            {renderStudents(studentImg, studentName)}
          </div>

          <div>
            <Pie {...config} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Classcard;
