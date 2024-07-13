import plus from "../../../public/image/accordion/plus.svg";

const Item = ({ item, selected, sample, setSelect }) => {
  const open = selected == sample;
  return (
    <div className="w-[100%] flex flex-col justify-between items-center py-[12px] mb-[15px] rounded-[12px] border-[1px] border-solid border-[#555555] bg-[#2d2d2d] ">
      <div
        className="acc_main flex  w-[100%] justify-between items-center cursor-pointer px-[10px] py-[8px]"
        onClick={() => {
          setSelect(
            selected == `carousel-${item.id}` ? "" : `carousel-${item.id}`
          );
        }}
        id={item.id}
      >
        <div className="text text-[#dcdcdc]  text-[16px] font-[500]">
          {item.text}
        </div>
        <div className="img wimg w-[14px] h-[14px]  ">
          <img
            src={plus}
            alt=""
            className={`w-[100%] h-[100%] object-contain ${
              open ? null : "rotate-45"
            } `}
          />
        </div>
      </div>

      <div
        className={` ${
          open ? "flex" : "hidden"
        }  flex-wrap justify-center items-center  w-[100%] mt-[5px]`}
      >
        <div className="answer text-[#dcdcdc] p-[16px]  text-[14px] font-[400] text-justify leading-[2.17] overflow-hidden  ">
          بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن
          فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر،
          هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و
          هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات بیشتر
          می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و دانلود از
          طریق اپلیکیشن را تماشا کنید.
        </div>
      </div>
    </div>
  );
};

export default Item;
