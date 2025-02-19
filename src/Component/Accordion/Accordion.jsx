import { useContext, useState } from "react";
import Item from "./Item";
import { MyContext } from "../App";

const Accordion = () => {
  let { accordion } = useContext(MyContext);
  const [selected, setSelect] = useState("");

  return (
    <div className="w-[100%] h-[auto] bg-[#292929] flex justify-center ">
      <div className="w-[100%] h-[auto] py-[80px] max-w-[1400px] bg-[#292929] flex justify-center ">
        <div className="w-[94%] h-[100%] px-[20px]  flex flex-col items-center">
          <h2 className="text-[16px] font-[400] text-[white] ">
            سوالات متداول
          </h2>
          <div className="mt-[10px] mb-[32px] text-[12px] font-[400] text-[#9e9e9e]">
            سوال شایع دیگر کاربران شاید برای شما پیش امده باشد
          </div>
          <div className="w-[80%] h-[auto]">
            {accordion?.map((item) => {
              return (
                <Item
                  item={item}
                  selected={selected}
                  setSelect={setSelect}
                  sample={`carousel-${item.id}`}
                  key={`carousel-${item.id}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
