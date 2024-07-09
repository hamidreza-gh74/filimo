import Pic from "./Pic";
import btn from "../../../public/image/free/btn.svg";
import { useContext } from "react";
import { MyContext } from "../App";

const Freecontent = () => {

  let { free } = useContext(MyContext);
  let btn_left = (e) => {
    let pos = e.currentTarget.parentElement.firstChild;
    pos.scrollLeft = pos.scrollLeft - 250;
  };
  let btn_right = (e) => {
    let pos = e.currentTarget.parentElement.firstChild;
    pos.scrollLeft = pos.scrollLeft + 250;
  };

  return (
    <div className="w-[100%] h-[350px] py-[60px] px-[70px]  flex justify-center bg-[black] ">
      <div className="w-[90%] h-[229px]  max-w-[1200px] relative">
        <div className="box w-[100%] h-[inherit]  max-w-[1200px]  bg-[black] flex justify-start items-center gap-[30px] overflow-hidden scroll-smooth   ">
          {free?.map((item) => {
            return <Pic fname={item.fname} pic={item.pic} key={item.id} />;
          })}
        </div>

        <div
          className="btn_left w-[40px] h-[40px] bg-[#06060699] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] left-[-20px] flex justify-center items-center "
          onClick={btn_left}
        >
          <img src={btn} alt="" className="w-[20px] h-[20px] " />
        </div>

        <div
          className="btn_right w-[40px] h-[40px] bg-[#06060699] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] right-[-20px] flex justify-center items-center "
          onClick={btn_right}
        >
          <img src={btn} alt="" className="w-[20px] h-[20px] rotate-180  " />
        </div>
      </div>
    </div>
  );
};

export default Freecontent;
