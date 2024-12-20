import { useState, useEffect } from "react";
import request from "../../utils/http";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import StationList from "./Station"
import MemberList from "./Member"
import ChartList from "./Chart"

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      {/* <div className="sticky w-6/12">
        <input
          className="p-3 rounded-2xl bg-gray-200 pl-10 w-full"
          type="text"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 absolute left-4 top-4 text-gray-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div> */}
      {/* <div className="flex items-center gap-x-3">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>
        <img
          className="size-9 rounded-full"
          src="data:image/png;base64,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"
          alt=""
        />
        <p>Khoi</p>
      </div> */}
    </div>
  );
};
const Schedule = (props) => {
  const [active, setActive] = useState(true);
  const { scheduleName, startTime, stopTime, flow1, flow2, flow3 } = props.data;

  return (
    <div className="flex flex-wrap items-center justify-between p-4 border-2 border-gray-200 rounded-md bg-white cursor-pointer gap-y-2 hover:shadow-md hover:scale-[1.02] duration-200">
      <div className="flex gap-x-4">
        <img
          className="aspect-square size-24 rounded-lg border-2 border-purple-200"
          src="
        https://www.diggers.com.au/cdn/shop/products/orange-cara-cara-navel-wcitcco_162cbf34-0cae-43ac-a538-847d0dc57335_2048x.jpg?v=1637122538
          "
          alt=""
        />
        <div className="flex flex-col gap-y-2">
          <p className="font-bold">{scheduleName}</p>
          <p>
            {startTime} - {stopTime}
          </p>
          <div className="flex">
            <div className="bg-red-200 p-1 rounded-s-lg">{flow1}ml</div>
            <div className="bg-blue-200 p-1">{flow2}ml</div>
            <div className="bg-yellow-200 p-1 rounded-e-lg">{flow3}ml</div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-8">
        <p className="font-medium">Every day</p>
        <label
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="inline-flex items-center cursor-pointer"
        >
          <span className="text-purple-950 me-2 font-bold">
            {active ? "ACTIVE" : "INACTIVE"}
          </span>
          <input
            checked={active}
            onChange={() => {
              setActive(!active);
            }}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-purple-300 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-purple-700 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-400"></div>
        </label>
      </div>
    </div>
  );
};

