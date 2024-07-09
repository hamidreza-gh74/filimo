import ticket from "../../../public/image/cinama/ticket.webp";
import Sub_info from "./Sub_info";

const Info = ({ item }) => {

  return (
    <>
      <div className="w-[45%] h-[244px] bg-[#ffffff]/[0.06]  max-w-[526] basis-[506px] py-[10px] px-[10px] flex relative border-[1px] border-solid border-[#33353d] rounded-[12px]">
        <a className="block w-[165px] h-[220px] ml-[16px] " href="">
          <img
            className="w-[100%] h-[100%] rounded-[8px]"
            src={item.adress}
            alt=""
          />
        </a>
        <div className="w-fit h-[223px] flex flex-col gap-[20px]">
          <a
            href=""
            className="name1 block mb-[12px] text-[white] text-[13px] font-[700]"
          >
            {item.fname}
          </a>
          <div className="name2 mb-[16px] text-[#d8d8d8] font-[100] text-[12px]">
            {item.sname}{" "}
          </div>
          <div className=" topic flex gap-[15px] w-fit mb-[24px]">
            {item.topic.map((item, index) => {
              return <Sub_info key={index} item={item} />;
            })}
          </div>
          <div className="btn w-[70px] h-[37px] p-[10px] border-[1px] border-solid border-[#fff] rounded-[8px] hover:bg-[#151515] ">
            <a
              href=""
              className="block w-[100%] h-[100%] text-[10px] font-[400] text-[white] "
            >
              خرید بلیت
            </a>
          </div>
          <div className="online flex justify-center items-center w-[88px] h-[24px] py-[4px] px-[6px]  absolute top-[10px] left-[25px] rounded-[16px] bg-[black]/[0.3]">
            <img src={ticket} alt="" className="w-[15px] h-[15px]" />
            <span className="text-[white] font-[400] text-[10px]">
              اکران آنلاین
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
