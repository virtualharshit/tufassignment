import { useEffect, useState } from "react";
import axios from "axios";
import Switch2 from "./Switch2";

const Dashboard = () => {
  const [status, setstatus] = useState(true);

  const [info, setinfo] = useState({
    description: "",
    endtime: "",
    link: "",
    status: true,
  });

  useEffect(() => {
    axios
      .get(`/api/banner/1`)
      .then(({ data }) => {
        console.log(data);
        if (data.status) {
          setinfo(data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`/api/banner/1`, { ...info })
      .then(({ data }) => {
        console.log(data);
        if (data.status) {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(info);
  };

  const getFormattedDate = (date) => {
    const now = new Date(date);

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div className="h-screen w-full z-10 bg-[#e5e7ebbb] flex justify-center items-center">
      <div className="w-[50%] bg-white rounded-lg p-4 relative shadow-[0_0_10px_#00000075]  ">
        <h2 className="text-2xl font-semibold leading-tight mb-2">
          Banner Details
        </h2>

        <form className=" flex flex-col gap-[1vmin]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 text-lg">
            <div>Banner Description</div>
            <input
              type="text"
              name="emails"
              placeholder="banner decription"
              className="w-full p-2 border rounded-lg "
              value={info.description}
              onChange={(e) => {
                setinfo({
                  ...info,
                  description: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex flex-col gap-1 text-lg">
            <div>Banner End Time</div>
            <input
              type="datetime-local"
              name="emails"
              placeholder="john.robinson@gmail.com"
              className="w-full p-2 border rounded-lg "
              value={getFormattedDate(info?.endtime)}
              onChange={(e) => {
                setinfo({
                  ...info,
                  endtime: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex flex-col gap-1 text-lg">
            <div>Banner Link</div>
            <input
              type="text"
              name="emails"
              placeholder="banner link"
              className="w-full p-2 border rounded-lg "
              value={info.link}
              onChange={(e) => {
                setinfo({
                  ...info,
                  link: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex gap-1 text-lg items-center justify-between">
            <div>Banner ON/OFF</div>
            <div className="w-[50%] h-[50px] ">
              <Switch2
                value={info.status}
                handleInputChange={(e) => {
                  setinfo({
                    ...info,
                    status: e.target.checked,
                  });
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-2xl p-2 mt-4 border-[1px] bg-[#DE1D13] text-white "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