const ScheduleForm = (props) => {
  const { toggleScheduleForm, addSchedule } = props;
  const { client } = useContext(MqttContext);

  const [scheduleName, setScheduleName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);
  const [flow1, setFlow1] = useState(null);
  const [flow2, setFlow2] = useState(null);
  const [flow3, setFlow3] = useState(null);
  const [cycle, setCycle] = useState(null);
  const [area, setArea] = useState(null);
  const [everyday, setEveryday] = useState(true);
  const [date, setDate] = useState(null);

  const handleForm = () => {
    const data = {
      id: 1,
      action: "ADD",
      scheduleName: scheduleName,
      description: description,
      startTime: startTime,
      stopTime: stopTime,
      flow1: Number(flow1),
      flow2: Number(flow2),
      flow3: Number(flow3),
      cycle: Number(cycle),
      area: Number(area),
      everyday: everyday ? 1 : 0,
      date: date || "",
    };

    console.log(data);
    console.log(JSON.stringify(data));

    client.publish(
      "khoitruong9802/feeds/schedules",
      JSON.stringify(data),
      0,
      (error) => {
        if (error) {
          console.log("Publish error: ", error);
        }
        console.log("Pulish ok!");
      }
    );

    addSchedule(data);
    toggleScheduleForm();
  };

  return (
    <div className="flex flex-col gap-y-3 p-8 bg-white w-[40rem] rounded-md overflow-auto h-[95%]">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">CREATE SCHEDULE</p>
        <button onClick={toggleScheduleForm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div>
        <label htmlFor="title" className="font-bold">
          Schedule name
        </label>
        <input
          value={scheduleName}
          onChange={(event) => setScheduleName(event.target.value)}
          id="title"
          className="p-3 w-full border-2 border-[#e5e5e5] rounded-sm"
          type="text"
          placeholder="Example: Apple schedule"
        />
      </div>

      <div>
        <label htmlFor="product-review" className="font-bold">
          Description
        </label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          id="product-review"
          className="p-2 border-2 border-[#e5e5e5] w-full"
          placeholder="Example: Apples are highly nutritious and offer numerous health benefits. Here is a typical nutritional profile for a medium-sized apple"
        ></textarea>
      </div>

      <div className="flex gap-x-3">
        <div className="w-6/12">
          <label htmlFor="start-time" className="font-bold">
            Start time
          </label>
          <input
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
            id="start-time"
            className="p-3 border-2 border-[#e5e5e5] w-full"
            type="time"
          />
        </div>
        <div className="w-6/12">
          <label htmlFor="stop-time" className="font-bold">
            Stop time
          </label>
          <input
            value={stopTime}
            onChange={(event) => setStopTime(event.target.value)}
            id="stop-time"
            className="p-3 border-2 border-[#e5e5e5] w-full"
            type="time"
          />
        </div>
      </div>

      <div className="flex gap-x-3">
        <div className="w-4/12">
          <label htmlFor="flow1" className="font-bold">
            Flow 1
          </label>
          <input
            value={flow1}
            onChange={(event) => setFlow1(event.target.value)}
            id="flow1"
            className="p-3 border-2 border-[#e5e5e5] w-full"
            type="number"
          />
        </div>
        <div className="w-4/12">
          <label htmlFor="flow2" className="font-bold">
            Flow 2
          </label>
          <input
            value={flow2}
            onChange={(event) => setFlow2(event.target.value)}
            id="flow2"
            className="p-3 border-2 border-[#e5e5e5] w-full"
            type="number"
          />
        </div>
        <div className="w-4/12">
          <label htmlFor="flow3" className="font-bold">
            Flow 3
          </label>
          <input
            value={flow3}
            onChange={(event) => setFlow3(event.target.value)}
            id="flow3"
            className="p-3 border-2 border-[#e5e5e5] w-full"
            type="number"
          />
        </div>
      </div>

      <div className="flex gap-x-3">
        <div className="w-6/12">
          <label htmlFor="cycle" className="font-bold">
            Cycle
          </label>
          <input
            value={cycle}
            onChange={(event) => setCycle(event.target.value)}
            id="cycle"
            className="p-3 w-full border-2 border-[#e5e5e5] rounded-sm"
            type="number"
          />
        </div>
        <div className="w-6/12">
          <label htmlFor="area" className="font-bold">
            Area ID
          </label>
          <input
            value={area}
            onChange={(event) => setArea(event.target.value)}
            id="area"
            className="p-3 w-full border-2 border-[#e5e5e5] rounded-sm"
            type="number"
          />
        </div>
      </div>

      <div className="flex gap-x-3">
        <div className="w-6/12">
          <p className="font-bold mb-3">Every day?</p>

          <div className="flex gap-x-8">
            <div className="flex items-center gap-x-2">
              <input
                checked={everyday === true}
                onChange={() => setEveryday(true)}
                type="radio"
                id="everyday-yess"
                className="w-5 h-5 accent-black"
              />
              <label htmlFor="everyday-yes">Yes</label>
            </div>

            <div className="flex items-center gap-x-2">
              <input
                checked={everyday === false}
                onChange={() => setEveryday(false)}
                type="radio"
                id="everyday-no"
                className="w-5 h-5 accent-black"
              />
              <label htmlFor="everyday-no">No</label>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <label
            htmlFor="date"
            className={`font-bold ${everyday && "text-gray-500"}`}
          >
            Date
          </label>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            id="date"
            className={`p-3 border-2 border-[#e5e5e5] w-full ${everyday && "text-gray-500"
              }`}
            type="date"
            disabled={everyday}
          />
        </div>
      </div>

      <button
        onClick={handleForm}
        className="text-white bg-[#0C0D21] hover:shadow-xl self-start p-3 rounded-sm"
      >
        Save schedule
      </button>
    </div>
  );
};

const ScheduleList = () => {
  const [showScheduleForm, setshowScheduleForm] = useState(false);
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSchedules([{
      scheduleName: "12",
      startTime: "12",
      stopTime: "12",
      flow1: 12,
      flow2: 12,
      flow3: 12,
    }]);
    // setIsLoading(true);
    // request.get("/schedule")
    //   .then((res) => {
    //     setSchedules(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   })
  }, []);

  const addSchedule = (data) => {
    console.log("Add schedule");
    setSchedules((prev) => [...prev, data]);
  };

  const toggleScheduleForm = () => {
    setshowScheduleForm(!showScheduleForm);
  };

  return (
    <Loading isLoading={isLoading}>
      <div className="flex flex-col bg-gradient-to-tr from-purple-200 to-blue-200 rounded-lg p-4 gap-y-4">
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium">Schedule</p>
          <button
            onClick={toggleScheduleForm}
            className="p-2 bg-purple-500 size-10 rounded-full hover:shadow-lg hover:shadow-purple-300 hover:bg-purple-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-y-4">
          {schedules.map((item) => (
            <Schedule data={item} key={item._id} />
          ))}
        </div>

        <Modal isOpen={showScheduleForm} onClose={toggleScheduleForm}>
          <ScheduleForm
            toggleScheduleForm={toggleScheduleForm}
            addSchedule={addSchedule}
          />
        </Modal>
      </div>
    </Loading>
  );
};

