"use client";

import { Timeline } from "flowbite-react";
import React from "react";
import CardTimeline from "../card/card timeline/CardTimeline";

const TimelineDemo = () => {
  return (
    <div className="flex max-w-full justify-center  bg-zinc-300">
      <div className="flex max-w-screen-lg  bg-zinc-800">
        <Timeline horizontal className=" h-[500px]">
          <Timeline.Item className="flex justify-center w-full">
            <Timeline.Item className="flex justify-center flex-col w-fit h-fit bg-blue-200 ">
              <Timeline.Point />
              <Timeline.Content>
                <CardTimeline
                  imgUrl="./img/2.jpg"
                  text="helomtfck"
                  name="helllooo"
                />
              </Timeline.Content>
              {/*  */}
            </Timeline.Item>
            <Timeline.Item className="flex justify-center flex-col-reverse w-fit h-fit bg-blue-200">
              <Timeline.Point />
              <Timeline.Content className="my-2">
                <CardTimeline
                  imgUrl="./img/2.jpg"
                  text="helomtfck"
                  name="helllooo"
                />
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default TimelineDemo;
