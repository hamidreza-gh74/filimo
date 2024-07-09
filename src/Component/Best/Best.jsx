import { useContext, useRef, useState } from "react";
import Bottom from "./Bottom";
import Pics from "./Pics";
import { MyContext } from "../App";

const Best = () => {
  let { best } = useContext(MyContext);

  let [flag_type, set_type] = useState(1);
  let [ID, set_ID] = useState(1);

  const serial = (e) => {
    set_type(1);
  };

  const movie = () => {
    set_type(2);
  };

  const sendid = (e) => {
    let newid =
      e.target.parentElement.children[0].children[0].getAttribute("id");
    set_ID(newid);
  };

  return (
    <div className="w-[100%] h-[877px]  flex justify-center mt-[30px] ">
      <div className="w-[100%] h-[100%] max-w-[1400px] flex flex-col items-center justify-center">
        <div className="top w-[98%] h-[314px] ">
          <div className="first flex w-[100%]  mb-[24px] ">
            <div className="text ml-[16px] text-[17px] text-[#fff] font-[700] leaing-[24px]">
              محبوب ترین های فیلیمو
            </div>
            <div className="btn w-[120px] h-[28px] bg-[black] rounded-[34px] border flex justify-center gap-[5px] border-solid border-[#ffffff1f] px-[1px] ">
              <button
                className={`flex justify-center items-center w-[58px] px-[8px] text-[12px] text-[#fff] font-[700] rounded-[16px] leading-[24px] ${
                  flag_type == 1 ? "bg-[#ffffff]/[0.2]" : null
                } cursor-pointer `}
                onClick={serial}
              >
                سریال
              </button>
              <button
                className={`flex justify-center items-center w-[58px] px-[8px] text-[12px] text-[#fff] font-[700] rounded-[16px] leading-[24px] cursor-pointer ${
                  flag_type == 2 ? "bg-[#ffffff]/[0.2]" : null
                }`}
                onClick={movie}
              >
                فیلم
              </button>
            </div>
          </div>
          <div className="second w-[100%] h-[262px] flex justify-center overflow-x-auto ">
            <div className="pic w-[100%] h-[100%] pt-[15px] pb-[25px] flex justify-center gap-[40px] ">
              {best != null
                ? best[flag_type - 1]?.list.map((item, index) => {
                    return (
                      <Pics
                        id={item.id}
                        adres={item.adres}
                        key={index}
                        sendid={sendid}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="bottom w-[98%] h-[515px] relative  text-[white]">
          {best != null
            ? best[flag_type - 1]?.list.map((elem, index) => {
                return elem.id == ID ? (
                  <Bottom detail={elem.detail} key={index} />
                ) : null;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Best;