const devices = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    ),
    name: "Pump in",
    relayID: 7,
    bgcolor: "bg-[#FF9062]",
    switchbgcolor: "after:bg-[#FF9062]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    ),
    name: "Pump out",
    relayID: 8,
    bgcolor: "bg-[#F5C525]",
    switchbgcolor: "after:bg-[#F5C525]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    ),
    name: "Flow one",
    relayID: 1,
    bgcolor: "bg-[#3ACBE8]",
    switchbgcolor: "after:bg-[#3ACBE8]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    ),
    name: "Flow two",
    relayID: 2,
    bgcolor: "bg-[#7C41F5]",
    switchbgcolor: "after:bg-[#7C41F5]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
    ),
    name: "Flow three",
    relayID: 3,
    bgcolor: "bg-green-400",
    switchbgcolor: "after:bg-green-400",
  },
];

const Device = (props) => {
  const { icon, name, relayID, bgcolor, switchbgcolor } = props.data;

  return (
    <div
      className={`flex flex-col p-2 ${bgcolor} rounded-lg aspect-video justify-evenly max-w-[12rem]`}
    >
      <div className="flex justify-between">
        {icon}
        <label className="inline-flex items-center cursor-pointer">
          <span className="text-white font-bold">
            {1 === 1 ? "ON" : "OFF"}
          </span>
          <input
            checked={false}
            onChange={() => false}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div
            className={`scale-75 relative w-11 h-6 bg-white rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${switchbgcolor} after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-100`}
          ></div>
        </label>
      </div>
      <p className="text-white font-medium">{name}</p>
    </div>
  );
};

const DeviceList = () => {
  return (
    <div className="flex flex-col p-4 gap-y-2 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">Devices</p>
        <button className="bg-gray-200 rounded-lg p-2 aspect-square">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {devices.map((item, index) => {
          return <Device data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="flex gap-x-4">
      <div className="flex flex-col w-5/12 gap-y-4">
        <StationList />
        <MemberList />
        <DeviceList />
      </div>
      <div className="flex flex-col w-7/12 gap-y-4">
        <ScheduleList />
        <ChartList />
      </div>
    </div>
  );
};

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Loading isLoading={isLoading}>
        <div className="flex flex-col p-4 gap-y-4 w-full">
          <Header />
          <Body />
        </div>
    </Loading>
  );
}

export default Dashboard;
